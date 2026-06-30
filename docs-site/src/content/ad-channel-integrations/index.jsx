import DocSection from '../../components/DocSection'
import Overview from './section-overview'
import HowItWorks, { subsectionMeta as howItWorks } from './how-it-works'
import RecommendedOrder, { subsectionMeta as recommendedOrder } from './recommended-order'
import GoogleAds, { subsectionMeta as googleAds } from './google-ads'
import MetaIntegration, { subsectionMeta as metaIntegration } from './meta-integration'
import WhatsAppBusinessApi, { subsectionMeta as whatsappBusinessApi } from './whatsapp-business-api'
import WhatsAppBusinessApp, { subsectionMeta as whatsappBusinessApp } from './whatsapp-business-app'
import Snapchat, { subsectionMeta as snapchat } from './snapchat'
import MessengerInstagram, { subsectionMeta as messengerInstagram } from './messenger-instagram'

export const pageMeta = {
  id: 'ad-channel-integrations',
  label: 'Ad Channel Integrations',
  children: [
    howItWorks,
    recommendedOrder,
    googleAds,
    metaIntegration,
    whatsappBusinessApi,
    whatsappBusinessApp,
    snapchat,
    messengerInstagram,
  ],
}

export default function AdChannelIntegrations({ isDarkMode }) {
  return (
    <DocSection id={pageMeta.id} title={pageMeta.label}>
      <Overview isDarkMode={isDarkMode} />
      <HowItWorks isDarkMode={isDarkMode} />
      <RecommendedOrder isDarkMode={isDarkMode} />
      <GoogleAds isDarkMode={isDarkMode} />
      <MetaIntegration isDarkMode={isDarkMode} />
      <WhatsAppBusinessApi isDarkMode={isDarkMode} />
      <WhatsAppBusinessApp isDarkMode={isDarkMode} />
      <Snapchat isDarkMode={isDarkMode} />
      <MessengerInstagram isDarkMode={isDarkMode} />
    </DocSection>
  )
}
