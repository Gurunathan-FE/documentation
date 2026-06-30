import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'meta-conversion-api',
  label: 'Meta Conversion API',
  icon: 'meta',
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

export default function MetaConversionApi({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="17. Meta Conversion API"
      className="mt-8"
      icon={subsectionMeta.icon}
    >
      <p className={styles.body}>
        Use Meta Conversion API to send conversion data from Aixel directly to the destination
        platform.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Aixel account</li>
          <li>A connected Meta source account</li>
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
            title: 'Select Meta Conversion API',
            content: (
              <p>
                Select <span className="font-semibold">Meta Conversion API</span>.
              </p>
            ),
          },
          {
            title: 'Choose Meta Ads Account',
            content: (
              <p>Choose an existing Meta Ads account or connect a new one.</p>
            ),
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
            title: 'Add Event Mapping',
            content: <p>Add a new event mapping.</p>,
          },
          {
            title: 'Select Profile Event',
            content: <p>Select the profile event from Aixel.</p>,
          },
          {
            title: 'Map Meta Event',
            content: <p>Map it to the corresponding Meta event.</p>,
          },
          {
            title: 'Save Configuration',
            content: <p>Save the configuration.</p>,
          },
          {
            title: 'Confirm Active Status',
            content: <p>Confirm the destination is active.</p>,
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
