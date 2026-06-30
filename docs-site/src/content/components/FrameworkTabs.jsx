import { useState } from 'react'
import CodeBlock from '../../components/CodeBlock'
import languageIcon from '../../assets/language-icons/html.svg'
import reactIcon from '../../assets/language-icons/react.svg'
import nextIcon from '../../assets/language-icons/nextjs.svg'
import angularIcon from '../../assets/language-icons/angular.svg'
import { FRAMEWORK_TABS, getInstallationTabCode } from '../installation/tabContent'

const TAB_ICONS = {
  HTML: languageIcon,
  React: reactIcon,
  Angular: angularIcon,
  'Next.js': nextIcon,
}

export default function FrameworkTabs({ stepKey, isDarkMode }) {
  const [activeTab, setActiveTab] = useState('HTML')

  return (
    <div className="mt-5">
      <div className="mb-3 flex w-fit gap-2">
        {FRAMEWORK_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={[
              'inline-flex w-full cursor-pointer items-center gap-1 border-b-2 px-3 py-1.5 text-sm font-medium focus:outline-none',
              activeTab === tab
                ? isDarkMode
                  ? 'border-orange-700'
                  : 'border-orange-400'
                : isDarkMode
                  ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                  : 'border-zinc-300 text-zinc-700 hover:bg-zinc-200',
            ].join(' ')}
          >
            <img src={TAB_ICONS[tab]} alt={tab} className="h-6 w-6" />
            {tab}
          </button>
        ))}
      </div>
      <CodeBlock language={activeTab} code={getInstallationTabCode(stepKey, activeTab)} />
    </div>
  )
}
