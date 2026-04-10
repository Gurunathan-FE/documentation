import { useEffect, useRef, useState } from 'react'
import StandardAttributes from './sections/StandardAttributes'
import HtmlInstallation from './sections/HtmlInstallation'
import ReactInstallation from './sections/ReactInstallation'
import AngularInstallation from './sections/AngularInstallation'

const navSections = [
  {
    id: 'standard-attributes',
    label: 'Standard Attributes',
    children: [
      { id: 'standard-profile-fields', label: 'Profile Fields' },
      { id: 'standard-events', label: 'Standard Events' },
    ],
  },
  {
    id: 'html-installation',
    label: 'HTML Installation',
    children: [
      { id: 'html-step-1', label: 'Add the script' },
      { id: 'html-step-2', label: 'Add an event tracker to test' },
      { id: 'html-step-3', label: 'Create profile' },
      { id: 'html-step-4', label: 'Track events' },
    ],
  },
  {
    id: 'react-installation',
    label: 'React Installation',
    children: [
      { id: 'react-step-1', label: 'Add the script' },
      { id: 'react-step-2', label: 'Create pixel.ts' },
      { id: 'react-step-3', label: 'Create profile' },
      { id: 'react-step-4', label: 'Track events' },
    ],
  },
  {
    id: 'angular-installation',
    label: 'Angular Installation',
    children: [
      { id: 'angular-step-1', label: 'Add the script' },
      { id: 'angular-step-2', label: 'Create a service' },
      { id: 'angular-step-3', label: 'Create profile' },
      { id: 'angular-step-4', label: 'Track events' },
    ],
  },
]

export default function App() {
  const [activeSection, setActiveSection] = useState(navSections[0].id)
  const [lockedSection, setLockedSection] = useState(null)
  const [expandedSections, setExpandedSections] = useState(() =>
    Object.fromEntries(navSections.map((section) => [section.id, true])),
  )
  const unlockTimerRef = useRef(null)

  useEffect(() => {
    const getActiveFromScroll = () => {
      const markerY = 180

      if (lockedSection) {
        const lockedElement = document.getElementById(lockedSection)
        if (!lockedElement) {
          setLockedSection(null)
        } else {
          const lockedRect = lockedElement.getBoundingClientRect()
          // scrollIntoView({ block: 'start' }) aligns section near viewport top.
          // Release lock once the target section reaches top viewport band.
          if (lockedRect.top <= 8 && lockedRect.bottom > 8) {
            setLockedSection(null)
            setActiveSection(lockedSection)
          } else {
            setActiveSection(lockedSection)
            return
          }
        }
      }

      let nextActiveId = navSections[0].id

      for (const section of navSections) {
        const element = document.getElementById(section.id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= markerY) {
          nextActiveId = section.id
        } else {
          break
        }
      }

      setActiveSection(nextActiveId)
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        getActiveFromScroll()
        ticking = false
      })
    }

    getActiveFromScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', getActiveFromScroll)

    return () => {
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', getActiveFromScroll)
    }
  }, [lockedSection])

  return (
    <div className="min-h-screen text-[16px]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold text-slate-900">Aixel Documentation</h1>
          <p className="mt-2 text-base text-slate-600">
            Install and Configure Aixel for your website.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[260px_1fr]">
        <aside className="md:sticky md:top-32 md:h-fit">
          <nav className="sidebar-scroll max-h-[calc(100vh-10rem)] overflow-y-auto rounded-lg border border-slate-200 bg-white p-3 pr-2">
            <ul className="space-y-1">
              {navSections.map((item) => (
                <li key={item.id}>
                  <div className="flex items-center gap-1">
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => {
                        event.preventDefault()
                        if (item.children?.length) {
                          setExpandedSections((prev) => ({
                            ...prev,
                            [item.id]: !prev[item.id],
                          }))
                          return
                        }
                        setActiveSection(item.id)
                        setLockedSection(item.id)
                        setExpandedSections((prev) => ({ ...prev, [item.id]: true }))

                        const target = document.getElementById(item.id)
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }

                        if (unlockTimerRef.current) {
                          window.clearTimeout(unlockTimerRef.current)
                        }
                        unlockTimerRef.current = window.setTimeout(() => {
                          setLockedSection(null)
                        }, 2200)
                      }}
                      className={`flex-1 rounded-md px-2 py-2 text-base transition ${
                        activeSection === item.id
                          ? 'text-blue-500'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </a>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      onClick={() =>
                        setExpandedSections((prev) => ({
                          ...prev,
                          [item.id]: !prev[item.id],
                        }))
                      }
                      className="rounded-md px-2 py-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                    >
                      <span
                        className={`inline-block text-xs transition-transform ${
                          expandedSections[item.id] ? 'rotate-90' : ''
                        }`}
                      >
                        ▶
                      </span>
                    </button>
                  </div>

                  {item.children?.length && expandedSections[item.id] ? (
                    <ul className="mt-1 space-y-1 pl-4">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            onClick={(event) => {
                              event.preventDefault()
                              const target = document.getElementById(child.id)
                              if (target) {
                                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                              }
                              setActiveSection(item.id)
                            }}
                            className="block rounded-md px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="space-y-6">
          <StandardAttributes />
          <HtmlInstallation />
          <ReactInstallation />
          <AngularInstallation />
        </main>
      </div>
    </div>
  )
}
