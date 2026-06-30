import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'whatsapp-conversion-api',
  label: 'WhatsApp Conversion API',
  icon: 'whatsapp-business-icon',
}

const troubleshooting = [
  [
    'Destination not receiving events',
    'Verify the event mapping and confirm the source event is being generated.',
  ],
  [
    'Authorization failed',
    'Reconnect the destination and confirm account permissions.',
  ],
  [
    'No accounts available',
    'Verify that the account is connected under Integrations.',
  ],
]

export default function WhatsAppConversionApi({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="18. WhatsApp Conversion API"
      className="mt-8"
      icon={subsectionMeta.icon}
    >
      <p className={styles.body}>
        Use WhatsApp Conversion API to send conversion data from Aixel directly to the destination
        platform.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Aixel account</li>
          <li>A connected WhatsApp source account</li>
          <li>Required permissions for the destination platform</li>
          <li>At least one profile event available for mapping</li>
        </ul>
      </div>

      <DocSteps
        title="Steps to configure"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Open Destinations',
            content: (
              <p>
                Open <span className="font-semibold">Destinations</span>.
              </p>
            ),
          },
          {
            title: 'Select WhatsApp Conversion API',
            content: (
              <p>
                Select <span className="font-semibold">WhatsApp Conversion API</span>.
              </p>
            ),
          },
          {
            title: 'Choose WhatsApp Account',
            content: <p>Choose the connected WhatsApp account.</p>,
          },
          {
            title: 'Configure',
            content: (
              <p>
                Click <span className="font-semibold">Configure</span>.
              </p>
            ),
          },
          {
            title: 'Create Event Mapping',
            content: <p>Create an event mapping.</p>,
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          Once configured, the destination status will display as Connected or Active. New events
          will be transmitted automatically based on the configured mappings.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={troubleshooting.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
