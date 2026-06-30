import DocSubsection from '../components/DocSubsection'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'channel-integrations-recommended-order',
  label: 'Recommended Order',
}

export default function RecommendedOrder({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="Recommended Order"
      titleVariant="minor"
      className="mt-8 space-y-4"
    >
      <p className={styles.body}>
        Start with the channels where you spend the most. For most businesses, that means:
      </p>
      <ol className={`list-decimal space-y-2 pl-6 ${styles.body}`}>
        <li>Google Ads or Meta (whichever drives more spend)</li>
        <li>The other paid ads channel</li>
        <li>Messaging channels (WhatsApp, Messenger)</li>
        <li>Snapchat (if applicable)</li>
      </ol>
    </DocSubsection>
  )
}
