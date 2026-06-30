import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import DocIcon from './DocIcon'

export default function OverviewBentoGrid({
  items,
  title,
  description,
  isDarkMode,
}) {
  const card = isDarkMode
    ? 'border-zinc-800 bg-zinc-900/70 hover:border-orange-500/30 dark:hover:border-orange-600/70 hover:bg-zinc-900'
    : 'border-gray-200 bg-white hover:border-orange-300 dark:hover:border-orange-300 hover:bg-orange-50/30'
  const titleClass = isDarkMode ? 'text-gray-100' : 'text-gray-900'
  const bodyClass = isDarkMode ? 'text-gray-300' : 'text-gray-600'
  const mutedClass = isDarkMode ? 'text-gray-400' : 'text-gray-500'
  const iconShell = isDarkMode
    ? 'border-zinc-700 bg-zinc-950/90'
    : 'border-gray-200 bg-white'
  const arrowClass = isDarkMode ? 'text-orange-300' : 'text-orange-600'

  return (
    <section className="space-y-4">
      <header className="space-y-2">
        <h4 className={`text-lg font-semibold ${titleClass}`}>{title}</h4>
        {description ? <p className={bodyClass}>{description}</p> : null}
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`group flex h-full flex-col rounded-lg border border-l-4 border-b-4 p-5 transition ${card}`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border ${iconShell}`}
              >
                <DocIcon name={item.icon} className="h-6 w-6" isDarkMode={isDarkMode} />
              </div>
              {item.category ? (
                <span className={`text-xs font-medium uppercase tracking-[0.18em] ${mutedClass}`}>
                  {item.category}
                </span>
              ) : null}
            </div>

            <h5 className={`mb-2 text-lg font-semibold leading-snug ${titleClass}`}>{item.title}</h5>
            <p className={`mb-5 flex-1 text-sm leading-relaxed ${bodyClass}`}>{item.description}</p>

            <span className={`mt-auto inline-flex items-center gap-2 text-sm font-medium ${arrowClass}`}>
              Open guide
              <FiArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
