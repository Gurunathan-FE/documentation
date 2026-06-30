import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'webhooks',
  label: 'Webhooks',
  icon: 'LuWebhook',
}

export default function Webhooks({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="13. Webhooks"
      className="mt-8"
      icon={subsectionMeta.icon}
    >
      <p className={styles.body}>
        Use Webhooks to receive customer and lead data from external CRM platforms and applications
        in real time.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Aixel account</li>
          <li>Access to the CRM or application that will send data</li>
          <li>Permission to configure webhooks in the source system</li>
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
                Navigate to <span className="font-semibold">Sources</span> and select{' '}
                <span className="font-semibold">Data Sources</span>.
              </p>
            ),
          },
          {
            title: 'Select Webhooks',
            content: (
              <p>
                Select <span className="font-semibold">Webhooks</span>.
              </p>
            ),
          },
          {
            title: 'Create Webhook',
            content: (
              <p>
                Click <span className="font-semibold">Create Webhook</span>.
              </p>
            ),
          },
          {
            title: 'Enter Topic Name',
            content: (
              <p>
                Enter a <span className="font-semibold">Topic Name</span> for the webhook.
              </p>
            ),
          },
          {
            title: 'Select CRM Source',
            content: (
              <p>
                Select the <span className="font-semibold">CRM source</span> from the dropdown list.
              </p>
            ),
          },
          {
            title: 'Continue',
            content: (
              <p>
                Click <span className="font-semibold">Continue</span>.
              </p>
            ),
          },
          {
            title: 'Copy Webhook URL',
            content: (
              <p>
                Copy the generated <span className="font-semibold">Webhook URL</span>.
              </p>
            ),
          },
          {
            title: 'Configure in CRM',
            content: (
              <p>
                Configure the <span className="font-semibold">Webhook URL</span> in your CRM or
                external application.
              </p>
            ),
          },
          {
            title: 'Start Sending Data',
            content: <p>Save the configuration and begin sending data to Aixel.</p>,
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          Once configured, Aixel will start receiving data from the connected CRM or application
          through the webhook endpoint.
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
