import { useState } from 'react'
import CodeBlock from '../components/CodeBlock'
import DocSection from '../components/DocSection'
import {
  FRAMEWORK_TABS,
  getInstallationTabCode,
} from './installationTabContent'

export default function Installation({ isDarkMode = true }) {
  const [activeTabsByStep, setActiveTabsByStep] = useState({
    createPixelFile: 'HTML',
    createProfile: 'HTML',
    trackEvents: 'HTML',
  })

  const sectionCardClass = isDarkMode
    ? 'border-zinc-800 bg-zinc-950/60'
    : 'border-gray-200 bg-white'
  const mutedTextClass = isDarkMode ? 'text-gray-300' : 'text-gray-700'
  const subtleTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-600'
  const badgeClass = isDarkMode
    ? 'border-orange-500/30 bg-orange-500/10 text-orange-300'
    : 'border-orange-200 bg-orange-50 text-orange-600'
  const itemClass = isDarkMode
    ? 'border-zinc-800 bg-zinc-900/70'
    : 'border-gray-200 bg-gray-50'
  const tagClass = isDarkMode
    ? 'border-zinc-700 bg-zinc-800 text-gray-100'
    : 'border-gray-300 bg-white text-gray-900'

  const setActiveTabForStep = (stepKey, tab) => {
    setActiveTabsByStep((prev) => ({ ...prev, [stepKey]: tab }))
  }

  const renderTabbedCode = (stepKey) => (
    <div className="mt-5">
      <div className="mb-3 flex w-fit gap-2">
        {FRAMEWORK_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTabForStep(stepKey, tab)}
            className={[
              'w-full cursor-pointer border px-3 py-1.5 text-sm font-medium focus:outline-none',
              activeTabsByStep[stepKey] === tab
                ? isDarkMode
                  ? 'border-orange-700 bg-orange-600 text-white'
                  : 'border-orange-400 bg-orange-400 text-white'
                : isDarkMode
                  ? 'border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                  : 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200',
            ].join(' ')}
          >
            {tab}
          </button>
        ))}
      </div>
      <CodeBlock
        language={activeTabsByStep[stepKey]}
        code={getInstallationTabCode(stepKey, activeTabsByStep[stepKey])}
      />
    </div>
  )

  return (
    <DocSection id="installation" title="Installation">
      <div className="space-y-16">
        <div id="installation-step-1" className={`scroll-mt-40 ${sectionCardClass}`}>
          <div className="mb-6 flex items-center gap-3">
            <span className={`rounded-full inline-flex h-12 w-12 shrink-0 items-center justify-center border text-xl font-semibold ${badgeClass}`}>
              01
            </span>
            <h3 className={`text-4xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Add the script
              </h3>
          </div>
          <div className="my-8">
              <p>
                Copy and paste the bootstrap snippet into your app&apos;s root file (where your app loads).
              </p>
            </div>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="space-y-3">
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Placement by framework
              </p>

              <div className={`border p-3 ${itemClass}`}>
                <span className={`mb-2 inline-block border px-2 py-0.5 text-xs font-semibold ${tagClass}`}>
                  HTML
                </span>
                <p className={`text-sm ${mutedTextClass}`}>
                  Add directly in <code>&lt;head&gt;</code> or from a shared file like <code>pixel.js</code>.
                </p>
              </div>

              <div className={`border p-3 ${itemClass}`}>
                <span className={`mb-2 inline-block border px-2 py-0.5 text-xs font-semibold ${tagClass}`}>
                  React / Angular
                </span>
                <p className={`text-sm ${mutedTextClass}`}>
                  Add the snippet in <code>index.html</code>, inside the <code>&lt;head&gt;</code> tag.
                </p>
              </div>

              <div className={`border p-3 ${itemClass}`}>
                <span className={`mb-2 inline-block border px-2 py-0.5 text-xs font-semibold ${tagClass}`}>
                  Next.js
                </span>
                <p className={`text-sm ${mutedTextClass}`}>
                  In <code>layout.tsx</code>, define <code>AIXEL_BOOTSTRAP</code> and inject it via Next&apos;s <code>&lt;Script /&gt;</code> so it runs globally.
                </p>
              </div>
            </div>

            <CodeBlock
              language="Script"
              code={`<script type="text/javascript">
!function(){"use strict";!function(t,e){if(!e.__aixelVersion){"events,identify,onLoad".split(",").forEach(function(t){var i,n,a;i=e,2===(a=(n=t).split(".")).length&&(i=i[a[0]],n=a[1]),i[n]=function(){i.push([n].concat(Array.prototype.slice.call(arguments,0)))}}),window.aixel=e,e.__aixelVersion="0.0.1",e.init=function(i,n){e.push(["init",i,n]);var a=t.createElement("script");a.type="text/javascript",a.async=!0,a.src="//d3lwdfc3pm008a.cloudfront.net/web.js";var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)}}}(document,window.aixel||[])}();
window.aixel.init('<api-key>', {
	apiHost: 'https://data-log.aixel.io',
})
</script>`}
            />
          </div>
        </div>

        <div id="installation-step-2" className={`scroll-mt-40 ${sectionCardClass}`}>
          <div className="mb-6 flex items-center gap-3">
            <span className={`rounded-full inline-flex h-12 w-12 shrink-0 items-center justify-center border text-xl font-semibold ${badgeClass}`}>
              02
            </span>
            <h3 className={`text-4xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Create a pixel file
              </h3>
          </div>
          <div className="my-8">
              <p>
                Create a pixel file to track events and identify users.
              </p>
            </div>
          {renderTabbedCode('createPixelFile')}
        </div>

        <div id="installation-step-3" className={`scroll-mt-40 ${sectionCardClass}`}>
          <div className="mb-6 flex items-center gap-3">
            <span className={`rounded-full inline-flex h-12 w-12 shrink-0 items-center justify-center border text-xl font-semibold ${badgeClass}`}>
              03
            </span>
            <h3 className={`text-4xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Create profile
              </h3>
          </div>
          <div className="my-8">
              <p>
                Use <code>identify()</code> to create and associate events with a specific user.
              </p>
          </div>
          <CodeBlock
            code={`aixel.identify('distinct_id', { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone: '1234567890' });`}
          />
          {renderTabbedCode('createProfile')}

          <div className="mt-8 space-y-5">
            <div className="space-y-2">
              <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Distinct ID</h4>
              <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A unique string to represent a user (email, phone, UUID, etc.). Every distinct ID creates a separate
                profile.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Profile Data Rules</h4>
              <ul className={`list-disc space-y-1 pl-6 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Must be flat object</li>
                <li>Nested objects are ignored</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Example <span className="ml-1 text-green-600">(Valid)</span>
                </h4>
                <CodeBlock code={`{ email: "john@example.com", plan: "pro", age: 27 }`} />
              </div>

              <div className="space-y-2">
                <h4 className={`text-base font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Example <span className="ml-1 text-red-600">(Invalid – nested object ignored)</span>
                </h4>
                <CodeBlock code={`{ address: { city: "Bangalore" } }`} />
              </div>
            </div>
          </div>

          <p className={`mt-6 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            For Standard Profile Fields refer{" "}
            <a
              href="#standard-attributes"
              className="text-orange-600 hover:text-orange-700 underline transition-colors"
            >
              Standard Attributes
            </a>.
          </p>

     
        </div>

        <div id="installation-step-4" className={`scroll-mt-40 ${sectionCardClass}`}>
          <div className="mb-6 flex items-center gap-3">
            <span className={`rounded-full inline-flex h-12 w-12 shrink-0 items-center justify-center border text-xl font-semibold ${badgeClass}`}>
              04
            </span>
            <h3 className={`text-4xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Track events
              </h3>
          </div>
          <div className="my-8">
              <p>
                Use <code>track()</code> to send events to the server.
              </p>
            </div>
            <CodeBlock code={`aixel.track('<event_name>', payload);`} />
            <p className={`my-4 ${subtleTextClass}`}>The payload is an optional object that contains the data to be sent to the server.</p>

          {renderTabbedCode('trackEvents')}

          <p className={`my-4 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>For Standard Event names refer Standard Events in <a href="#standard-attributes" className="text-orange-600 hover:text-orange-700 underline transition-colors">Standard Attributes</a>. You can also use custom event names with corresponding payloads.</p>
          <CodeBlock code={`window.aixel.track('<custom-event-name>', payload_object);`} />
        </div>
      </div>
    </DocSection>
  )
}