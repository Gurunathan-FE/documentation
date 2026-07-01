import Dots from '../../components/backgrounds/Dots'
import { useDocStyles } from './useDocStyles'

const STEP_RING_COLORS = [
  {
    ring: 'border-orange-500',
    text: 'text-orange-600',
    ringDark: 'border-orange-400',
    textDark: 'text-orange-300',
    connector: 'border-orange-400/70',
    connectorDark: 'border-orange-500/50',
  },
  {
    ring: 'border-teal-500',
    text: 'text-teal-600',
    ringDark: 'border-teal-400',
    textDark: 'text-teal-300',
    connector: 'border-teal-400/70',
    connectorDark: 'border-teal-500/50',
  },
]

function getStepAccent(index) {
  return STEP_RING_COLORS[index % STEP_RING_COLORS.length]
}

const DOTS_MASK =
  '[mask-image:radial-gradient(ellipse_150%_180%_at_top_right,black_0%,black_30%,transparent_100%)]'

function StepMarker({ index, isLast, isDarkMode, accent }) {
  const circleBg = isDarkMode ? 'bg-zinc-900' : 'bg-white'
  const lineClass = isDarkMode ? accent.connectorDark : accent.connector
  const ringClass = isDarkMode ? accent.ringDark : accent.ring
  const textClass = isDarkMode ? accent.textDark : accent.text

  return (
    <div className="flex w-10 shrink-0 flex-col items-center self-stretch pt-4">
      <div
        className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] text-sm font-medium shadow-sm ${circleBg} ${ringClass} ${textClass}`}
      >
        {index + 1}
      </div>
      {!isLast ? (
        <div
          aria-hidden
          className={`my-2 w-0 flex-1 border-l-2 border-dashed ${lineClass}`}
        />
      ) : null}
    </div>
  )
}

function StepCard({ step, isDarkMode, styles }) {
  const cardClass = isDarkMode
    ? 'border-zinc-800 bg-zinc-900/70 shadow-sm shadow-black/20'
    : 'border-gray-200 bg-white shadow-sm shadow-gray-200/60'
  const badgeClass = isDarkMode
    ? 'rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-300'
    : 'rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-gray-600'
  const dotsClass = isDarkMode ? 'text-orange-300/12' : 'text-orange-900/20'

  return (
    <div className={`relative isolate min-w-0 flex-1 overflow-hidden rounded-lg border p-4 sm:p-5 ${cardClass}`}>
      <div
        className="pointer-events-none absolute top-0 right-0 h-28 w-40 overflow-hidden sm:h-32 sm:w-48"
        aria-hidden="true"
      >
        <div className={`absolute inset-0 ${DOTS_MASK}`}>
          <Dots className={dotsClass} />
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h5 className={`text-base font-semibold leading-snug ${isDarkMode ? 'text-gray-100/70' : 'text-gray-900/50'}`}>
            {step.title}
          </h5>
          {step.badge ? <span className={badgeClass}>{step.badge}</span> : null}
        </div>
        <div className={`space-y-2 text-base ${styles.body}`}>{step.content}</div>
      </div>
    </div>
  )
}

export default function DocSteps({ title, steps, isDarkMode, className = '' }) {
  const styles = useDocStyles(isDarkMode)

  if (!steps?.length) return null

  return (
    <section className={`space-y-4 ${className}`}>
      {title ? <h4 className={styles.subheading}>{title}</h4> : null}
      <ol className="space-y-6">
        {steps.map((step, index) => {
          const accent = getStepAccent(index)

          return (
            <li key={step.title} className="relative flex gap-4">
              <StepMarker
                index={index}
                isLast={index === steps.length - 1}
                isDarkMode={isDarkMode}
                accent={accent}
              />
              <StepCard step={step} isDarkMode={isDarkMode} styles={styles} />
            </li>
          )
        })}
      </ol>
    </section>
  )
}
