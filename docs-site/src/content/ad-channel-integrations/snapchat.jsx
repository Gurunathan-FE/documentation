import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'snapchat-integration',
  label: 'Snapchat',
  icon: 'snapchat',
}

const snapchatTroubleshooting = [
  [
    'No ad accounts listed',
    'Confirm your Snapchat account has an active Ads Manager account with at least one ad account',
  ],
  [
    'Authorization denied',
    'Verify you have admin or advertiser-level access to the Snapchat Ad Account',
  ],
  [
    'Connection failed',
    'Log into Snapchat Ads Manager directly to confirm your account is in good standing, then retry',
  ],
]

export default function Snapchat({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="10. Snapchat Integration"
      className="mt-8"
    >
      <p className={styles.body}>
        Connect your Snapchat Ad Account to Aixel and track your Snap Ads performance alongside
        your other channels.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Snapchat Ads Manager account</li>
          <li>Access to the Snapchat Ad Account you want to connect</li>
        </ul>
      </div>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Click "Link Snapchat"',
            content: (
              <p>
                From the integrations dashboard, select Sources tab, find the Snapchat card and
                click the <span className="font-semibold">&quot;Link Snapchat&quot;</span> button.
              </p>
            ),
          },
          {
            title: 'Authorize Aixel',
            content: (
              <p>
                You&apos;ll be redirected to Snapchat&apos;s authorization screen. Grant Aixel
                permission to access your ad account data.
              </p>
            ),
          },
          {
            title: 'Choose Your Snapchat Ad Account',
            content: (
              <p>
                After authorization, you&apos;ll see the Snapchat Ad Accounts linked to your
                profile. Select the one you want Aixel to track.
              </p>
            ),
          },
          {
            title: 'Confirm & Start Tracking',
            content: (
              <p>
                Click <span className="font-semibold">&quot;Confirm &amp; Start Tracking&quot;</span>
                . Aixel will connect to your Snapchat Ad Account and begin pulling performance
                data.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          The Snapchat card on your integrations dashboard will show{' '}
          <span className="font-semibold">&quot;Connected&quot;</span> status. Your Snapchat ad
          data will start appearing in your Aixel dashboard.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={snapchatTroubleshooting.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
