import OverviewBentoGrid from '../components/OverviewBentoGrid'
import { useDocStyles } from '../components/useDocStyles'

const availableChannels = [
  {
    title: 'Google Ads',
    icon: 'google',
    category: 'Paid ads',
    description: 'Track Search, Display, Shopping, and YouTube ad performance in one place.',
    path: '/ad-channel-integrations/google-ads',
  },
  {
    title: 'Meta',
    icon: 'meta',
    category: 'Paid ads',
    description: 'Measure Facebook and Instagram campaign performance with direct attribution.',
    path: '/ad-channel-integrations/meta-integration',
  },
  {
    title: 'WhatsApp Business API',
    icon: 'whatsapp-business',
    category: 'Messaging',
    description: 'Capture conversations and conversions from your API-based WhatsApp setup.',
    path: '/ad-channel-integrations/whatsapp-business-api',
  },
  {
    title: 'WhatsApp Business App',
    icon: 'whatsapp-business-icon',
    category: 'Messaging',
    description: 'Connect the app-based WhatsApp flow to monitor chats and outcomes.',
    path: '/ad-channel-integrations/whatsapp-business-app',
  },
  {
    title: 'Snapchat',
    icon: 'snapchat',
    category: 'Paid ads',
    description: 'Bring Snap Ads account performance into the same attribution layer.',
    path: '/ad-channel-integrations/snapchat',
  },
  {
    title: 'Messenger & Instagram',
    icon: 'messenger',
    category: 'Messaging',
    description: 'Track inbound chats from Messenger and Instagram DMs back to campaigns.',
    path: '/ad-channel-integrations/messenger-instagram',
  },
]

export default function AdChannelIntegrationsOverview({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <div className="space-y-6">
      <p className={styles.body}>
        This is where Aixel starts delivering results. Connect your ad platforms and messaging
        channels so Aixel can track, attribute, and optimize every dollar you spend.
      </p>

      <OverviewBentoGrid
        title="Available Channels"
        description="Connect these platforms in any order. The more channels you link, the more complete your attribution picture becomes."
        items={availableChannels}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}
