import { DocPageContext } from '../content/components/DocPageContext'
import DocIcon from '../content/components/DocIcon'
import DocBreadcrumbs from './DocBreadcrumbs'
import DocPager from './DocPager'
import { getAdjacentNavItems, getBreadcrumbs } from '../content/registry'

export default function DocPageLayout({
  route,
  flatNav,
  isDarkMode,
  contentRef,
  children,
}) {
  const breadcrumbs = getBreadcrumbs(route)
  const { previous, next } = getAdjacentNavItems(flatNav, route.path)
  const isStandalonePage = route.type === 'page'

  const title =
    route.type === 'overview' ? route.section.title : route.page.title ?? route.page.label

  const description =
    route.type === 'overview' ? route.section.description : route.page.description

  const icon = route.type === 'page' ? route.page.icon : ''

  const headingClass = `doc-subsection-title text-2xl font-semibold leading-tight ${
    isDarkMode ? 'text-gray-100' : 'text-gray-900'
  }`
  const descriptionClass = isDarkMode ? 'text-gray-300' : 'text-gray-600'
  const borderClass = isDarkMode ? 'border-zinc-800' : 'border-gray-200'

  return (
    <DocPageContext.Provider value={{ standalone: isStandalonePage }}>
      <article ref={contentRef} className="pb-8">
        <header className={`mb-8 border-b pb-6 ${borderClass}`}>
          <DocBreadcrumbs items={breadcrumbs} isDarkMode={isDarkMode} />
          <div className="flex items-center gap-3">
            {icon ? <DocIcon name={icon} className="h-9 w-9" isDarkMode={isDarkMode} /> : null}
            <h1 className={headingClass}>{title}</h1>
          </div>
          {description ? (
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${descriptionClass}`}>
              {description}
            </p>
          ) : null}
        </header>

        <div className="space-y-6">{children}</div>

        <DocPager previous={previous} next={next} isDarkMode={isDarkMode} />
      </article>
    </DocPageContext.Provider>
  )
}
