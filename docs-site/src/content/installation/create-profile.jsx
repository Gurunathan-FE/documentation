import { Link } from 'react-router-dom'
import CodeBlock from '../../components/CodeBlock'
import FrameworkTabs from '../components/FrameworkTabs'
import InstallationStep from '../components/InstallationStep'

export const subsectionMeta = {
  id: 'installation-step-3',
  label: 'Create profile',
}

export default function CreateProfile({ isDarkMode, styles }) {
  return (
    <InstallationStep
      id={subsectionMeta.id}
      step="03"
      title={subsectionMeta.label}
      isDarkMode={isDarkMode}
      styles={styles}
    >
      <div className="my-8">
        <p>
          Use <code>identify()</code> to create and associate events with a specific user.
        </p>
      </div>
      <CodeBlock
        code={`aixel.identify('distinct_id', { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone: '1234567890' });`}
      />
      <FrameworkTabs stepKey="createProfile" isDarkMode={isDarkMode} />

      <div className="mt-8 space-y-5">
        <div className="space-y-2">
          <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Distinct ID
          </h4>
          <p className={`text-base ${styles.mutedText}`}>
            A unique string to represent a user (email, phone, UUID, etc.). Every distinct ID creates a separate
            profile.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Profile Data Rules
          </h4>
          <ul className={`list-disc space-y-1 pl-6 text-base ${styles.mutedText}`}>
            <li>Must be flat object</li>
            <li>Nested objects are ignored</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Example <span className="ml-1 text-green-600 !font-normal">(Valid)</span>
            </h4>
            <CodeBlock code={`{ email: "john@example.com", plan: "pro", age: 27 }`} />
          </div>

          <div className="space-y-2">
            <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Example <span className="ml-1 text-red-600 !font-normal">(Invalid – nested object ignored)</span>
            </h4>
            <CodeBlock code={`{ address: { city: "Bangalore" } }`} />
          </div>
        </div>
      </div>

      <p className={`mt-6 text-base ${styles.mutedText}`}>
        For standard profile fields, see{' '}
        <Link
          to="/standard-attributes/standard-profile-fields"
          className={`${isDarkMode ? 'text-orange-300' : 'text-orange-600'} underline transition-colors hover:text-orange-700`}
        >
          Standard Profile Fields
        </Link>
        .
      </p>
    </InstallationStep>
  )
}
