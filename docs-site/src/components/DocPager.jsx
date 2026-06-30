import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

function PagerLink({ item, direction, isDarkMode }) {
  const isPrevious = direction === 'previous'
  const Icon = isPrevious ? FiArrowLeft : FiArrowRight

  const borderClass = isDarkMode ? 'border-zinc-800 hover:bg-zinc-900' : 'border-gray-200 hover:bg-gray-50'
  const labelClass = isDarkMode ? 'text-gray-400' : 'text-gray-500'
  const titleClass = isDarkMode ? 'text-gray-100' : 'text-gray-900'

  return (
    <Link
      to={item.path}
      className={`group flex flex-1 flex-col gap-1 border p-4 transition rounded-lg ${borderClass} ${
        isPrevious ? 'items-start text-left' : 'items-end text-right'
      }`}
    >
      <span className={`flex items-center gap-2 text-sm ${labelClass}`}>
        {isPrevious ? (
          <>
            <Icon className="h-4 w-4" />
            Previous
          </>
        ) : (
          <>
            Next
            <Icon className="h-4 w-4" />
          </>
        )}
      </span>
      <span className={`text-base font-medium ${titleClass}`}>{item.label}</span>
    </Link>
  )
}

export default function DocPager({ previous, next, isDarkMode }) {
  if (!previous && !next) return null

  return (
    <nav
      aria-label="Documentation pagination"
      className={`mt-12 grid gap-4 border-t pt-8 md:grid-cols-2 ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}
    >
      {previous ? <PagerLink item={previous} direction="previous" isDarkMode={isDarkMode} /> : <div />}
      {next ? <PagerLink item={next} direction="next" isDarkMode={isDarkMode} /> : <div />}
    </nav>
  )
}
