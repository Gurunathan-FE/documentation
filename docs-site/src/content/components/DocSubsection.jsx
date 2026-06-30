import { useDocPageContext } from './DocPageContext'
import DocIcon from './DocIcon'

const TITLE_VARIANTS = {
  section:
    'doc-subsection-title text-2xl font-semibold leading-tight text-balance text-gray-900',
  minor: 'doc-subsection-title text-base font-semibold text-gray-900',
}

export default function DocSubsection({
  id,
  title,
  titleTag,
  titleVariant = 'section',
  titleClassName = '',
  className = '',
  children,
  icon,
  isDarkMode = false,
}) {
  const { standalone } = useDocPageContext()
  const TitleTag = titleTag ?? (titleVariant === 'minor' ? 'h4' : 'h3')
  const titleClasses = [TITLE_VARIANTS[titleVariant], titleClassName].filter(Boolean).join(' ')
  const showTitle = title && !standalone
  const sectionClassName = [
    standalone ? 'space-y-6' : 'scroll-mt-40 space-y-8',
    standalone ? (className || '').replace(/\bmt-\d+\b/g, '').trim() : className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={sectionClassName}>
      {showTitle ? (
        <div className="flex items-center gap-3">
          {icon ? <DocIcon name={icon} className="h-9 w-9" isDarkMode={isDarkMode} /> : null}
          <TitleTag className={titleClasses}>{title}</TitleTag>
        </div>
      ) : null}
      {children}
    </section>
  )
}
