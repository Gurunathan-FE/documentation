import DocSection from '../../components/DocSection'
import CreateAccount, { subsectionMeta as createAccount } from './create-account'
import VerifyEmail, { subsectionMeta as verifyEmail } from './verify-email'
import ChoosePlatform, { subsectionMeta as choosePlatform } from './choose-platform'
import Login, { subsectionMeta as login } from './login'

export const pageMeta = {
  id: 'onboarding',
  label: 'Onboarding',
  children: [createAccount, verifyEmail, choosePlatform, login],
}

export default function Onboarding({ isDarkMode }) {
  return (
    <DocSection id={pageMeta.id} title={pageMeta.label}>
      <CreateAccount isDarkMode={isDarkMode} />
      <VerifyEmail isDarkMode={isDarkMode} />
      <ChoosePlatform isDarkMode={isDarkMode} />
      <Login isDarkMode={isDarkMode} />
    </DocSection>
  )
}
