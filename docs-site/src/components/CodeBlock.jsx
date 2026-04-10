import { useState } from 'react'

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

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
    <div className="relative">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-md border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm text-slate-100 transition hover:bg-slate-700"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 pr-24 text-sm leading-6 text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}
