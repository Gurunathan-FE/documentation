import DocSteps from '../components/DocSteps'
import DocSubsection from '../components/DocSubsection'
import DocTable from '../components/DocTable'
import { useDocStyles } from '../components/useDocStyles'

export const subsectionMeta = {
  id: 'onboarding-verify-email',
  label: 'Verify Your Email',
}

const troubleshootingItems = [
  ['No email received', "Wait 60 seconds, then use the 'Resend Code' option"],
  ['Code expired', 'Request a new code — OTPs are time-sensitive'],
  ['Code rejected', 'Double-check for typos. Copy-paste from the email if possible'],
  ['Email in spam', 'Mark the Aixel sender as safe to avoid this in future'],
]

export default function VerifyEmail({ isDarkMode }) {
  const styles = useDocStyles(isDarkMode)

  return (
    <DocSubsection
      id={subsectionMeta.id}
      title="Verify Your Email"
      className="mt-8"
    >
      <p className={styles.body}>
        Aixel sends a one-time password (OTP) to your registered email. This confirms you own
        the address and secures your account.
      </p>

      <DocSteps
        title="Steps"
        isDarkMode={isDarkMode}
        steps={[
          {
            title: 'Check Your Inbox',
            content: (
              <p>
                Look for an email from Aixel containing a numeric verification code. It arrives
                within seconds. If you don&apos;t see it, check your spam or promotions folder.
              </p>
            ),
          },
          {
            title: 'Enter the OTP',
            content: <p>Type or paste the code into the verification field on screen.</p>,
          },
          {
            title: 'Confirm',
            content: (
              <p>
                Submit the code. Once verified, your account is active and you&apos;ll move to
                platform selection.
              </p>
            ),
          },
        ]}
      />

      <div className="space-y-4">
        <h4 className={styles.subheading}>Troubleshooting</h4>
        <DocTable
          isDarkMode={isDarkMode}
          columns={['Issue', 'Resolution']}
          rows={troubleshootingItems.map(([issue, resolution]) => ({
            key: issue,
            cells: [issue, resolution],
          }))}
        />
      </div>
    </DocSubsection>
  )
}
