import CodeBlock from '../../components/CodeBlock'
import InstallationStep from '../components/InstallationStep'

export const subsectionMeta = {
  id: 'installation-step-1',
  label: 'Add the script',
}

const BOOTSTRAP_SCRIPT = `<script type="text/javascript">
!function(){"use strict";!function(t,e){if(!e.__aixelVersion){"events,identify,onLoad".split(",").forEach(function(t){var i,n,a;i=e,2===(a=(n=t).split(".")).length&&(i=i[a[0]],n=a[1]),i[n]=function(){i.push([n].concat(Array.prototype.slice.call(arguments,0)))}}),window.aixel=e,e.__aixelVersion="0.0.1",e.init=function(i,n){e.push(["init",i,n]);var a=t.createElement("script");a.type="text/javascript",a.async=!0,a.src="//d3lwdfc3pm008a.cloudfront.net/web.js";var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)}}}(document,window.aixel||[])}();
window.aixel.init('<api-key>', {
	apiHost: 'https://data-log.aixel.io',
})
</script>`

export default function AddScript({ isDarkMode, styles }) {
  return (
    <InstallationStep
      id={subsectionMeta.id}
      step="01"
      title={subsectionMeta.label}
      isDarkMode={isDarkMode}
      styles={styles}
    >
      <div className="my-8">
        <p>
          Copy and paste the bootstrap snippet into your application's root file (where your app is initialized). Your API key can be found in your Aixel account under <span className={`font-regular ${isDarkMode ? 'text-orange-300' : 'text-orange-600'}`}>Settings &gt; API Keys</span>.
        </p><br />
        <p>
          Alternatively, you can obtain the script pre-filled with your API key from the sidebar in Aixel by navigating to <span className={`font-regular ${isDarkMode ? 'text-orange-300' : 'text-orange-600'}`}>Integrations &gt; Sources &gt; Data Sources &gt; Website</span>.
        </p>
         
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="space-y-3">
          <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            Placement by framework
          </p>

          <div className={`border p-3 rounded-lg border-l-4 border-b-4 ${styles.item}`}>
            <span className={`mb-2 inline-block border rounded-sm px-2 py-0.5 text-xs font-semibold ${styles.tag}`}>
              HTML
            </span>
            <p className={`text-sm ${styles.mutedText}`}>
              Add directly in <code>&lt;head&gt;</code> or from a shared file like <code>pixel.js</code>.
            </p>
          </div>

          <div className={`border p-3 rounded-lg border-l-4 border-b-4 ${styles.item}`}>
            <span className={`mb-2 inline-block border rounded-sm px-2 py-0.5 text-xs font-semibold ${styles.tag}`}>
              React / Angular
            </span>
            <p className={`text-sm ${styles.mutedText}`}>
              Add the snippet in <code>index.html</code>, inside the <code>&lt;head&gt;</code> tag.
            </p>
          </div>

          <div className={`border p-3 rounded-lg border-l-4 border-b-4 ${styles.item}`}>
            <span className={`mb-2 inline-block border rounded-sm px-2 py-0.5 text-xs font-semibold ${styles.tag}`}>
              Next.js
            </span>
            <p className={`text-sm ${styles.mutedText}`}>
              In <code>layout.tsx</code>, define <code>AIXEL_BOOTSTRAP</code> and inject it via Next&apos;s <code>&lt;Script /&gt;</code> so it runs globally.
            </p>
          </div>
        </div>

        <CodeBlock
          language="Script"
          highlightText="'<api-key>'"
          highlightClassName="text-red-500"
          code={BOOTSTRAP_SCRIPT}
        />
      </div>
    </InstallationStep>
  )
}
