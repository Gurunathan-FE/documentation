import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'onboarding-login',
  label: 'Login',
}

const loginFields = [
  ['Email', 'The email address you registered with'],
  ['Password', 'Your account password'],
]

export default function Login({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="4. Login"
      className="mt-8"
    >
      <p className={styles.body}>
        Already have an account? Get back into your Aixel dashboard in one step.
      </p>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Enter Your Credentials',
            content: (
              <DocTable
                isDarkMode={isDarkMode}
                columns={['Field', 'Description']}
                rows={loginFields.map(([field, description]) => ({
                  key: field,
                  cells: [field, description],
                }))}
              />
            ),
          },
          {
            title: 'Click Login',
            content: <p>You&apos;ll be taken straight to your Aixel dashboard.</p>,
          },
        ]}
      />

      <div className="space-y-4">
        <h4 className={styles.subheading}>Forgot Your Password?</h4>
        <p className={styles.body}>If you can&apos;t remember your password:</p>
        <ol className={`list-decimal space-y-2 pl-6 ${styles.body}`}>
          <li>
            Click <span className="font-semibold">Forgot Password</span> on the login screen.
          </li>
          <li>Enter the email address associated with your Aixel account.</li>
          <li>Check your inbox for a password reset link from Aixel.</li>
          <li>Click the link and set a new password.</li>
          <li>Return to the login page and sign in with your new credentials.</li>
        </ol>
      </div>
    </DocSubsection>
  )
}
