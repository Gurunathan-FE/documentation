export function useDocStyles(isDarkMode = false) {
  return {
    subheading: `text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`,
    body: `text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`,
    link: 'text-orange-600 hover:text-orange-700 underline transition-colors',
  }
}

export function useInstallationStyles(isDarkMode = false) {
  return {
    sectionCard: isDarkMode
      ? 'border-zinc-800 bg-zinc-950/60'
      : 'border-gray-200 bg-white',
    mutedText: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    subtleText: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    badge: isDarkMode
      ? 'border-orange-500/30 bg-orange-500/10 text-orange-300'
      : 'border-orange-200 bg-orange-50 text-orange-600',
    item: isDarkMode
      ? 'border-zinc-800 bg-zinc-900/70 border-l-4 border-b-4 border-l-orange-900/70 border-b-orange-900/70'
      : 'border-gray-200 bg-card border-l-4 border-b-4 border-l-orange-300 border-b-orange-300',
    tag: isDarkMode
      ? 'border-zinc-700 bg-zinc-800 text-gray-100'
      : 'border-gray-300 bg-white text-gray-900',
  }
}
