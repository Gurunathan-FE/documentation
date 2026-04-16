import { FiX } from 'react-icons/fi'

export default function DocumentationSearch({
  isDarkMode,
  isOpen,
  onClear,
  onChange,
  onFocus,
  onKeyDown,
  onSelectResult,
  searchContainerRef,
  searchIcon,
  searchQuery,
  searchResults,
}) {
  return (
    <div className="relative mx-auto" ref={searchContainerRef}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        className={`w-xl rounded-none border py-2 pl-10 pr-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 ${
          isDarkMode
            ? 'border-zinc-700 bg-zinc-900 text-gray-100 placeholder:text-gray-500 focus:border-zinc-500 focus:ring-zinc-500'
            : 'border-gray-300 bg-white text-slate-900 focus:border-gray-400 focus:ring-gray-400'
        }`}
        style={{ boxSizing: 'border-box' }}
      />
      {searchQuery ? (
        <button
          type="button"
          onClick={onClear}
          className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition ${
            isDarkMode
              ? 'text-gray-400 hover:text-gray-200'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          aria-label="Clear search"
          title="Clear search"
        >
          <FiX className="h-4 w-4" />
        </button>
      ) : null}
      <span className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        <span
          className="block h-5 w-5 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-current"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: searchIcon }}
        />
      </span>

      {isOpen && searchQuery.trim() ? (
        <div
          className={`absolute left-0 right-0 top-[calc(100%+8px)] z-50 border shadow-lg ${
            isDarkMode
              ? 'border-zinc-700 bg-zinc-950'
              : 'border-gray-200 bg-white'
          }`}
        >
          {searchResults.length ? (
            <ul className="max-h-80 overflow-y-auto py-2">
              {searchResults.map((result) => (
                <li key={`${result.id}-${result.title}`}>
                  <button
                    type="button"
                    onClick={() => onSelectResult(result)}
                    className={`block w-full cursor-pointer px-4 py-3 text-left transition ${
                      isDarkMode
                        ? 'hover:bg-zinc-900'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {result.title}
                    </div>
                    <div className={`mt-1 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {result.section}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className={`px-4 py-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No results found.
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}
