import { useDocPageContext } from './DocPageContext'

export default function InstallationStep({
  id,
  step,
  title,
  isDarkMode,
  styles,
  children,
}) {
  const { standalone } = useDocPageContext()

  return (
    <div id={id} className={standalone ? 'space-y-6' : `scroll-mt-40 ${styles.sectionCard}`}>
      {!standalone ? (
        <div className="mb-6 flex items-center gap-3">
          <span
            className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-xl font-semibold ${styles.badge}`}
          >
            {step}
          </span>
          <h3
            className={`text-2xl font-semibold leading-tight text-balance xl:text-4xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
          >
            {title}
          </h3>
        </div>
      ) : null}
      {children}
    </div>
  )
}
