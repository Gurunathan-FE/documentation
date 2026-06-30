import DocSection from '../../components/DocSection'
import GoogleSheets, { subsectionMeta as googleSheets } from './google-sheets'
import Webhooks, { subsectionMeta as webhooks } from './webhooks'
import MetaLeadGeneration, { subsectionMeta as metaLeadGeneration } from './meta-lead-generation'
import Clarity, { subsectionMeta as clarity } from './clarity'

export const pageMeta = {
  id: 'data-source-integration',
  label: 'Data Source Integration',
  children: [googleSheets, webhooks, metaLeadGeneration, clarity],
}

export default function DataSourceIntegration({ isDarkMode }) {
  return (
    <DocSection id={pageMeta.id} title={pageMeta.label}>
      <GoogleSheets isDarkMode={isDarkMode} />
      <Webhooks isDarkMode={isDarkMode} />
      <MetaLeadGeneration isDarkMode={isDarkMode} />
      <Clarity isDarkMode={isDarkMode} />
    </DocSection>
  )
}
