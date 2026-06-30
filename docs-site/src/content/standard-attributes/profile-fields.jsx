import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'
import { profileFields } from './data'

export const pageMeta = {
  id: 'standard-profile-fields',
  label: 'Standard Profile Fields',
}

export default function StandardProfileFields({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <>
      <p className={styles.body}>
        Use these field names with <code>identify()</code> so profile data stays consistent across
        your app and integrations.
      </p>
      <DocTable
        isDarkMode={isDarkMode}
        columns={['Field', 'Description']}
        rows={profileFields.map(([field, description]) => ({
          key: field,
          cells: [field, description],
        }))}
      />
    </>
  )
}
