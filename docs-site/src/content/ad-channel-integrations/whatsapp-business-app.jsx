import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'whatsapp-business-app-integration',
  label: 'WhatsApp Business App',
  icon: 'whatsapp-business-icon',
}

const apiVsAppComparison = [
  [
    'Best for',
    'Larger businesses with automated messaging workflows',
    'Small to mid-size businesses using the app directly',
  ],
  [
    'Managed via',
    'Third-party API provider or Meta Cloud API',
    'The WhatsApp Business App on your phone',
  ],
  [
    'Integration path',
    'Links via WhatsApp Business Account',
    'Links via WhatsApp Addition Method',
  ],
]

const whatsappAppTroubleshooting = [
  [
    "Can't find account",
    'Verify your WhatsApp Business App is linked to a Meta Business account',
  ],
  [
    'Addition method unclear',
    'Check your WhatsApp Business App settings to confirm how the number was originally registered',
  ],
  [
    'No Business Profile',
    'Complete your Business Profile setup in the WhatsApp Business App before connecting',
  ],
]

export default function WhatsAppBusinessApp({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="9. WhatsApp Business App Integration"
      className="mt-8"
    >
      <p className={styles.body}>
        Connect your WhatsApp Business App to Aixel to track conversations and measure how your
        WhatsApp presence drives results.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>The WhatsApp Business App installed and active on your phone</li>
          <li>A Meta Business account linked to your WhatsApp Business App</li>
          <li>Access to the Business Profile associated with your WhatsApp number</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>How This Differs from WhatsApp Business API</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['', 'WhatsApp Business API', 'WhatsApp Business App']}
          rows={apiVsAppComparison.map(([feature, api, app]) => ({
            key: feature,
            cells: [feature, api, app],
          }))}
        />
      </div>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Click "Link WhatsApp Business App"',
            content: (
              <p>
                From the integrations dashboard, select the Sources tab, find the WhatsApp Business
                App card, and click the{' '}
                <span className="font-semibold">&quot;Link WhatsApp&quot;</span> button.
              </p>
            ),
          },
          {
            title: 'Authorize Aixel',
            content: (
              <p>
                You&apos;ll be redirected to Meta&apos;s authorization screen. Grant Aixel the
                required permissions to access your WhatsApp Business data.
              </p>
            ),
          },
          {
            title: 'Select Your Account',
            content: (
              <p>Choose the Meta account associated with your WhatsApp Business App.</p>
            ),
          },
          {
            title: 'Choose Your Business Profile',
            content: (
              <p>Select the Business Profile linked to your WhatsApp number.</p>
            ),
          },
          {
            title: 'Choose the WhatsApp Addition Method',
            content: (
              <p>
                Select the method by which your WhatsApp number is connected. This depends on how
                your WhatsApp Business App was originally set up.
              </p>
            ),
          },
          {
            title: 'Confirm & Start Tracking',
            content: (
              <p>
                Review your selections and click{' '}
                <span className="font-semibold">&quot;Confirm &amp; Start Tracking&quot;</span>.
                Aixel will begin tracking your WhatsApp Business App conversations.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          The WhatsApp Business App card will update to{' '}
          <span className="font-semibold">&quot;Connected&quot;</span> status on your integrations
          dashboard.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={whatsappAppTroubleshooting.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
