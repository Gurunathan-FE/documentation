import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'messenger-instagram-integration',
  label: 'Messenger & Instagram',
  icon: 'messenger',
}

const messengerInstagramTroubleshooting = [
  [
    'No Pages listed',
    'Verify your Facebook account is an admin of at least one Facebook Page',
  ],
  [
    'Instagram account missing',
    'Link your Instagram Business account to your Meta Business Manager first, then retry',
  ],
  [
    'Only Messenger connecting',
    'Instagram DM tracking requires an Instagram Business or Creator account connected to the same Business Manager. Personal Instagram accounts won\'t appear',
  ],
  [
    'Authorization error',
    'Clear cookies, log into Facebook directly, and retry the integration',
  ],
]

export default function MessengerInstagram({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="11. Messenger & Instagram Chat Integration"
      className="mt-8"
    >
      <p className={styles.body}>
        Connect Messenger and Instagram to Aixel to track inbound conversations from both
        platforms — and attribute them back to your campaigns.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>A Facebook Page with Messenger enabled</li>
          <li>A Meta Business Manager account linked to your Page</li>
          <li>
            An Instagram Business or Creator account connected to the same Business Manager (for
            Instagram DM tracking)
          </li>
        </ul>
      </div>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Click "Link Messenger & Instagram"',
            content: (
              <p>
                From the integrations dashboard, select Sources tab, find the Messenger &amp;
                Instagram card and click the{' '}
                <span className="font-semibold">&quot;Link Messenger &amp; Instagram&quot;</span>{' '}
                button.
              </p>
            ),
          },
          {
            title: 'Authorize Aixel',
            content: (
              <p>
                You&apos;ll be redirected to Meta&apos;s authorization screen. Grant Aixel the
                permissions required to read conversations from Messenger and Instagram.
              </p>
            ),
          },
          {
            title: 'Select Your Facebook Page',
            content: (
              <p>
                Choose the Facebook Page whose Messenger conversations you want to track. This is
                the Page your customers message when they contact your business.
              </p>
            ),
          },
          {
            title: 'Choose Your Business Manager Account',
            content: <p>Select the Meta Business Manager account associated with the Page.</p>,
          },
          {
            title: 'Choose Your Instagram Account',
            badge: 'Optional',
            content: (
              <>
                <p>
                  Select the Instagram account linked to your Business Manager. This enables
                  tracking of Instagram DM conversations.
                </p>
                <p>
                  If you don&apos;t have an Instagram account connected to your Business Manager,
                  you can skip this step and connect only Messenger. Add Instagram later by
                  re-running the integration.
                </p>
              </>
            ),
          },
          {
            title: 'Save & Start Tracking',
            content: (
              <p>
                Click{' '}
                <span className="font-semibold">&quot;Save &amp; Start Tracking Chats&quot;</span>.
                Aixel will begin monitoring incoming conversations from both Messenger and
                Instagram.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          The Messenger &amp; Instagram card will update to{' '}
          <span className="font-semibold">&quot;Connected&quot;</span> status. Inbound chat data
          from both platforms will start appearing in your Aixel dashboard.
        </p>
      </div>

      <div className="space-y-3">
        <h4 className={styles.subheading}>What Gets Tracked?</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>New conversations initiated by customers</li>
          <li>Message volume and response metrics</li>
          <li>Attribution of conversations back to the ads or campaigns that drove them</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={messengerInstagramTroubleshooting.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
