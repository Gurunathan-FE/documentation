import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'clarity',
  label: 'Clarity',
  icon: 'clarity',
}

export default function Clarity({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="15. Clarity"
      className="mt-8"
    >
      <p className={styles.body}>
        Connect Microsoft Clarity to enrich customer insights with behavioral analytics and session
        recordings.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Microsoft Clarity account</li>
          <li>A Clarity project already created</li>
          <li>Access to the Clarity Project ID</li>
        </ul>
      </div>

      <DocSteps
        title="Steps to connect"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Open Sources',
            content: (
              <p>
                Navigate to <span className="font-semibold">Sources</span> in the{' '}
                <span className="font-semibold">Integrations</span> menu.
              </p>
            ),
          },
          {
            title: 'Select Clarity',
            content: (
              <p>
                Select <span className="font-semibold">Clarity</span>.
              </p>
            ),
          },
          {
            title: 'Link Account',
            content: (
              <p>
                Click <span className="font-semibold">Link Account</span>.
              </p>
            ),
          },
          {
            title: 'Enter Project ID',
            content: (
              <p>
                Enter the <span className="font-semibold">Clarity Project ID</span>.
              </p>
            ),
          },
          {
            title: 'Verify Project Details',
            content: <p>Verify the project details.</p>,
          },
          {
            title: 'Save Configuration',
            content: <p>Save the configuration.</p>,
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          The Clarity integration will display a Connected status and begin syncing behavioral data
          with Aixel.
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
