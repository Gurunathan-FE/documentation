import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'meta-lead-generation',
  label: 'Meta Lead Generation',
  icon: 'meta',
}

export default function MetaLeadGeneration({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="14. Meta Lead Generation"
      className="mt-8"
      icon={subsectionMeta.icon}
    >
      <p className={styles.body}>
        Connect Meta Lead Generation to automatically capture leads generated through Meta lead
        forms.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>Prerequisites</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>An active Meta Ads account</li>
          <li>Meta Ads integration connected in Aixel</li>
          <li>Access to Meta Lead Forms</li>
        </ul>
      </div>

      <DocSteps
        title="Steps to connect"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Open Sources',
            content: (
              <p>
                Navigate to <span className="font-semibold">Sources</span> in the{' '}
                <span className="font-semibold">Integrations</span> menu.
              </p>
            ),
          },
          {
            title: 'Select Meta Lead Generation',
            content: (
              <p>
                Select <span className="font-semibold">Meta Lead Generation</span>.
              </p>
            ),
          },
          {
            title: 'Open Integration',
            content: (
              <p>
                Click the <span className="font-semibold">Meta Lead Generation</span> button.
              </p>
            ),
          },
          {
            title: 'Choose Ad Account',
            content: (
              <p>
                Choose the <span className="font-semibold">Meta Ad Account</span> you want to
                connect.
              </p>
            ),
          },
          {
            title: 'Connect Meta Ads First',
            badge: 'If needed',
            content: (
              <p>
                If no ad account is available, first connect{' '}
                <span className="font-semibold">Meta Ads</span> under{' '}
                <span className="font-semibold">Integrations</span>.
              </p>
            ),
          },
          {
            title: 'Enable Lead Form Integrations',
            content: (
              <p>
                Enable <span className="font-semibold">Lead Form Integrations</span>.
              </p>
            ),
          },
          {
            title: 'Save Configuration',
            content: <p>Save the configuration.</p>,
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>Confirmation</h4>
        <p className={styles.body}>
          Lead data collected through Meta Lead Forms will automatically start flowing into Aixel.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <p className={styles.body}>
          If the connection cannot be completed, verify your permissions, confirm that the source
          account is active, and reconnect the integration. Contact Aixel Support if the issue
          persists.
        </p>
      </div>
    </DocSubsection>
  )
}
