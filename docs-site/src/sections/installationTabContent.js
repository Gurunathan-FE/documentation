export const FRAMEWORK_TABS = ['HTML', 'React', 'Angular', 'Next.js']

export const INSTALLATION_TAB_CONTENT = {
  createPixelFile: {
    HTML: `// pixel.js

function trackEvent(event_name, event_data) {
  var aixel = window.aixel;
  if (!aixel) return;

  if (typeof aixel.track === 'function') {
    aixel.track(event_name, event_data);
  } else if (Array.isArray(aixel) && typeof aixel.push === 'function') {
    aixel.push(['track', event_name, event_data]);
  }
}

function identify(distinct_id, identify_data) {
  window.aixel.identify(distinct_id, identify_data);
}
`,
    React: `// src/aixel/pixel.ts

type AixelWindow = Window & {
  aixel?: {
    track?: (event: string, properties?: Record<string, unknown>) => void,
    identify?: (id: string, properties?: Record<string, unknown>) => void,
  }
}

export function trackEvent(name = 'page_view',
  properties?: Record<string, unknown>,
) {
  const ax = (window as AixelWindow).aixel
  ax?.track?.(name, properties)
}

export function identify(
  properties?: Record<string, string>,
) {
  const ax = (window as AixelWindow).aixel
  var id:string = properties?.email || properties?.phone || '';
  if (id && id.trim() !== '') {
    ax?.identify?.(id.trim(), properties)
    localStorage.setItem('ax_user_unique_id', id.trim())
  } else {
    console.error('No id found')
  }
}
`,
    Angular: `// src/app/services/aixel.service.ts

type AixelWindow = Window & {
  aixel?: {
    track?: (event: string, properties?: Record<string, unknown>) => void,
    identify?: (id: string, properties?: Record<string, unknown>) => void,
  }
}

export function trackEvent(
  name = 'page_view',
  properties?: Record<string, unknown>,
) {
  const ax = (window as AixelWindow).aixel
  ax?.track?.(name, properties)
}

export function identify(
  properties?: Record<string, string>,
) {
  const ax = (window as AixelWindow).aixel
  let id:string = properties?.['email'] || properties?.['phone'] || properties?.['user_id'] || '';
  if (id && id.trim() !== '') {
    ax?.identify?.(id.trim(), properties)
    localStorage.setItem('ax_user_unique_id', id.trim())
  } else {
    throw new Error('Email or phone is required');
  }
}
`,
    'Next.js': `// src/lib/pixel.ts

declare global {
  interface Window {
    aixel?: {
      identify: (id: string, properties?: Record<string, unknown>) => void;
      track: (event: string, properties?: Record<string, unknown>) => void;
    };
  }
}

export function trackEvent(
  name = 'page_view',
  properties?: Record<string, unknown>,
) {
  const ax = window.aixel
  ax?.track?.(name, properties)
}

export function identify(
  properties?: Record<string, string>,
) {
  const ax = window.aixel
  var id:string = properties?.email || properties?.phone || '';
  if (id && id.trim() !== '') {
    ax?.identify?.(id.trim(), properties)
    localStorage.setItem('ax_user_unique_id', id.trim())
  } else {
    throw new Error('Email or phone is required to identify the user');
  }
}
`,
  },
  createProfile: {
    HTML: `aixel.identify('distinct_id', {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  phone: '1234567890'
});    `,
    React: `import { identify } from '../aixel/pixel'

function handleCreateAccount() {
    if (!email.trim() || !firstName.trim() || !lastName.trim()) return

    identify({
      email: email.trim(),
      first_name: firstName.trim(),
      last_name: lastName.trim(),
    })
  }    `,
    Angular: `import { identify } from './aixel.service';

signup(
  first_name: string, 
  last_name: string, 
  email: string, 
  password: string): string | null 
{
// Here you can add other signup function logic as needed
identify({ email: email, first_name: first_name, last_name: last_name });
}
    `,
    "Next.js": `import { identify } from "@/lib/pixel";

function onSubmit(e: FormEvent) {
  //code to handle the form submission
  identify({ email, name });
  //code to handle the form submission
}`,
  },
  trackEvents: {
    HTML: `//track the book_appointment event

aixel.track('book_appointment', {
  name: document.getElementById('booking-name').value,
  phone: document.getElementById('booking-phone').value,
  email: document.getElementById('booking-email').value,
  date: document.getElementById('booking-date').value,
  time: document.getElementById('booking-time').value
});`,
    React: `//track the add_to_cart event

import { trackEvent } from '../aixel/pixel'

function handleAddToCart() {
  trackEvent('add_to_cart', { product_id: 123, product_name: 'Product Name', product_price: 100 });
}`,

Angular: `//track the add_to_cart event

import { trackEvent } from './aixel.service';

addToCart(shirt: Shirt): void {
    trackEvent('add_to_cart', { product_id: shirt.id, product_name: shirt.name, 
  }`,

  "Next.js": `//track the add_to_cart event
  
import { trackEvent } from "@/lib/pixel";

const handleAdd = () => {
  //code to add the product to the cart
  trackEvent("add_to_cart", {
    product_id: product.id,
    product_name: product.name,
  });
};`,
},
}

export function getInstallationTabCode(stepKey, framework) {
  const stepMap = INSTALLATION_TAB_CONTENT[stepKey] || {}
  return (
    stepMap[framework] ||
    `// Add ${stepKey} example for ${framework} here.`
  )
}
