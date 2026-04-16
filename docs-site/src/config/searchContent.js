import { profileFields, standardEvents } from '../sections/StandardAttributes'
import { INSTALLATION_TAB_CONTENT } from '../sections/installationTabContent'

const frameworkOrder = ['HTML', 'React', 'Angular', 'Next.js']

const buildFrameworkCodeBody = (stepKey) =>
  frameworkOrder
    .map((framework) => {
      const code = INSTALLATION_TAB_CONTENT[stepKey]?.[framework]
      return code ? `${framework}\n${code}` : ''
    })
    .filter(Boolean)
    .join('\n\n')

export const searchContent = [
  {
    id: 'standard-attributes',
    title: 'Standard Attributes',
    section: 'Getting Started',
    body: 'Use standard profile fields and event names for consistent analytics and user journeys.',
    keywords: ['attributes', 'analytics', 'journeys'],
  },
  {
    id: 'standard-profile-fields',
    title: 'Standard Profile Fields',
    section: 'Standard Attributes',
    body: profileFields
      .map(([field, description]) => `${field} ${description}`)
      .join(' '),
    keywords: ['profile', 'fields', 'identify', 'user profile'],
  },
  ...profileFields.map(([field, description]) => ({
    id: 'standard-profile-fields',
    title: field,
    section: 'Standard Attributes / Profile Fields',
    body: description,
    keywords: ['profile field', 'identify'],
  })),
  {
    id: 'standard-events',
    title: 'Standard Events',
    section: 'Standard Attributes',
    body: standardEvents
      .map(([eventName, description]) => `${eventName} ${description}`)
      .join(' '),
    keywords: ['events', 'tracking', 'track'],
  },
  ...standardEvents.map(([eventName, description]) => ({
    id: 'standard-events',
    title: eventName,
    section: 'Standard Attributes / Events',
    body: description,
    keywords: ['event', 'track'],
  })),
  {
    id: 'installation-step-1',
    title: 'Add the script',
    section: 'Installation',
    body:
      'Copy and paste the bootstrap snippet into your app root file. HTML uses head or pixel.js. React and Angular use index.html head. Next.js uses layout.tsx with Script and AIXEL_BOOTSTRAP.',
    keywords: ['bootstrap', 'script', 'head', 'layout.tsx', 'index.html', 'pixel.js'],
  },
  {
    id: 'installation-step-2',
    title: 'Create a pixel file',
    section: 'Installation',
    body: `Create a pixel file to track events and identify users. ${buildFrameworkCodeBody(
      'createPixelFile',
    )}`,
    keywords: ['pixel', 'trackEvent', 'identify', 'service', 'pixel.ts'],
  },
  {
    id: 'installation-step-3',
    title: 'Create profile',
    section: 'Installation',
    body: `Use identify() to create and associate events with a specific user. Distinct ID is a unique string like email, phone, or UUID. Profile data must be a flat object and nested objects are ignored. ${buildFrameworkCodeBody(
      'createProfile',
    )}`,
    keywords: ['identify', 'profile', 'distinct id', 'email', 'phone', 'user profile'],
  },
  {
    id: 'installation-step-4',
    title: 'Track events',
    section: 'Installation',
    body: `Use track() to send events to the server. Payload is optional. You can use standard event names or custom event names with payloads. ${buildFrameworkCodeBody(
      'trackEvents',
    )}`,
    keywords: ['track', 'events', 'payload', 'custom event', 'add_to_cart', 'book_appointment'],
  },
]
