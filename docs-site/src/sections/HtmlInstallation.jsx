import CodeBlock from '../components/CodeBlock'
import DocSection from '../components/DocSection'

export default function HtmlInstallation() {
  return (
    <DocSection id="html-installation" title="HTML Installation">
      <div className="space-y-8">
        <div id="html-step-1" className="scroll-mt-40 space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Step 1: Copy and add the script</h3>
          <p className="text-base text-slate-700">
            Copy and add the script in your page head or a shared file like <code>common.js</code>.
          </p>
          <img src="/install.png" alt="HTML Installation Step 1" className="w-full rounded-lg border border-slate-200" />
        </div>

        <div id="html-step-2" className="scroll-mt-40 space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Step 2: Add an event tracker to test</h3>
          <p className="text-base text-slate-700">
            Add the following code to your page or to <code>common.js</code> to validate tracking.
          </p>
          <CodeBlock
            code={`(function autoTrackPageView() {
  function trackPageView() {
    if (window.aixel && typeof window.aixel.track === 'function') {
      window.aixel.track('page_view', {});
    } else {
      console.log('Aixel not initialized');
    }
  }

  function send() {
    trackPageView();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', send);
  } else {
    send();
  }
})();`}
          />
          <p className="text-base text-slate-700">
            Check in the browser Network tab that the event is being sent.
          </p>
        </div>

        <div id="html-step-3" className="scroll-mt-40 space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Step 3: Use identify() to create a user profile</h3>
          <p className="text-base text-slate-700">
            Use <code>identify()</code> to create and associate events with a specific user.
          </p>
          <p className="text-base text-slate-700">
            Events require a user profile to be stored and viewed. The necessary profile details are obtained
            using <code>aixel.identify(&apos;distinct_id&apos;, {'{...}'})</code>.
          </p>
          <p className="text-base text-slate-700">
            This helps in tying sessions, devices, and user journeys together. The payload must be a flat object.
          </p>

          <CodeBlock
            code={`aixel.identify('distinct_id', {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  phone: '1234567890'
});`}
          />

          <img src="/identify.png" alt="HTML Installation Step 3" className="w-full rounded-lg border border-slate-200" />

          <h4 className="text-base font-semibold text-slate-900">Distinct ID</h4>
          <p className="text-base text-slate-700">
            A unique string to represent a user (email, phone, UUID, etc.). Every distinct ID creates a separate
            profile.
          </p>

          <h4 className="text-base font-semibold text-slate-900">Profile Data Rules</h4>
          <ul className="list-disc pl-6 text-base text-slate-700">
            <li>Must be flat object</li>
            <li>Nested objects are ignored</li>
          </ul>

          <h4 className="text-base font-semibold text-slate-900">Example (Valid)</h4>
          <CodeBlock code={`{ email: "john@example.com", plan: "pro", age: 27 }`} />

          <h4 className="text-base font-semibold text-slate-900">Example (Invalid - nested object ignored)</h4>
          <CodeBlock code={`{ address: { city: "Bangalore" } }`} />

          <p className="text-base text-slate-700">For Standard Profile Fields refer <a href="#standard-attributes" className="text-blue-500 hover:text-blue-700">Standard Attributes</a>.</p>

          <h4 className="text-base font-semibold text-slate-900">Contact Form Example</h4>
          <p className="text-base text-slate-700">
            Collect profile data and send identify + track payload from your form.
          </p>
          <CodeBlock
            code={`function getContactFormData() {
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();

  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    distinctId: email || phone || getDistinctId(),
    identifyTraits: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone
    },
    trackPayload: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone
    }
  };
}

function sendContactFormData(formData) {
  var distinctId = formData.distinctId;
  var identifyTraits = formData.identifyTraits;
  var trackPayload = formData.trackPayload;
  var aixel = window.aixel;

  if (!aixel) {
    console.error('Aixel not initialized');
    return;
  }

  try {
    if (typeof aixel.identify === 'function') {
      aixel.identify(distinctId, identifyTraits);
      localStorage.setItem('ax_distinct_id', distinctId);
    }

    if (typeof aixel.track === 'function') {
      aixel.track('contact_submitted', trackPayload);
    } else if (Array.isArray(aixel) && typeof aixel.push === 'function') {
      aixel.push(['track', 'contact_submitted', trackPayload]);
    }
  } catch (err) {
    console.error('Aixel identify/track failed:', err);
  }
}`}
          />

          <CodeBlock
            code={`function generateClientId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function ensureClientId() {
  var clientId = localStorage.getItem('ai-xel-client-id');
  if (!clientId || clientId.trim() === '') {
    clientId = generateClientId();
    localStorage.setItem('ai-xel-client-id', clientId);
  }
  localStorage.setItem('ax_client_id', clientId);
  return clientId;
}

function getDistinctId() {
  var uniqueId = localStorage.getItem('ax_user_unique_id');
  if (uniqueId && uniqueId.trim() !== '') return uniqueId.trim();

  var email = localStorage.getItem('ax_user_email');
  if (email && email.trim() !== '') return email.trim();

  var phone = localStorage.getItem('ax_user_phone');
  if (phone && phone.trim() !== '') return phone.trim();

  ensureClientId();
  var clientId = localStorage.getItem('ai-xel-client-id');
  if (clientId && clientId.trim() !== '') return clientId.trim();

  return null;
}`}
          />
        </div>

        <div id="html-step-4" className="scroll-mt-40 space-y-3">
          <h3 className="text-base font-semibold text-slate-900">Step 4: Track the events</h3>
          <p className="text-base text-slate-700">
            Use <code>aixel.track()</code> to send events.
          </p>
          <CodeBlock code={`aixel.track('<event_name>', { first_name: 'aixel' });`} />

          <h4 className="text-base font-semibold text-slate-900">page_view</h4>
          <CodeBlock
            code={`if (window.aixel && typeof window.aixel.track === 'function') {
  window.aixel.track('page_view', {});
}`}
          />

          <h4 className="text-base font-semibold text-slate-900">book_appointment</h4>
          <CodeBlock
            code={`function trackBookAppointment() {
  if (window.aixel) {
    window.aixel.track('book_appointment', {
      name: document.getElementById('booking-name').value,
      phone: document.getElementById('booking-phone').value,
      email: document.getElementById('booking-email').value,
      date: document.getElementById('booking-date').value,
      time: document.getElementById('booking-time').value
    });
  }
}`}
          />

          <h4 className="text-base font-semibold text-slate-900">contact</h4>
          <CodeBlock
            code={`function trackContact() {
  var trackPayload = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    message: message
  };

  if (window.aixel) {
    window.aixel.track('contact', trackPayload);
  }
}`}
          />

          <p className="text-base text-slate-700">For Standard Event names refer Standard Events in <a href="#standard-attributes" className="text-blue-500 hover:text-blue-700">Standard Attributes</a>.</p>
          <p className="text-base text-slate-700">You can also define custom event names with corresponding payloads.</p>
          <CodeBlock code={`window.aixel.track('<custom-event-name>', payload_object);`} />
        </div>

      </div>
    </DocSection>
  );
}
