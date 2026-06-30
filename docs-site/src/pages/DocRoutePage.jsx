import { Navigate, useLocation } from 'react-router-dom'
import DocPageLayout from '../components/DocPageLayout'
import { useInstallationStyles } from '../content/components/useDocStyles'
import { defaultPath, pathToRoute } from '../content/registry'

export default function DocRoutePage({ flatNav, isDarkMode, contentRef }) {
  const { pathname } = useLocation()
  const route = pathToRoute[pathname]
  const installationStyles = useInstallationStyles(isDarkMode)

  if (!route) {
    return <Navigate to={defaultPath} replace />
  }

  if (route.type === 'overview') {
    const Overview = route.section.Overview

    return (
      <DocPageLayout route={route} flatNav={flatNav} isDarkMode={isDarkMode} contentRef={contentRef}>
        {Overview ? <Overview isDarkMode={isDarkMode} /> : null}
      </DocPageLayout>
    )
  }

  const PageComponent = route.page.Component
  const pageProps = { isDarkMode }

  if (route.section.id === 'installation') {
    pageProps.styles = installationStyles
  }

  return (
    <DocPageLayout route={route} flatNav={flatNav} isDarkMode={isDarkMode} contentRef={contentRef}>
      <PageComponent {...pageProps} />
    </DocPageLayout>
  )
}
