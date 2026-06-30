import CodeBlock from '../../components/CodeBlock'
import FrameworkTabs from '../components/FrameworkTabs'
import InstallationStep from '../components/InstallationStep'

export const subsectionMeta = {
  id: 'installation-step-4',
  label: 'Track events',
}

export default function TrackEvents({ isDarkMode, styles }) {
  return (
    <InstallationStep
      id={subsectionMeta.id}
      step="04"
      title={subsectionMeta.label}
      isDarkMode={isDarkMode}
      styles={styles}
    >
      <div className="my-8">
        <p>
          Use <code>track()</code> to send events to the server.
        </p>
      </div>
      <CodeBlock
        language="Script"
        highlightText="'<event_name>'"
        highlightClassName="text-red-500"
        code={`aixel.track('<event_name>', payload);`}
      />
      <p className={`my-4 ${styles.subtleText}`}>
        The payload is an optional object that contains the data to be sent to the server.
      </p>

      <FrameworkTabs stepKey="trackEvents" isDarkMode={isDarkMode} />

      <p className={`my-4 text-base ${styles.mutedText}`}>
        For standard event names, see{' '}
        <a
          href="/standard-attributes"
          className={`${isDarkMode ? 'text-orange-300' : 'text-orange-600'} underline transition-colors hover:text-orange-700`}
        >
          Standard Events
        </a>
        . You can also use custom event names with corresponding payloads.
      </p>
      <CodeBlock
        language="Script"
        highlightText="'<custom-event-name>'"
        highlightClassName="text-red-500"
        code={`window.aixel.track('<custom-event-name>', payload_object);`}
      />
    </InstallationStep>
  )
}
