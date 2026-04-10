import CodeBlock from '../components/CodeBlock'
import DocSection from '../components/DocSection'

export default function ReactInstallation() {
  return (
    <DocSection id="react-installation" title="React Installation">
      <div className="space-y-8">
        <div id="react-step-1" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step 1: Copy and add the script</h3>
          <p className="text-base text-slate-700">Copy this script and place it in the head of the index.html in your project.</p>
          <img src="./install.png" alt="Install the script" />
        </div>

        <div id="react-step-2" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step 2: Create a script to track events</h3>
          <p className="text-base text-slate-700">Create a new folder within the <code>src</code> directory to organize your tracking functions.</p>
     
          <h3 className="mt-5 text-base font-semibold text-slate-900">Example</h3>
          <div className="bg-red-100 text-yellow-800 p-1 px-2 rounded break-words mb-4 font-mono">
          {'src > aixel > pixel.ts'}
          </div>

          <h3 className="mt-5 text-base font-semibold text-slate-900">pixel.ts</h3>
          <CodeBlock
            code={`type AixelWindow = Window & {
  aixel?: { 
    track?: (event: string, properties?: Record<string, unknown>) => void,
    identify?: (id: string, properties?: Record<string, unknown>) => void,
  }
}
  //helper function to create a distinctId for the user profile
function generateClientId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function ensureClientId() {
  var clientId = localStorage.getItem('ai-xel-client-id');
  if (! clientId || clientId.trim() === '') {
      clientId = generateClientId();
      localStorage.setItem('ai-xel-client-id', clientId);
  }
  localStorage.setItem('ax_client_id', clientId);
  return clientId;
}

function getDistinctId() {
  var uniqueId = localStorage.getItem('ax_user_unique_id');
  if (uniqueId && uniqueId.trim() !== '') 
      return uniqueId.trim();
  
  var email = localStorage.getItem('ax_user_email');
  if (email && email.trim() !== '') 
      return email.trim();

  var phone = localStorage.getItem('ax_user_phone');
  if (phone && phone.trim() !== '') 
      return phone.trim();

  ensureClientId();
  var clientId = localStorage.getItem('ai-xel-client-id');
  if (clientId && clientId.trim() !== '') 
      return clientId.trim();

  return null;
}

//to track the events
export function trackEvent(
  name = 'page_view',
  properties?: Record<string, unknown>,
) {
  const ax = (window as AixelWindow).aixel
  ax?.track?.(name, properties)
}

//to create the user profile
export function identify(
  properties?: Record<string, string>,
) {
  
  const ax = (window as AixelWindow).aixel
  var id:string = properties?.email || properties?.phone || getDistinctId();
  if(id && id.trim() !== '') {
    ax?.identify?.(id.trim(), properties)
    localStorage.setItem('ax_user_unique_id', id.trim())
  } else {
    var clientId = generateClientId();
    localStorage.setItem('ai-xel-client-id', clientId);
    localStorage.setItem('ax_user_unique_id', clientId);
    ax?.identify?.(clientId, properties)
  }
}
`}
          />
        </div>

        <div id="react-step-3" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step3: Create profile</h3>
          <p className="text-base text-slate-700">Import the <code>identify( )</code> function from the <code>pixel.ts</code> file to create a profile. Pass the payload to the function to create a user profile for event tracking.</p>
          <h3 className="mt-5 text-base font-semibold text-slate-900">Examples:</h3>
          <p className="text-base text-slate-700">In a signup page you can add the identify function to create a profile.</p>

          <CodeBlock
            code={`import { identify } from '../aixel/pixel'

function handleCreateAccount() {
    if (!email.trim() || !firstName.trim() || !lastName.trim()) return

    identify({
      email: email.trim(),
      first_name: firstName.trim(),
      last_name: lastName.trim(),
    })
  }
`}
          />
          <p className="text-base text-slate-700 mb-0">For Standard Profile Fields refer <a href="#standard-attributes" className="text-blue-500 hover:text-blue-700">Standard Attributes</a>.</p>
        </div>
       
        <div id="react-step-4" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step 4: Track events</h3>
          <p className="text-base text-slate-700">
            Now track events by importing the <code>trackEvent( )</code> function from the <code>pixel.ts</code> file and send the event name and payload (optional) to track the event.
          </p>
          <h3 className="mt-5 text-base font-semibold text-slate-900">Examples:</h3>



<h3 className="text-base font-semibold text-slate-900">add_to_cart</h3>

<CodeBlock
            code={`import { trackEvent } from '../aixel/pixel';

function handleAddToCart() {
    trackEvent('add_to_cart', {
      book_id: book.id,
      book_title: book.title,
      book_price: book.price,
    })
}`}
          />
<h3 className="mt-5 text-base font-semibold text-slate-900">page_view</h3>
<CodeBlock
            code={`import { trackEvent } from '../aixel/pixel';

function handlePageView() {
    trackEvent('page_view', { path: location.pathname }) //path is an optional payload
}`}
          />


<p className="text-base text-slate-700">For Standard Event names refer Standard Events in <a href="#standard-attributes" className="text-blue-500 hover:text-blue-700">Standard Attributes</a>.</p>
          <p className="text-base text-slate-700">You can also define custom event names with corresponding payloads.</p>
          <CodeBlock code={`window.aixel.track('<custom-event-name>', payload_object);`} />
        </div>
      </div>
    </DocSection>
  )
}
