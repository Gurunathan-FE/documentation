import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'onboarding-choose-platform',
  label: 'Choose Your Platform',
}

const shopifySteps = [
  ['1', 'Connect Shopify', 'Click the "Connect Shopify" button to begin'],
  ['2', 'Login to Shopify', "You'll be redirected to Shopify's login page. Sign in with your Shopify store credentials"],
  ['3', 'Authorize Aixel', 'Grant Aixel permission to access your store data'],
  ['4', 'Connection Successful', "You'll see a confirmation screen once the connection is established"],
]

export default function ChoosePlatform({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="3. Choose Your Platform"
      className="mt-8"
    >
      <p className={styles.body}>
        Aixel supports two platform types. Pick the one that matches your business setup. This
        determines how Aixel connects to your storefront and pulls performance data.
      </p>

      <div className="space-y-8">
        <h4 className={styles.subheading}>Platform Options</h4>

        <div className="space-y-4">
          <h4 className={styles.subheading}>Option A — Website</h4>
          <p className={styles.body}>
            For businesses running a standalone website (custom-built, WordPress, Wix, or any
            non-Shopify platform).
          </p>
          <p className={styles.subheading}>
            After selecting Website, you&apos;ll complete these steps:
          </p>
          <ol className={`list-decimal space-y-3 pl-6 ${styles.body}`}>
            <li>
              <span className="font-semibold">Add Company Details</span> — Enter your business
              name and website URL.
            </li>
            <li>
              <span className="font-semibold">Select Country &amp; Time Zone</span> — Choose the
              country where your business operates and your preferred reporting time zone. This
              ensures your analytics data aligns with your local business hours.
            </li>
          </ol>
          <p className={styles.body}>
            That&apos;s it. Your website platform is configured and ready for channel
            integrations.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className={styles.subheading}>Option B — Shopify</h4>
          <p className={styles.body}>For businesses running on Shopify.</p>
          <p className={styles.subheading}>
            After selecting Shopify, you&apos;ll complete these steps:
          </p>
          <DocTable
            isDarkMode={isDarkMode}
            columns={['Step', 'Action', 'Details']}
            rows={shopifySteps.map(([step, action, details]) => ({
              key: step,
              cells: [step, action, details],
            }))}
          />
        </div>
      </div>
    </DocSubsection>
  )
}
