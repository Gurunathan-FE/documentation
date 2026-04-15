import { useEffect, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'

export default function CodeBlock({ code, language = 'Code'}) {
  const [copied, setCopied] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    if (typeof document === 'undefined') return undefined

    const root = document.documentElement
    const syncTheme = () => setIsDarkMode(root.classList.contains('dark'))
    syncTheme()

    const observer = new MutationObserver(syncTheme)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={`overflow-hidden border rounded-xl ${
        isDarkMode
          ? 'border-zinc-700 bg-zinc-950'
          : 'border-zinc-300 bg-white'
      }`}
    >
      <div className="flex items-center justify-between px-2 pt-2 rounded-xl">
        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className={`cursor-pointer rounded-lg border-zinc-600 ${isDarkMode ? 'bg-zinc-900 text-zinc-100 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-900'} p-1 text-xs transition hover:bg-zinc-200`}
     
          aria-label={copied ? 'Copied' : 'Copy code'}
          title={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
        </button>
      </div>
      <pre
        className={`m-2 overflow-x-auto rounded-lg p-4 text-sm leading-7 ${isDarkMode ? 'bg-zinc-800 text-zinc-100' : 'bg-zinc-100 text-zinc-900'}`}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
