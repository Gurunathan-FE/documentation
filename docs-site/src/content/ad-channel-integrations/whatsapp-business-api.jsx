import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'whatsapp-business-api-integration',
  label: 'WhatsApp Business API',
  icon: 'whatsapp-business',
}

const whatsappTroubleshooting = [
  [
    'No accounts listed',
    'Verify your Meta account has an active WhatsApp Business API setup',
  ],
  [
    'Business Profile not showing',
    'Check that your WhatsApp Business Profile is fully configured in Meta Business Settings',
  ],
  [
    'Authorization denied',
    'Confirm you have admin access to the relevant Meta Business account',
  ],
]

export default function WhatsAppBusinessApi({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="8. WhatsApp Business API Integration"
      className="mt-8"
    >
      <p className={styles.body}>
        Connect your WhatsApp Business API to Aixel and start tracking conversations, leads, and
        conversions from WhatsApp — with full attribution.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>A WhatsApp Business API account (not the regular WhatsApp Business App)</li>
          <li>Access to the Meta Business account that manages your WhatsApp API</li>
          <li>A configured WhatsApp Business Profile</li>
        </ul>
      </div>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Click "Link WhatsApp"',
            content: (
              <p>
                From the integrations dashboard, select the Sources tab, find the WhatsApp Business
                API card, and click the{' '}
                <span className="font-semibold">&quot;Link WhatsApp&quot;</span> button.
              </p>
            ),
          },
          {
            title: 'Authorize Aixel',
            content: (
              <p>
                You&apos;ll be redirected to Meta&apos;s authorization screen (WhatsApp Business
                API is managed through Meta). Grant Aixel the required permissions.
              </p>
            ),
          },
          {
            title: 'Select Your Account',
            content: (
              <p>
                After authorization, choose the Meta account associated with your WhatsApp Business
                API setup.
              </p>
            ),
          },
          {
            title: 'Choose Your Business Profile',
            content: (
              <p>
                Select the Business Profile linked to your WhatsApp number. This is the identity
                your customers see when they receive messages.
              </p>
            ),
          },
          {
            title: 'Choose the WhatsApp Business Account',
            content: (
              <p>
                Select the specific WhatsApp Business Account you want Aixel to track. If you have
                multiple accounts, pick the one tied to the campaigns or numbers you want to
                monitor.
              </p>
            ),
          },
          {
            title: 'Confirm & Start Tracking',
            content: (
              <p>
                Review your selections and click{' '}
                <span className="font-semibold">&quot;Confirm &amp; Start Tracking&quot;</span>.
                Aixel will begin tracking conversations and attributing them to your campaigns.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          The WhatsApp Business API card will update to{' '}
          <span className="font-semibold">&quot;Connected&quot;</span> status. Conversation data
          will start flowing into your Aixel dashboard.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={whatsappTroubleshooting.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
