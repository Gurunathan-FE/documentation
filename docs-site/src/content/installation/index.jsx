import DocSection from '../../components/DocSection'
import { useInstallationStyles } from '../components/useDocStyles'
import AddScript, { subsectionMeta as addScript } from './add-script'
import CreatePixelFile, { subsectionMeta as createPixelFile } from './create-pixel-file'
import CreateProfile, { subsectionMeta as createProfile } from './create-profile'
import TrackEvents, { subsectionMeta as trackEvents } from './track-events'

export const pageMeta = {
  id: 'installation',
  label: 'Installation',
  children: [addScript, createPixelFile, createProfile, trackEvents],
}

export default function Installation({ isDarkMode = true }) {
  const styles = useInstallationStyles(isDarkMode)

  return (
    <DocSection id={pageMeta.id} title={pageMeta.label}>
      <div className="space-y-16">
        <AddScript isDarkMode={isDarkMode} styles={styles} />
        <CreatePixelFile isDarkMode={isDarkMode} styles={styles} />
        <CreateProfile isDarkMode={isDarkMode} styles={styles} />
        <TrackEvents isDarkMode={isDarkMode} styles={styles} />
      </div>
    </DocSection>
  )
}
