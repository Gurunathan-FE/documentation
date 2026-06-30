import FrameworkTabs from '../components/FrameworkTabs'
import InstallationStep from '../components/InstallationStep'

export const subsectionMeta = {
  id: 'installation-step-2',
  label: 'Create a pixel file',
}

export default function CreatePixelFile({ isDarkMode, styles }) {
  return (
    <InstallationStep
      id={subsectionMeta.id}
      step="02"
      title={subsectionMeta.label}
      isDarkMode={isDarkMode}
      styles={styles}
    >
      <div className="my-8">
        <p>Create a pixel file to track events and identify users.</p>
      </div>
      <FrameworkTabs stepKey="createPixelFile" isDarkMode={isDarkMode} />
    </InstallationStep>
  )
}
