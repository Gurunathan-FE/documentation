import OverviewBentoGrid from '../components/OverviewBentoGrid'
import { useDocStyles } from '../components/useDocStyles'

const dataSources = [
  {
    title: 'Google Sheets',
    icon: 'google-sheet',
    category: 'Spreadsheet',
    description: 'Import structured customer, lead, and offline conversion rows from Sheets.',
    path: '/data-source-integration/google-sheets',
  },
  {
    title: 'Webhooks',
    icon: 'LuWebhook',
    category: 'Realtime',
    description: 'Push lead and customer events into Aixel instantly from external systems.',
    path: '/data-source-integration/webhooks',
  },
  {
    title: 'Meta Lead Generation',
    icon: 'meta',
    category: 'Lead forms',
    description: 'Sync leads captured through Meta forms directly into your tracking pipeline.',
    path: '/data-source-integration/meta-lead-generation',
  },
  {
    title: 'Clarity',
    icon: 'clarity',
    category: 'Behavioral',
    description: 'Enrich attribution with session behavior and customer interaction insights.',
    path: '/data-source-integration/clarity',
  },
]

export default function DataSourceIntegrationOverview({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <div className="space-y-6">
      <p className={styles.body}>
        Connect external data sources to import customer, lead, and behavioral data into Aixel.
        Choose from Google Sheets, webhooks, Meta Lead Generation, or Microsoft Clarity.
      </p>

      <OverviewBentoGrid
        title="Available Data Sources"
        description="Choose the source that best matches how your business collects first-party data."
        items={dataSources}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}
