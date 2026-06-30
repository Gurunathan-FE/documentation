import { useDocStyles } from '../components/useDocStyles'
import InstallationSummaryCard from './InstallationSummaryCard'

export default function InstallationOverview({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <div className="space-y-6">
      <p className={styles.body}>
        Install the Aixel SDK in your application to start tracking events and identifying users.
        Follow the steps below to add the bootstrap script, create a pixel file, set up profiles,
        and track events across your stack.
      </p>

      <InstallationSummaryCard isDarkMode={isDarkMode} />

      <p className={styles.body}>
        Use the sidebar to jump to any step, or follow the guided path in order for the fastest
        setup. Each step includes code examples for HTML, React, Next.js, and Angular.
      </p>
    </div>
  )
}
