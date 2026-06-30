import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Dots from '../../components/backgrounds/Dots'
import htmlIcon from '../../assets/language-icons/html.svg'
import reactIcon from '../../assets/language-icons/react.svg'
import nextjsIcon from '../../assets/language-icons/nextjs.svg'
import angularIcon from '../../assets/language-icons/angular.svg'

const FRAMEWORKS = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Next.js', icon: nextjsIcon },
  { name: 'Angular', icon: angularIcon },
]

const INSTALLATION_STEPS = [
  {
    shortLabel: 'Add the script',
    path: '/installation/add-the-script',
  },
  {
    shortLabel: 'Create a pixel file',
    path: '/installation/create-a-pixel-file',
  },
  {
    shortLabel: 'Create profile',
    path: '/installation/create-profile',
  },
  {
    shortLabel: 'Track events',
    path: '/installation/track-events',
  },
]

export default function InstallationSummaryCard({ isDarkMode }) {
  const shell = isDarkMode ? 'bg-zinc-900/60' : 'bg-white'
  const muted = isDarkMode ? 'text-gray-400' : 'text-gray-500'
  const heading = isDarkMode ? 'text-gray-100' : 'text-gray-900'
  const pathRow = isDarkMode ? 'border-zinc-800' : 'border-gray-200'

  return (
    <div
      className={`relative isolate overflow-hidden rounded-lg border border-l-4 border-b-4 shadow-lg ${
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
              10-15<span className="ml-0.5 text-lg font-medium text-emerald-500">min</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {FRAMEWORKS.map((framework) => (
            <div
              key={framework.name}
              title={framework.name}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                isDarkMode ? 'border-zinc-700 bg-zinc-900/80' : 'border-gray-200 bg-white'
              }`}
            >
              <img src={framework.icon} alt={framework.name} className="h-6 w-6" />
            </div>
          ))}
        </div>
      </div>

      <div className={`relative z-10 border-t px-4 py-4 sm:px-5 ${pathRow}`}>
        <p className={`mb-3 text-xs font-medium uppercase tracking-wider ${muted}`}>
          Installation steps
        </p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {INSTALLATION_STEPS.map((step, index) => (
            <div key={step.path} className="flex items-center gap-2 sm:gap-3">
              <Link
                to={step.path}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                  isDarkMode
                    ? 'border-orange-700 bg-zinc-900 text-gray-200 hover:border-orange-900/70 hover:text-orange-300'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                    isDarkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {index + 1}
                </span>
                {step.shortLabel}
              </Link>
              {index < INSTALLATION_STEPS.length - 1 ? (
                <FiArrowRight className={`hidden h-3.5 w-3.5 sm:inline ${muted}`} aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
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
