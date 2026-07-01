import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'onboarding-choose-platform',
  label: 'Choose Your Platform',
}

const shopifySteps = [
  {
    title: 'Connect Shopify',
    content: <p>Click the &quot;Connect Shopify&quot; button to begin.</p>,
  },
  {
    title: 'Login to Shopify',
    content: (
      <p>
        You&apos;ll be redirected to Shopify&apos;s login page. Sign in with your Shopify store
        credentials.
      </p>
    ),
  },
  {
    title: 'Authorize Aixel',
    content: <p>Grant Aixel permission to access your store data.</p>,
  },
  {
    title: 'Connection Successful',
    content: (
      <p>You&apos;ll see a confirmation screen once the connection is established.</p>
    ),
  },
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
          <DocSteps
            isDarkMode={isDarkMode}
            steps={[
              {
                title: 'Add Company Details',
                content: <p>Enter your business name and website URL.</p>,
              },
              {
                title: 'Select Country & Time Zone',
                content: (
                  <p>
                    Choose the country where your business operates and your preferred reporting
                    time zone. This ensures your analytics data aligns with your local business
                    hours.
                  </p>
                ),
              },
            ]}
          />
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
          <DocSteps isDarkMode={isDarkMode} steps={shopifySteps} />
        </div>
      </div>
    </DocSubsection>
  )
}
