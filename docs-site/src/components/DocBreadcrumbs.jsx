import { Link } from 'react-router-dom'

export default function DocBreadcrumbs({ items, isDarkMode }) {
  if (!items.length) return null

  const textClass = isDarkMode ? 'text-gray-400' : 'text-gray-500'
  const linkClass = isDarkMode
    ? 'text-gray-400 hover:text-orange-300'
    : 'text-gray-500 hover:text-orange-600'

  return (
    <nav aria-label="Breadcrumb" className={`mb-3 text-sm ${textClass}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className={`transition ${linkClass}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
