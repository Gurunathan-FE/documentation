import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'google-ads-enhanced-conversions',
  label: 'Google Ads Enhanced Conversions',
  icon: 'google',
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

export default function GoogleAdsEnhancedConversions({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="16. Google Ads Enhanced Conversions"
      className="mt-8"
      icon={subsectionMeta.icon}
    >
      <p className={styles.body}>
        Use Google Ads Enhanced Conversions to send conversion data from Aixel directly to the
        destination platform.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Aixel account</li>
          <li>A connected source account</li>
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
                Open <span className="font-semibold">Destinations</span> from the left navigation
                menu.
              </p>
            ),
          },
          {
            title: 'Select Google Ads Enhanced Conversions',
            content: (
              <p>
                Select <span className="font-semibold">Google Ads Enhanced Conversions</span>.
              </p>
            ),
          },
          {
            title: 'Connect Google Ads',
            content: (
              <p>Use an existing Google Ads connection or connect a new account.</p>
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
            content: (
              <p>
                Click the <span className="font-semibold">Add (+)</span> button.
              </p>
            ),
          },
          {
            title: 'Select Profile Event',
            content: <p>Select the profile event you want to send.</p>,
          },
          {
            title: 'Map Conversion Action',
            content: <p>Choose the matching Google Conversion Action.</p>,
          },
          {
            title: 'Save Mapping',
            content: (
              <p>
                Review the mapping and click <span className="font-semibold">Save</span>.
              </p>
            ),
          },
          {
            title: 'Verify Status',
            content: <p>Verify that the destination status changes to Active.</p>,
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
