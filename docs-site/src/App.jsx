import { useEffect, useRef, useState } from 'react'
import StandardAttributes from './sections/StandardAttributes'
import HtmlInstallation from './sections/HtmlInstallation'
import ReactInstallation from './sections/ReactInstallation'
import AngularInstallation from './sections/AngularInstallation'
import NextJsInstallation from './sections/NextJsInstallation'
import { FiChevronDown } from 'react-icons/fi'
import { AixelLogo } from './components/AixelLogo'

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
  {
    id: 'nextjs-installation',
    label: 'NextJs Installation',
    children: [
      { id: 'nextjs-step-1', label: 'Add the script' },
      { id: 'nextjs-step-2', label: 'Create pixel.ts' },
      { id: 'nextjs-step-3', label: 'Create profile' },
      { id: 'nextjs-step-4', label: 'Track events' },
    ],
  },
]

const gettingStartedSections = navSections.filter(
  (section) => section.id === 'standard-attributes',
)

const installationSections = navSections.filter(
  (section) => section.id !== 'standard-attributes',
)

export default function App() {
  const [activeSection, setActiveSection] = useState(navSections[0].id)
  const [activeChildSection, setActiveChildSection] = useState(null)
  const [lockedSection, setLockedSection] = useState(null)
  const [expandedSections, setExpandedSections] = useState(() =>
    Object.fromEntries(navSections.map((section) => [section.id, true])),
  )
  const unlockTimerRef = useRef(null)
  const mainScrollRef = useRef(null)

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

    const mainElement = mainScrollRef.current
    getActiveFromScroll()
    if (mainElement) {
      mainElement.addEventListener('scroll', onScroll, { passive: true })
    }
    window.addEventListener('resize', getActiveFromScroll)

    return () => {
      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current)
      }
      if (mainElement) {
        mainElement.removeEventListener('scroll', onScroll)
      }
      window.removeEventListener('resize', getActiveFromScroll)
    }
  }, [lockedSection])

  return (
    <div className="h-screen overflow-hidden text-[16px] bg-white">
      <header className="sticky top-0 z-40 border-0 border-b border-gray-200 bg-white">
        <div className="mx-auto px-16 p-4 grid grid-cols-8 items-center">
          <AixelLogo size={72} className="col-span-2" />
          <div className="flex justify-between items-baseline gap-8 col-span-6 max-w-7xl">
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-1 w-lg border border-slate-300 text-base focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 rounded-none"
                style={{ boxSizing: 'border-box' }}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-500">Documentation</p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid h-[calc(100vh-89px)] grid-cols-1 gap-8 md:grid-cols-[320px_1fr]">
        <aside className="h-full pl-12">
          <nav className="sidebar-scroll h-full overflow-y-auto border-0 border-r border-gray-200 bg-white px-3 py-4 pt-8">
            <h6 className="text-sm font-medium text-slate-600 mb-2">Getting Started</h6>
            <ul className="space-y-1.5">
              {gettingStartedSections.map((item) => (
                <li key={item.id} className="pb-1">
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
                        setActiveChildSection(null)
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
                      className={`flex-1 px-2.5 py-2 text-[15px] transition ${
                        activeSection === item.id
                          ? 'text-blue-600'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
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
                      className="px-2 py-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                      <span
                        className={`inline-block transition-transform ${
                          expandedSections[item.id] ? 'rotate-0' : '-rotate-90'
                        }`}
                      >
                        <FiChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </div>

                  {item.children?.length && expandedSections[item.id] ? (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-2">
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
                              setActiveChildSection(child.id)
                            }}
                            className={`block px-2.5 py-1.5 text-sm transition ${
                              activeChildSection === child.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                            }`}
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
            <h6 className="text-sm font-medium text-slate-600 mb-2 mt-2">Installation</h6>
            <ul className="space-y-1.5">
              {installationSections.map((item) => (
                <li key={item.id} className="pb-1">
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
                        setActiveChildSection(null)
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
                      className={`flex-1 px-2.5 py-2 text-[15px] transition ${
                        activeSection === item.id
                          ? 'text-blue-600'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
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
                      className="px-2 py-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                      <span
                        className={`inline-block transition-transform ${
                          expandedSections[item.id] ? 'rotate-0' : '-rotate-90'
                        }`}
                      >
                        <FiChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </div>

                  {item.children?.length && expandedSections[item.id] ? (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-2">
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
                              setActiveChildSection(child.id)
                            }}
                            className={`block px-2.5 py-1.5 text-sm transition ${
                              activeChildSection === child.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                            }`}
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

        <main ref={mainScrollRef} className="h-full overflow-y-auto pt-8">
          <div className="max-w-6xl mx-auto">
            <StandardAttributes />
            <HtmlInstallation />
            <ReactInstallation />
            <AngularInstallation />
            <NextJsInstallation />
          </div>
        </main>
      </div>
    </div>
  )
}
