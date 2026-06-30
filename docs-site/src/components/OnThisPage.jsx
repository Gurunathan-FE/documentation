import { useEffect, useRef } from 'react'

function TocLink({ item, isActive, isParentActive, depth, isDarkMode, onNavigate }) {
  const linkRef = useRef(null)
  const isHighlighted = isActive || isParentActive

  useEffect(() => {
    if (!isActive || !linkRef.current) return
    linkRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [isActive])

  return (
    <a
      ref={linkRef}
      href={`#${item.id}`}
      onClick={(event) => {
        event.preventDefault()
        onNavigate(item.id)
      }}
      className={[
        'group relative block border-l-2 py-1 text-xs leading-snug transition-colors duration-200 xl:text-sm',
        depth > 0 ? 'pl-3' : 'pl-2.5',
        isActive
          ? isDarkMode
            ? 'border-orange-500 font-medium text-orange-300'
            : 'border-orange-500 font-medium text-orange-600'
          : isHighlighted
            ? isDarkMode
              ? 'border-orange-500/30 text-orange-200/80'
              : 'border-orange-500/30 text-orange-700/80'
            : isDarkMode
              ? 'border-transparent text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
              : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800',
      ].join(' ')}
    >
      {item.label}
    </a>
  )
}

function TocList({ items, activeHeadingId, isDarkMode, onNavigate }) {
  return (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const isParentActive =
          activeHeadingId === item.id ||
          item.children.some((child) => child.id === activeHeadingId)

        return (
          <li key={item.id}>
            <TocLink
              item={item}
              isActive={activeHeadingId === item.id}
              isParentActive={isParentActive && activeHeadingId !== item.id}
              depth={0}
              isDarkMode={isDarkMode}
              onNavigate={onNavigate}
            />
            {item.children.length > 0 ? (
              <ul className="mt-0.5 space-y-0.5">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <TocLink
                      item={child}
                      isActive={activeHeadingId === child.id}
                      isParentActive={false}
                      depth={1}
                      isDarkMode={isDarkMode}
                      onNavigate={onNavigate}
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}

export default function OnThisPage({
  items,
  activeHeadingId,
  isDarkMode,
  onNavigate,
  className = '',
}) {
  if (!items.length) return null

  const titleClass = isDarkMode ? 'text-zinc-200' : 'text-slate-900'

  return (
    <nav aria-label="On this page" className={className}>
      <p className={`mb-3 text-xs font-semibold xl:text-sm ${titleClass}`}>On this page</p>
      <TocList
        items={items}
        activeHeadingId={activeHeadingId}
        isDarkMode={isDarkMode}
        onNavigate={onNavigate}
      />
    </nav>
  )
}

export function OnThisPageMobile({ items, activeHeadingId, isDarkMode, onNavigate }) {
  if (!items.length) return null

  return (
    <details
      className={[
        'group rounded-xl border xl:hidden',
        isDarkMode ? 'border-zinc-800 bg-background' : 'border-slate-200 bg-background',
      ].join(' ')}
    >
      <summary
        className={[
          'cursor-pointer list-none px-4 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden',
          isDarkMode ? 'text-zinc-200' : 'text-slate-800',
        ].join(' ')}
      >
        On this page
      </summary>
      <div className="border-t px-3 pb-3 pt-2">
        <TocList
          items={items}
          activeHeadingId={activeHeadingId}
          isDarkMode={isDarkMode}
          onNavigate={onNavigate}
        />
      </div>
    </details>
  )
}
