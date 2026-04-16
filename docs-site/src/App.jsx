import { useEffect, useMemo, useRef, useState } from 'react'
import Fuse from 'fuse.js'
import StandardAttributes from './sections/StandardAttributes'
import { FiChevronDown, FiMoon, FiSun } from 'react-icons/fi'
import { AixelLogo } from './components/AixelLogo'
import DocumentationSearch from './components/DocumentationSearch'
import Installation from './sections/Installation'
import searchIcon from './assets/svgs/search.svg?raw'
import { searchContent } from './config/searchContent'
import {
  gettingStartedSections,
  navSections,
  stepsToInstall,
} from './config/navigation'

const THEME_STORAGE_KEY = 'docs-theme-mode'

export default function App() {
  const [activeSection, setActiveSection] = useState(navSections[0].id)
  const [activeChildSection, setActiveChildSection] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState(() =>
    Object.fromEntries(navSections.map((section) => [section.id, true])),
  )
  const mainScrollRef = useRef(null)
  const searchContainerRef = useRef(null)
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
  const fuse = useMemo(
    () =>
      new Fuse(searchContent, {
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
        keys: [
          { name: 'title', weight: 0.45 },
          { name: 'section', weight: 0.2 },
          { name: 'keywords', weight: 0.2 },
          { name: 'body', weight: 0.15 },
        ],
      }),
    [],
  )

  const searchResults = useMemo(() => {
    const query = searchQuery.trim()
    if (!query) return []

    return fuse.search(query).map((result) => result.item).slice(0, 8)
  }, [fuse, searchQuery])

  const handleSelectSearchResult = (result) => {
    scrollMainToSection(result.id)
    setSearchQuery(result.title)
    setIsSearchOpen(false)

    if (result.id.startsWith('standard-')) {
      setActiveSection('standard-attributes')
      setActiveChildSection(
        result.id === 'standard-attributes' ? null : result.id,
      )
      setExpandedSections((prev) => ({ ...prev, 'standard-attributes': true }))
      return
    }

    if (result.id.startsWith('installation-')) {
      setActiveSection('Installation')
      setActiveChildSection(result.id)
    }
  }

  const scrollMainToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    const mainElement = mainScrollRef.current
    if (!target || !mainElement) return

    const mainRect = mainElement.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const top = targetRect.top - mainRect.top + mainElement.scrollTop - 16
    mainElement.scrollTo({ top, behavior: 'auto' })
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode)
  }, [isDarkMode, themeMode])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!searchContainerRef.current?.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

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
            <DocumentationSearch
              isDarkMode={isDarkMode}
              isOpen={isSearchOpen}
              onClear={() => {
                setSearchQuery('')
                setIsSearchOpen(false)
              }}
              onChange={(event) => {
                setSearchQuery(event.target.value)
                setIsSearchOpen(true)
              }}
              onFocus={() => {
                if (searchQuery.trim()) setIsSearchOpen(true)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setIsSearchOpen(false)
                  return
                }

                if (event.key === 'Enter' && searchResults.length > 0) {
                  event.preventDefault()
                  handleSelectSearchResult(searchResults[0])
                }
              }}
              onSelectResult={handleSelectSearchResult}
              searchContainerRef={searchContainerRef}
              searchIcon={searchIcon}
              searchQuery={searchQuery}
              searchResults={searchResults}
            />
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

      <div className="mx-auto grid h-[calc(100vh-89px)] grid-cols-1 md:grid-cols-[280px_1fr]">
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

        <main ref={mainScrollRef} className="sidebar-scroll h-[calc(100vh-89px)] overflow-y-auto pt-8 px-8">
          <div className="max-w-6xl mx-auto">
            <StandardAttributes isDarkMode={isDarkMode} />
            <Installation isDarkMode={isDarkMode} />
          </div>
        </main>
      </div>
    </div>
  )
}
