import DocSection from '../../components/DocSection'
import Overview from './section-overview'
import GoogleAdsEnhancedConversions, {
  subsectionMeta as googleAdsEnhancedConversions,
} from './google-ads-enhanced-conversions'
import MetaConversionApi, { subsectionMeta as metaConversionApi } from './meta-conversion-api'
import WhatsAppConversionApi, {
  subsectionMeta as whatsappConversionApi,
} from './whatsapp-conversion-api'
import SnapchatConversionApi, {
  subsectionMeta as snapchatConversionApi,
} from './snapchat-conversion-api'

export const pageMeta = {
  id: 'destinations',
  label: 'Destinations',
  children: [
    googleAdsEnhancedConversions,
    metaConversionApi,
    whatsappConversionApi,
    snapchatConversionApi,
  ],
}

export default function Destinations({ isDarkMode }) {
  return (
    <DocSection id={pageMeta.id} title={pageMeta.label}>
      <Overview isDarkMode={isDarkMode} />
      <GoogleAdsEnhancedConversions isDarkMode={isDarkMode} />
      <MetaConversionApi isDarkMode={isDarkMode} />
      <WhatsAppConversionApi isDarkMode={isDarkMode} />
      <SnapchatConversionApi isDarkMode={isDarkMode} />
    </DocSection>
  )
}
