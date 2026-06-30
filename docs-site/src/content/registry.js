import { buildDocsConfig } from './buildDocsConfig'

// Getting Started
import GettingStartedOverview from './getting-started/overview'
import CreateAccount, { subsectionMeta as createAccountMeta } from './getting-started/create-account'
import VerifyEmail, { subsectionMeta as verifyEmailMeta } from './getting-started/verify-email'
import ChoosePlatform, { subsectionMeta as choosePlatformMeta } from './getting-started/choose-platform'
import Login, { subsectionMeta as loginMeta } from './getting-started/login'

// Installation
import InstallationOverview from './installation/overview'
import AddScript, { subsectionMeta as addScriptMeta } from './installation/add-script'
import CreatePixelFile, { subsectionMeta as createPixelFileMeta } from './installation/create-pixel-file'
import CreateProfile, { subsectionMeta as createProfileMeta } from './installation/create-profile'
import TrackEvents, { subsectionMeta as trackEventsMeta } from './installation/track-events'

// Ad Channel Integrations
import AdChannelIntegrationsOverview from './ad-channel-integrations/section-overview'
import HowItWorks, { subsectionMeta as howItWorksMeta } from './ad-channel-integrations/how-it-works'
import RecommendedOrder, { subsectionMeta as recommendedOrderMeta } from './ad-channel-integrations/recommended-order'
import GoogleAds, { subsectionMeta as googleAdsMeta } from './ad-channel-integrations/google-ads'
import MetaIntegration, { subsectionMeta as metaIntegrationMeta } from './ad-channel-integrations/meta-integration'
import WhatsAppBusinessApi, { subsectionMeta as whatsappBusinessApiMeta } from './ad-channel-integrations/whatsapp-business-api'
import WhatsAppBusinessApp, { subsectionMeta as whatsappBusinessAppMeta } from './ad-channel-integrations/whatsapp-business-app'
import Snapchat, { subsectionMeta as snapchatMeta } from './ad-channel-integrations/snapchat'
import MessengerInstagram, { subsectionMeta as messengerInstagramMeta } from './ad-channel-integrations/messenger-instagram'

// Data Source Integration
import DataSourceIntegrationOverview from './data-source-integration/overview'
import GoogleSheets, { subsectionMeta as googleSheetsMeta } from './data-source-integration/google-sheets'
import Webhooks, { subsectionMeta as webhooksMeta } from './data-source-integration/webhooks'
import MetaLeadGeneration, { subsectionMeta as metaLeadGenerationMeta } from './data-source-integration/meta-lead-generation'
import Clarity, { subsectionMeta as clarityMeta } from './data-source-integration/clarity'

// Destinations
import DestinationsOverview from './destinations/section-overview'
import GoogleAdsEnhancedConversions, {
  subsectionMeta as googleAdsEnhancedConversionsMeta,
} from './destinations/google-ads-enhanced-conversions'
import MetaConversionApi, { subsectionMeta as metaConversionApiMeta } from './destinations/meta-conversion-api'
import WhatsAppConversionApi, {
  subsectionMeta as whatsappConversionApiMeta,
} from './destinations/whatsapp-conversion-api'
import SnapchatConversionApi, {
  subsectionMeta as snapchatConversionApiMeta,
} from './destinations/snapchat-conversion-api'

// Standard Attributes
import StandardAttributesOverview from './standard-attributes/overview'
import StandardProfileFields, { pageMeta as standardProfileFieldsMeta } from './standard-attributes/profile-fields'

const docsConfig = buildDocsConfig([
  {
    id: 'onboarding',
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Create your account and get started with Aixel.',
    order: 1,
    Overview: GettingStartedOverview,
    pages: [
      { meta: createAccountMeta, Component: CreateAccount },
      { meta: verifyEmailMeta, Component: VerifyEmail },
      { meta: choosePlatformMeta, Component: ChoosePlatform },
      { meta: loginMeta, Component: Login },
    ],
  },
  {
    id: 'installation',
    slug: 'installation',
    title: 'Installation',
    description: 'Install the Aixel SDK in your application.',
    order: 2,
    Overview: InstallationOverview,
    pages: [
      { meta: addScriptMeta, Component: AddScript },
      { meta: createPixelFileMeta, Component: CreatePixelFile },
      { meta: createProfileMeta, Component: CreateProfile },
      { meta: trackEventsMeta, Component: TrackEvents },
    ],
  },
  {
    id: 'ad-channel-integrations',
    slug: 'ad-channel-integrations',
    title: 'Ad Channel Integrations',
    description: 'Connect ad platforms and messaging channels to Aixel.',
    order: 3,
    Overview: AdChannelIntegrationsOverview,
    pages: [
      { meta: howItWorksMeta, Component: HowItWorks },
      { meta: recommendedOrderMeta, Component: RecommendedOrder },
      { meta: googleAdsMeta, Component: GoogleAds },
      { meta: metaIntegrationMeta, Component: MetaIntegration },
      { meta: whatsappBusinessApiMeta, Component: WhatsAppBusinessApi },
      { meta: whatsappBusinessAppMeta, Component: WhatsAppBusinessApp },
      { meta: snapchatMeta, Component: Snapchat },
      { meta: messengerInstagramMeta, Component: MessengerInstagram },
    ],
  },
  {
    id: 'data-source-integration',
    slug: 'data-source-integration',
    title: 'Data Source Integration',
    description: 'Import data from external sources into Aixel.',
    order: 4,
    Overview: DataSourceIntegrationOverview,
    pages: [
      { meta: googleSheetsMeta, Component: GoogleSheets },
      { meta: webhooksMeta, Component: Webhooks },
      { meta: metaLeadGenerationMeta, Component: MetaLeadGeneration },
      { meta: clarityMeta, Component: Clarity },
    ],
  },
  {
    id: 'destinations',
    slug: 'destinations',
    title: 'Destinations',
    description: 'Send conversion events to advertising platforms.',
    order: 5,
    Overview: DestinationsOverview,
    pages: [
      { meta: googleAdsEnhancedConversionsMeta, Component: GoogleAdsEnhancedConversions },
      { meta: metaConversionApiMeta, Component: MetaConversionApi },
      { meta: whatsappConversionApiMeta, Component: WhatsAppConversionApi },
      { meta: snapchatConversionApiMeta, Component: SnapchatConversionApi },
    ],
  },
  {
    id: 'standard-attributes',
    slug: 'standard-attributes',
    title: 'Standard Attributes',
    description: 'Standard event names and profile fields for consistent tracking.',
    order: 6,
    Overview: StandardAttributesOverview,
    pages: [{ meta: standardProfileFieldsMeta, Component: StandardProfileFields }],
  },
])

export const {
  docSections,
  docGroups,
  routes,
  pathToRoute,
  flatNav,
  idToPath,
  searchIndex,
  defaultPath,
} = docsConfig

export { getAdjacentNavItems, getBreadcrumbs } from './buildDocsConfig'

// Legacy exports for compatibility
export const pageIdToGroupId = Object.fromEntries(docSections.map(({ id }) => [id, id]))
export const navItemToGroupId = Object.fromEntries(
  docSections.flatMap((section) => section.pages.map((page) => [page.id, section.id])),
)
export const gettingStartedSections = docGroups[0]?.children ?? []
export const stepsToInstall = docGroups.find(({ id }) => id === 'installation')?.children ?? []
