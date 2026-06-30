import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'meta-integration',
  label: 'Meta',
  icon: 'meta',
}

const metaTroubleshooting = [
  [
    'No Business Portfolios listed',
    'Confirm your Facebook account has admin access to a Meta Business Portfolio',
  ],
  [
    'Missing assets (Page, Pixel, or Ad Account)',
    'Verify these assets are assigned to the selected Business Portfolio in Meta Business Settings',
  ],
  [
    'Authorization loop',
    'Clear browser cookies, log into Facebook directly, then retry the connection',
  ],
  [
    'Only personal profile showing',
    'Make sure you have a Meta Business account — a personal Facebook profile is not sufficient',
  ],
]

export default function MetaIntegration({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="7. Meta Integration"
      className="mt-8"
      icon={subsectionMeta.icon}
    >
      <p className={styles.body}>
        Connect your Meta Business account to track Facebook and Instagram ad performance directly
        inside Aixel.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>A Meta Business account (formerly Facebook Business Manager)</li>
          <li>
            Admin access to the Business Portfolio, Page, Pixel, and Ad Account you want to
            connect
          </li>
          <li>A Facebook account linked to that Business Portfolio</li>
        </ul>
      </div>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Click "Link Meta Business"',
            content: (
              <p>
                From the integration tab, select Sources tab, find the Meta card and click the{' '}
                <span className="font-semibold">&quot;Link Meta Business&quot;</span> button.
              </p>
            ),
          },
          {
            title: 'Authorize Aixel',
            content: (
              <>
                <p>
                  You&apos;ll be redirected to Meta&apos;s authorization screen. Grant Aixel the
                  required permissions to access your business data.
                </p>
                <p>
                  If you&apos;re not already logged into Facebook, you&apos;ll be prompted to log
                  in first.
                </p>
              </>
            ),
          },
          {
            title: 'Select Your Business Portfolio',
            content: (
              <p>
                After authorization, you&apos;ll see the Business Portfolios associated with your
                Facebook account. Choose the one that contains the assets you want to track.
              </p>
            ),
          },
          {
            title: 'Select Your Assets',
            content: (
              <>
                <p>You&apos;ll be asked to connect three assets from your Business Portfolio:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Page</li>
                  <li>Pixel</li>
                  <li>Ad Account</li>
                </ul>
              </>
            ),
          },
          {
            title: 'Confirm & Link',
            content: (
              <p>
                Review your selections and click{' '}
                <span className="font-semibold">&quot;Confirm &amp; Link&quot;</span>. Aixel will
                establish the connection and start pulling your Meta ad data.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          The Meta card on your integrations dashboard will show{' '}
          <span className="font-semibold">&quot;Connected&quot;</span> status. Your Facebook and
          Instagram ad performance data will begin appearing in your Aixel dashboard.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={metaTroubleshooting.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
