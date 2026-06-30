import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'google-sheets',
  label: 'Google Sheets',
  icon: 'google-sheet',
}

export default function GoogleSheets({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="12. Google Sheets"
      className="mt-8"
    >
      <p className={styles.body}>
        Connect Google Sheets to import customer, lead, or offline conversion data into Aixel.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>A Google account with access to the spreadsheet</li>
          <li>Permission to authorize third-party applications</li>
          <li>At least one Google Sheet available for import</li>
        </ul>
      </div>

      <DocSteps
        title="Steps to connect"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Open Sources',
            content: (
              <p>Navigate to Sources and select Data Sources from the left menu.</p>
            ),
          },
          {
            title: 'Select Google Sheets',
            content: <p>Select Google Sheets.</p>,
          },
          {
            title: 'Link Google Sheet',
            content: (
              <p>
                Click <span className="font-semibold">Link Google Sheet</span>.
              </p>
            ),
          },
          {
            title: 'Choose Google Account',
            content: <p>Choose the Google account you want to connect with.</p>,
          },
          {
            title: 'Authorize Aixel',
            content: (
              <p>Authorize Aixel with permission to access your Google Sheets.</p>
            ),
          },
          {
            title: 'Select Spreadsheet',
            content: <p>Select the Google Sheet you want to use.</p>,
          },
          {
            title: 'Choose Account',
            content: <p>Choose the account associated with the spreadsheet.</p>,
          },
          {
            title: 'Select Sheet',
            content: <p>Select the required sheet from your Google Drive.</p>,
          },
          {
            title: 'Complete Setup',
            content: (
              <p>
                Click <span className="font-semibold">Continue</span> to complete the setup.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          The Google Sheets source will display a Connected status. Aixel will begin importing data
          from the selected sheet.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <p className={styles.body}>
          If the connection cannot be completed, verify your permissions, confirm that the source
          account is active, and reconnect the integration. Contact Aixel Support if the issue
          persists.
        </p>
      </div>
    </DocSubsection>
  )
}
