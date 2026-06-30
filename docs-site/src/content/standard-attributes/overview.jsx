import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'
import { standardEvents } from './data'

export const eventsMeta = {
  id: 'standard-events',
  label: 'Standard Events',
}

export default function StandardAttributesOverview({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)
  const headingClass = `scroll-mt-40 mt-8 text-2xl font-semibold leading-tight text-balance xl:text-4xl ${
    isDarkMode ? 'text-gray-100' : 'text-gray-900'
  }`

  return (
    <>
      <p className={styles.body}>
        Adopting standard profile fields and event names ensures consistency across your data,
        making analytics, segmentation, and user journey tracking much more reliable. By following a
        common set of attributes and events, you can streamline integrations, simplify reporting,
        and facilitate collaboration between product, engineering, and analytics teams.
      </p>

      <h3 id={eventsMeta.id} className={headingClass}>
        {eventsMeta.label}
      </h3>
      <DocTable
        isDarkMode={isDarkMode}
        columns={['Event Name', 'Description']}
        rows={standardEvents.map(([eventName, description]) => ({
          key: eventName,
          cells: [eventName, description],
        }))}
      />
    </>
  )
}
