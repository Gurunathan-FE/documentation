import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'onboarding-create-account',
  label: 'Create Account',
}

const signupFields = [
  ['First Name', 'Your given name', 'Required'],
  ['Last Name', 'Your surname', 'Required'],
  ['Email', 'Your work or business email', 'Required — must be a valid, accessible email address'],
  ['Password', 'A strong account password', 'Required — follow the on-screen strength requirements'],
]

export default function CreateAccount({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="Create Your Aixel Account"
    >
      <p className={styles.body}>
        Get from zero to tracking in under five minutes. Signup takes 30 seconds.
      </p>

      <div className="space-y-3">
        <h4 className={styles.subheading}>What You&apos;ll Need?</h4>
        <ul className={`list-disc space-y-1 pl-6 ${styles.body}`}>
          <li>A valid email address (this becomes your login)</li>
          <li>A password you haven&apos;t used elsewhere</li>
        </ul>
      </div>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Open the Signup Page',
            content: (
              <>
                <p>
                  Navigate to the Aixel signup screen at{' '}
                  <a
                    href="https://app.aixel.io/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    https://app.aixel.io/register
                  </a>
                  . You&apos;ll see a single form — no multi-page wizards, no unnecessary fields.
                </p>
              </>
            ),
          },
          {
            title: 'Enter Your Details',
            content: (
              <>
                <p>Fill in the following four fields:</p>
                <DocTable
                  isDarkMode={isDarkMode}
                  columns={['Field', 'Description', 'Requirements']}
                  rows={signupFields.map(([field, description, requirements]) => ({
                    key: field,
                    cells: [field, description, requirements],
                  }))}
                />
              </>
            ),
          },
          {
            title: 'Submit',
            content: (
              <p>
                Click the signup button. Aixel will send a one-time verification code to the email
                address you entered.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-2">
        <h4 className={styles.subheading}>What Happens Next?</h4>
        <p className={styles.body}>
          You&apos;ll be redirected to the email verification screen. Check your inbox for a code
          from Aixel — enter it on the next screen to activate your account.
        </p>
      </div>
    </DocSubsection>
  )
}
