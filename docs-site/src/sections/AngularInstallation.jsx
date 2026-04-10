import CodeBlock from '../components/CodeBlock'
import DocSection from '../components/DocSection'

export default function AngularInstallation() {
  return (
    <DocSection id="angular-installation" title="Angular Installation">
   <div className="space-y-8">
        <div id="angular-step-1" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step 1: Copy and add the script</h3>
          <p className="text-base text-slate-700">Copy this script and place it in the head of the index.html in your project.</p>
          <img src="./install.png" alt="Install the script" />
        </div>

        <div id="angular-step-2" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step 2: Create a service</h3>
          <p className="text-base text-slate-700 mb-2">Create a service and add the below scripts to track events and identify the user.</p>

          <h3 className="text-base font-semibold text-slate-900">aixel.service.ts</h3>
          <CodeBlock code={`import { Injectable } from '@angular/core';
          import aixel from '@aixel/pixel';
          
          @Injectable({
            providedIn: 'root'
          })
  
  function ensureClientId() {
    let clientId = localStorage.getItem('ai-xel-client-id');
    if (! clientId || clientId.trim() === '') {
        clientId = generateClientId();
        localStorage.setItem('ai-xel-client-id', clientId);
    }
    localStorage.setItem('ax_client_id', clientId);
    return clientId;
  }
  
  function getDistinctId() {
    let uniqueId = localStorage.getItem('ax_user_unique_id');
    if (uniqueId && uniqueId.trim() !== '') 
        return uniqueId.trim();
    
  
    let email = localStorage.getItem('ax_user_email');
    if (email && email.trim() !== '') 
        return email.trim();
    
  
    let phone = localStorage.getItem('ax_user_phone');
    if (phone && phone.trim() !== '') 
        return phone.trim();
    
  
    ensureClientId();
    let clientId = localStorage.getItem('ai-xel-client-id');
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
    let id:string = properties?.['email'] || properties?.['phone'] || getDistinctId()!;
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
  `}/>  
        </div>


        <div id="angular-step-3" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step 3: Create profile</h3>
          <p className="text-base text-slate-700 mb-2">Import the <code>identify( )</code> function from the <code>aixel.service</code> to create a profile. Pass the payload to the function to create a user profile for event tracking.</p>

          <h3 className="text-base font-semibold text-slate-900">Example:</h3>
          <p className="text-base text-slate-700">In a signup page you can add the identify function to create a profile.</p>
          <CodeBlock code={`import { identify } from './aixel.service';

signup(first_name: string, last_name: string, email: string, password: string): string | null {
    const existing = this.users().find((user) => user.email === email);
    if (existing) {
      return 'Email already exists.';
    }

    const newUser: User = { first_name, last_name, email, password };
    const updatedUsers = [...this.users(), newUser];
    this.users.set(updatedUsers);
    localStorage.setItem(this.usersKey, JSON.stringify(updatedUsers));
    this.currentUser.set(newUser);
    localStorage.setItem(this.activeUserKey, JSON.stringify(newUser));

    identify({ email: email, first_name: first_name, last_name: last_name });

    return null;
  }
`}/>
<p className="text-base text-slate-700 mb-0">For Standard Profile Fields refer <a href="#standard-attributes" className="text-blue-500 hover:text-blue-700">Standard Attributes</a>.</p>
        </div>

        <div id="angular-step-4" className="scroll-mt-40 space-y-3">
          <h3 className="mt-5 text-base font-semibold text-slate-900">Step 4: Track events</h3>
          <p className="text-base text-slate-700 mb-2">Now track events by importing the <code>trackEvent( )</code> function from the <code>aixel.service</code> and send the event name and payload (optional) to track the event.</p>
          <h3 className="text-base font-semibold text-slate-900">Examples:</h3>
          <h3 className="text-base font-semibold text-slate-900">page_view</h3>
          <CodeBlock code={`import { trackEvent } from './aixel.service';

ngOnInit(): void {
    trackEvent('page_view', { page: '/shop' });
  }
`}/>
          <h3 className="text-base font-semibold text-slate-900">add_to_cart</h3>
          <CodeBlock code={`import { trackEvent } from './aixel.service';

addToCart(shirt: Shirt): void {
    trackEvent('add_to_cart', { product_id: shirt.id, product_name: shirt.name, product_price: shirt.price });
    this.cartService.addToCart(shirt);
  }
`}/>

<p className="mb-2 text-base text-slate-700 mb-0">For Standard Event names refer Standard Events in <a href="#standard-attributes" className="text-blue-500 hover:text-blue-700">Standard Attributes</a>.</p>
          <p className="text-base text-slate-700">You can also define custom event names with corresponding payloads.</p>
          <CodeBlock code={`window.aixel.track('<custom-event-name>', payload_object);`} />
        </div>
      </div>
    </DocSection>
  )
}
