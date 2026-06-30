import DocSubsection from '../components/DocSubsection'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'channel-integrations-how-it-works',
  label: 'How Integrations Work',
}

export default function HowItWorks({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="How Integrations Work"
      titleVariant="minor"
      className="mt-8 space-y-4"
    >
      <p className={styles.body}>Every integration follows the same pattern:</p>
      <ol className={`list-decimal space-y-3 pl-6 ${styles.body}`}>
        <li>
          <span className="font-semibold">Click the Link button</span> for the channel you want to
          connect under the integration section.
        </li>
        <li>
          <span className="font-semibold">Authorize Aixel</span> — you&apos;ll be redirected to
          the platform&apos;s authorization screen. Grant Aixel the permissions it needs.
        </li>
        <li>
          <span className="font-semibold">Select the accounts and assets</span> — choose which ad
          accounts, pages, or business profiles to connect.
        </li>
        <li>
          <span className="font-semibold">Confirm and start tracking</span> — Aixel begins pulling
          data immediately.
        </li>
      </ol>
      <p className={styles.body}>
        All connections use OAuth-based authorization. Aixel never stores your platform passwords.
        You can revoke access at any time from the connected platform&apos;s settings.
      </p>
    </DocSubsection>
  )
}
