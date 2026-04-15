import { useEffect, useRef, useState } from 'react'
import StandardAttributes from './sections/StandardAttributes'
import { FiChevronDown, FiMoon, FiSun } from 'react-icons/fi'
import { AixelLogo } from './components/AixelLogo'
import Installation from './sections/Installation'
import {
  gettingStartedSections,
  navSections,
  stepsToInstall,
} from './config/navigation'

const THEME_STORAGE_KEY = 'docs-theme-mode'

export default function App() {
  const [activeSection, setActiveSection] = useState(navSections[0].id)
  const [activeChildSection, setActiveChildSection] = useState(null)
  const [expandedSections, setExpandedSections] = useState(() =>
    Object.fromEntries(navSections.map((section) => [section.id, true])),
  )
  const mainScrollRef = useRef(null)
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const savedMode = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedMode === 'light' || savedMode === 'dark') return savedMode
    if (savedMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return 'light'
  })
  const isDarkMode = themeMode === 'dark'

  const scrollMainToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    const mainElement = mainScrollRef.current
    if (!target || !mainElement) return

    const mainRect = mainElement.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const top = targetRect.top - mainRect.top + mainElement.scrollTop - 8
    mainElement.scrollTo({ top, behavior: 'auto' })
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode)
  }, [isDarkMode, themeMode])

  useEffect(() => {
    const getActiveFromScroll = () => {
      const markerY = 180

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
      if (mainElement) {
        mainElement.removeEventListener('scroll', onScroll)
      }
      window.removeEventListener('resize', getActiveFromScroll)
    }
  }, [])

  return (
    <div className={`h-screen overflow-hidden text-[16px] ${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-slate-900'}`}>
      <header className={`sticky top-0 z-40 border-0 border-b ${isDarkMode ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-white'}`}>
        <div className="mx-auto p-4 py-6 grid md:grid-cols-[280px_1fr] gap-8 items-center">
          <div className="flex gap-4">
            <AixelLogo size={84} className={`border-r-2 pr-4 ${isDarkMode ? 'border-zinc-700' : 'border-gray-200'}`} />
            <p className={`mt-1 text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Documentation</p>
          </div>
          <div className="flex justify-end items-center gap-4">
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search..."
              className={`w-lg rounded-none border py-1 pl-10 pr-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
                isDarkMode
                  ? 'border-zinc-700 bg-zinc-900 text-gray-100 placeholder:text-gray-500 focus:border-zinc-500 focus:ring-zinc-500'
                  : 'border-gray-300 bg-white text-slate-900 focus:border-gray-400 focus:ring-gray-400'
              }`}
                style={{ boxSizing: 'border-box' }}
              />
              <span className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
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
            </div> */}
            <button
              type="button"
              onClick={() => setThemeMode((previousMode) => (previousMode === 'dark' ? 'light' : 'dark'))}
              className={`inline-flex cursor-pointer items-center gap-2 border px-3 py-2 text-sm transition ${
                isDarkMode
                  ? 'border-zinc-700 bg-zinc-900 text-gray-200 hover:bg-zinc-800'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
              }`}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              title={`Using ${themeMode} mode`}
            >
              {isDarkMode ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid h-[calc(100vh-89px)] grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
        <aside className="h-[calc(100vh-89px)]">
          <nav className={`sidebar-scroll h-full overflow-y-auto border-0 border-r px-8 py-4 pt-8 ${isDarkMode ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-white'}`}>
            <h6 className={`mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Getting Started</h6>
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
                        setExpandedSections((prev) => ({ ...prev, [item.id]: true }))
                        scrollMainToSection(item.id)
                      }}
                      className={`flex-1 px-2.5 py-2 text-[15px] transition ${
                        activeSection === item.id
                          ? 'text-orange-600'
                          : isDarkMode
                            ? 'text-gray-300 hover:bg-zinc-900 hover:text-gray-100'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
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
                      className={`px-2 py-2 ${
                        isDarkMode
                          ? 'text-gray-500 hover:bg-zinc-900 hover:text-gray-200'
                          : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'
                      }`}
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
                    <ul className={`ml-4 mt-1 space-y-1 border-l pl-2 ${isDarkMode ? 'border-zinc-700' : 'border-gray-200'}`}>
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            onClick={(event) => {
                              event.preventDefault()
                              scrollMainToSection(child.id)
                              setActiveSection(item.id)
                              setActiveChildSection(child.id)
                            }}
                            className={`block px-2.5 py-1.5 text-sm transition ${
                              activeChildSection === child.id
                                ? isDarkMode
                                  ? 'bg-orange-500/15 text-orange-300'
                                  : 'bg-orange-50 text-orange-700'
                                : isDarkMode
                                  ? 'text-gray-400 hover:bg-zinc-900 hover:text-gray-100'
                                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
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
            <h6 className={`mb-2 mt-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Installation</h6>
            <ul className="space-y-1.5">
                {stepsToInstall.map((item) => (
                <li key={item.id} className="pb-1">
                  {item.children?.length ? (
                    <ul className={`ml-4 mt-1 space-y-1 border-l pl-2 ${isDarkMode ? 'border-zinc-700' : 'border-gray-200'}`}>
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            onClick={(event) => {
                              event.preventDefault()
                              scrollMainToSection(child.id)
                              setActiveSection(item.id)
                              setActiveChildSection(child.id)
                            }}
                            className={`block px-2.5 py-1.5 text-sm transition ${
                              activeChildSection === child.id
                                ? isDarkMode
                                  ? 'bg-orange-500/15 text-orange-300'
                                  : 'bg-orange-50 text-orange-700'
                                : isDarkMode
                                  ? 'text-gray-400 hover:bg-zinc-900 hover:text-gray-100'
                                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
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

        <main ref={mainScrollRef} className="sidebar-scroll h-[calc(100vh-89px)] overflow-y-auto pt-8 ">
          <div className="max-w-6xl mx-auto">
            <StandardAttributes isDarkMode={isDarkMode} />
            <Installation isDarkMode={isDarkMode} />
          </div>
        </main>
      </div>
    </div>
  )
}
