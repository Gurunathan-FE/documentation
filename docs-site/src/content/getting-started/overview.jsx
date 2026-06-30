import { useDocStyles } from '../components/useDocStyles'
import OnboardingSummaryCard from './OnboardingSummaryCard'

export default function GettingStartedOverview({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <div className="space-y-6">
      <p className={styles.body}>
        This document contains the complete user-facing documentation for Aixel's onboarding and integration flows. It is designed as a step-by-step guided experience that takes a new user from account creation to fully connected ad tracking — fast.
      </p>
      <p className={styles.body}>
        This section walks you through Aixel's onboarding flow step by step — from creating
        your account to logging in and connecting your first data sources.
      </p>

      <OnboardingSummaryCard isDarkMode={isDarkMode} />

      <p className={styles.body}>
        Use the sidebar to jump to any step, or follow the guided path in order for the fastest
        setup.
      </p>
    </div>
  )
}
