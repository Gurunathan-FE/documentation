import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'google-ads-integration',
  label: 'Google Ads',
  icon: 'google',
}

const googleAdsTroubleshooting = [
  [
    'No ad accounts appear',
    'Confirm the Google account you selected has admin access to a Google Ads account',
  ],
  [
    'Authorization failed',
    "Try again. If using a company account, check that your organization's IT policies allow third-party OAuth access",
  ],
  [
    'Auto-tagging toggle not showing',
    'Contact Aixel support — this may indicate a permissions issue',
  ],
]

export default function GoogleAds({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="6. Google Ads Integration"
      icon={subsectionMeta.icon}
      className="mt-8"
    >
      <p className={styles.body}>
        Connect your Google Ads account to Aixel and start tracking every click, conversion, and
        rupee spent — with proper attribution.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Google Ads account</li>
          <li>Admin access to the Google Ads account you want to connect</li>
          <li>
            Auto-tagging enabled (Aixel will prompt you to turn this on during setup)
          </li>
        </ul>
      </div>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Click "Link Google Ads"',
            content: (
              <p>
                From the integrations dashboard, select Sources tab, find the Google Ads card and
                click the <span className="font-semibold">&quot;Link Google Ads&quot;</span> button.
              </p>
            ),
          },
          {
            title: 'Choose Your Google Account',
            content: (
              <p>
                You&apos;ll be redirected to Google&apos;s account picker. Select the Google
                account that has access to your Google Ads.
              </p>
            ),
          },
          {
            title: 'Authorize Aixel',
            content: (
              <p>
                Google will ask you to grant Aixel permission to access your Google Ads data.
                Review the permissions and click{' '}
                <span className="font-semibold">&quot;Allow&quot;</span>.
              </p>
            ),
          },
          {
            title: 'Select Your Ad Account(s)',
            content: (
              <>
                <p>
                  After authorization, you&apos;ll see a list of Google Ads accounts associated
                  with your Google login. Select the account(s) you want Aixel to track.
                </p>
                <p>
                  <span className="font-semibold">Important:</span> If you manage multiple
                  accounts (e.g., an MCC / Manager account), select only the specific ad accounts
                  you want to track — not the manager account itself.
                </p>
              </>
            ),
          },
          {
            title: 'Enable Auto-Tagging',
            content: (
              <>
                <p>
                  Aixel requires auto-tagging to be enabled for accurate tracking. You&apos;ll see
                  a toggle for this during setup.
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    If auto-tagging is already on, the toggle will show as active. No action
                    needed.
                  </li>
                  <li>
                    If auto-tagging is off,{' '}
                    <span className="font-semibold">switch the toggle on</span>. This allows Google
                    to append tracking parameters (gclid) to your ad URLs automatically.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: 'Start Tracking',
            content: (
              <p>
                Click <span className="font-semibold">&quot;Start Tracking Ads&quot;</span>. Aixel
                will begin pulling data from your connected Google Ads account(s) immediately.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          You&apos;ll see a success message and the Google Ads card on your integrations dashboard
          will update to <span className="font-semibold">&quot;Connected&quot;</span> status. Data
          will start appearing in your Aixel dashboard within minutes.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={googleAdsTroubleshooting.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
