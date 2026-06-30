import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'
import { FiMoon, FiSun } from 'react-icons/fi'
import { AixelLogo } from './components/AixelLogo'
import DocSidebar from './components/DocSidebar'
import OnThisPage, { OnThisPageMobile } from './components/OnThisPage'
import DocumentationSearch from './components/DocumentationSearch'
import usePageTableOfContents from './hooks/usePageTableOfContents'
import DocRoutePage from './pages/DocRoutePage'
import SiteFooter from './components/SiteFooter'
import searchIcon from './assets/svgs/search.svg?raw'
import { searchContent } from './config/searchContent'
import {
  defaultPath,
  docGroups,
  flatNav,
  idToPath,
  pathToRoute,
  routes,
  searchIndex,
} from './content/registry'

const THEME_STORAGE_KEY = 'docs-theme-mode'

function useActiveNavFromRoute(pathname) {
  const route = pathToRoute[pathname]

  if (!route) {
    return { activeSectionId: null, activeChildId: null }
  }

  if (route.type === 'overview') {
    return { activeSectionId: route.section.id, activeChildId: null }
  }

  return { activeSectionId: route.section.id, activeChildId: route.page.id }
}

export default function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { activeSectionId, activeChildId } = useActiveNavFromRoute(pathname)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pageScrollRef = useRef(null)
  const contentRef = useRef(null)
  const searchContainerRef = useRef(null)
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const savedMode = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedMode === 'light' || savedMode === 'dark') return savedMode
    if (savedMode === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })
  const isDarkMode = themeMode === 'dark'

  const searchableItems = useMemo(
    () => [
      ...searchIndex,
      ...searchContent.map((item) => ({
        ...item,
        path: idToPath[item.id] ?? null,
      })),
    ],
    [],
  )

  const fuse = useMemo(
    () =>
      new Fuse(searchableItems, {
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
    [searchableItems],
  )

  const searchResults = useMemo(() => {
    const query = searchQuery.trim()
    if (!query) return []

    return fuse.search(query).map((result) => result.item).slice(0, 8)
  }, [fuse, searchQuery])

  const scrollMainToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    const scrollContainer = pageScrollRef.current
    if (!target || !scrollContainer) return

    const containerRect = scrollContainer.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const top = targetRect.top - containerRect.top + scrollContainer.scrollTop - 24
    scrollContainer.scrollTo({ top, behavior: 'smooth' })
  }

  const handleSelectSearchResult = (result) => {
    const path = result.path ?? idToPath[result.id]

    if (path) {
      navigate(path)
      setSearchQuery(result.title)
      setIsSearchOpen(false)
    }
  }

  const { activeHeadingId, tocItems } = usePageTableOfContents({
    scrollContainerRef: pageScrollRef,
    contentRef,
    pathname,
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode)
  }, [isDarkMode, themeMode])

  useEffect(() => {
    pageScrollRef.current?.scrollTo({ top: 0 })
  }, [pathname])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!searchContainerRef.current?.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return (
    <div
      ref={pageScrollRef}
      className={`sidebar-scroll h-screen overflow-y-auto bg-card text-[16px] ${isDarkMode ? 'text-gray-100 bg-zinc-900/40' : 'text-slate-900 bg-white/70'}`}
    >
      <header
        className={`sticky top-0 z-40 border-0 border-b bg-background ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}
      >
        <div className="grid items-center gap-8 p-4 py-6 md:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_200px]">
          <div className="flex gap-4">
            <AixelLogo
              size={84}
              className={`border-r-2 pr-4 ${isDarkMode ? 'border-zinc-700' : 'border-gray-200'}`}
            />
            <p className={`mt-1 text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              Documentation
            </p>
          </div>
          <div className="flex items-center gap-4">
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
              className={`inline-flex cursor-pointer rounded-md items-center gap-2 border px-3 py-2 text-sm transition xl:hidden ${
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
          <div className="hidden items-center justify-end xl:flex gap-2 w-full">
          <a
              href="https://app.aixel.io/register"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex cursor-pointer rounded-md items-center gap-2 px-3 py-2 text-sm font-semibold transition h-9 text-nowrap ${
                isDarkMode
                  ? 'text-white hover:bg-zinc-800/80 border-black/10'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Create account
            </a>
            <a
              href="https://app.aixel.io/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex cursor-pointer rounded-md items-center gap-2 px-6 py-2 text-sm font-semibold transition h-9 text-nowrap bg-orange-400 border text-white ${
                isDarkMode
                  ? 'text-gray-200 hover:bg-orange-400/90 border-black/10'
                  : 'text-gray-700 hover:bg-orange-400/90'
              }`}
            >
              Log in
            </a>
       
            <button
              type="button"
              onClick={() => setThemeMode((previousMode) => (previousMode === 'dark' ? 'light' : 'dark'))}
              className={`inline-flex cursor-pointer rounded-md items-center gap-2 border px-3 py-2 text-sm transition ${
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

      <div className="grid min-h-[calc(100vh-89px)] grid-cols-[240px_minmax(0,1fr)_200px] 2xl:grid-cols-[320px_minmax(0,1fr)_220px]">
        <aside>
          <nav
            className={`sidebar-scroll sticky top-[89px] max-h-[calc(100vh-89px)] overflow-y-auto border-0 border-r px-4 py-4 pt-8 xl:px-6 ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}
          >
            <DocSidebar
              groups={docGroups}
              isDarkMode={isDarkMode}
              activeSectionId={activeSectionId}
              activeChildId={activeChildId}
            />
          </nav>
        </aside>

        <main className="min-w-0">
          <div className="mx-auto w-full max-w-5xl px-6 py-8 lg:px-10">
            <OnThisPageMobile
              items={tocItems}
              activeHeadingId={activeHeadingId}
              isDarkMode={isDarkMode}
              onNavigate={scrollMainToSection}
            />

            <div className="mt-6 xl:mt-0">
              <Routes>
                <Route path="/" element={<Navigate to={defaultPath} replace />} />
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <DocRoutePage
                        flatNav={flatNav}
                        isDarkMode={isDarkMode}
                        contentRef={contentRef}
                      />
                    }
                  />
                ))}
                <Route path="*" element={<Navigate to={defaultPath} replace />} />
              </Routes>
            </div>
          </div>
        </main>

        <aside className="hidden xl:block">
          <div className="sidebar-scroll sticky top-[89px] max-h-[calc(100vh-89px)] overflow-y-auto py-8 pl-4 pr-2 2xl:pl-6">
            <OnThisPage
              items={tocItems}
              activeHeadingId={activeHeadingId}
              isDarkMode={isDarkMode}
              onNavigate={scrollMainToSection}
            />
          </div>
        </aside>
      </div>

      <SiteFooter isDarkMode={isDarkMode} />
    </div>
  )
}
