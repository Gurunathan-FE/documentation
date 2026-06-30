import { Link } from 'react-router-dom'
import { AixelIcon } from '../../components/AixelIcon'
import Dots from '../../components/backgrounds/Dots'
import { FiArrowRight } from 'react-icons/fi'

const ONBOARDING_STEPS = [
  {
    shortLabel: 'Create account',
    path: '/getting-started/create-your-aixel-account',
    icon: UserIcon,
  },
  {
    shortLabel: 'Verify email',
    path: '/getting-started/verify-your-email',
    icon: MailIcon,
  },
  {
    shortLabel: 'Choose platform',
    path: '/getting-started/choose-your-platform',
    icon: GridIcon,
  },
  {
    shortLabel: 'Log in',
    path: '/getting-started/login',
    icon: LoginIcon,
  },
]

export default function OnboardingSummaryCard({ isDarkMode }) {
  const shell = isDarkMode ? 'bg-zinc-900/60' : 'bg-white'
  const muted = isDarkMode ? 'text-gray-400' : 'text-gray-500'
  const heading = isDarkMode ? 'text-gray-100' : 'text-gray-900'
  const pathRow = isDarkMode ? 'border-zinc-800' : 'border-gray-200'

  return (
    <div className={`relative isolate overflow-hidden rounded-lg border border-l-4 border-b-4 shadow-lg ${
      isDarkMode
        ? 'border-orange-700/40 shadow-orange-900/30'
        : 'border-orange-300 shadow-orange-300/40'
    } ${shell}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_75%_100%_at_top_right,orange_0%,orange_30%,transparent_100%)]">
          <Dots className={isDarkMode ? 'text-orange-300/12' : 'text-orange-900/20'} />
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 p-4 sm:gap-6 sm:p-5">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              isDarkMode ? 'bg-orange-900/10 text-orange-400' : 'bg-orange-100 text-orange-600'
            }`}
          >
            <TrendIcon />
          </div>
          <div>
            <p className={`text-xs font-medium uppercase tracking-wider ${muted}`}>Setup time</p>
            <p className={`text-3xl font-semibold leading-none ${heading}`}>
              5<span className="ml-0.5 text-lg font-medium text-emerald-500">min</span>
            </p>
          </div>
        </div>

        <AixelIcon size={44} className="shrink-0" />
      </div>

      <div className={`relative z-10 border-t px-4 py-4 sm:px-5 ${pathRow}`}>
        <p className={`mb-3 text-xs font-medium uppercase tracking-wider ${muted}`}>
          Your onboarding path
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {ONBOARDING_STEPS.map((step, index) => (
            <div key={step.path} className="flex items-center gap-2 sm:gap-3">
              <Link
                to={step.path}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                  isDarkMode
                    ? 'border-orange-700 bg-zinc-900 text-gray-200 hover:border-orange-900/70 hover:text-orange-300'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                <step.icon className={`h-3.5 w-3.5 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                {step.shortLabel}
              </Link>
              {index < ONBOARDING_STEPS.length - 1 ? (
                <span className={`hidden text-xs sm:inline ${muted}`}><FiArrowRight className={`hidden h-3.5 w-3.5 sm:inline ${muted}`} aria-hidden /></span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value, headingClass, mutedClass, accent = false }) {
  return (
    <div>
      <p className={`text-xs font-medium uppercase tracking-wider ${mutedClass}`}>{label}</p>
      <p className={`text-lg font-semibold ${accent ? 'text-emerald-500' : headingClass}`}>{value}</p>
    </div>
  )
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" strokeLinecap="round" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GridIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )
}

function LoginIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" strokeLinecap="round" />
      <path d="M10 17l5-5-5-5M15 12H3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
