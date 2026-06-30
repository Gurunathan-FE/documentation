import OverviewBentoGrid from '../components/OverviewBentoGrid'
import { useDocStyles } from '../components/useDocStyles'

const destinations = [
  {
    title: 'Google Ads Enhanced Conversions',
    icon: 'google',
    category: 'Ads destination',
    description: 'Send higher-quality conversion signals back to Google Ads for better optimization.',
    path: '/destinations/google-ads-enhanced-conversions',
  },
  {
    title: 'Meta Conversion API',
    icon: 'meta',
    category: 'Ads destination',
    description: 'Deliver server-side conversion events directly into Meta for stronger attribution.',
    path: '/destinations/meta-conversion-api',
  },
  {
    title: 'WhatsApp Conversion API',
    icon: 'whatsapp-business-icon',
    category: 'Messaging destination',
    description: 'Push conversion actions tied to WhatsApp-driven journeys back into your channels.',
    path: '/destinations/whatsapp-conversion-api',
  },
  {
    title: 'Snapchat Conversion API',
    icon: 'snapchat',
    category: 'Ads destination',
    description: 'Share key conversion events with Snapchat to improve campaign learning.',
    path: '/destinations/snapchat-conversion-api',
  },
]

export default function DestinationsOverview({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <div className="space-y-6">
      <p className={styles.body}>
        Destinations allow Aixel to send conversion events and customer actions directly to
        advertising platforms. This improves attribution accuracy and helps ad platforms optimize
        campaign performance.
      </p>

      <OverviewBentoGrid
        title="Available Destinations"
        description="Activate the downstream channels that should receive Aixel conversion signals."
        items={destinations}
        isDarkMode={isDarkMode}
      />
    </div>
  )
}
