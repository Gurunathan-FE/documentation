export const navSections = [
  {
    id: 'standard-attributes',
    label: 'Standard Attributes',
    children: [
      { id: 'standard-profile-fields', label: 'Profile Fields' },
      { id: 'standard-events', label: 'Standard Events' },
    ],
  },
  {
    id: 'html-installation',
    label: 'HTML Installation',
    children: [
      { id: 'html-step-1', label: 'Add the script' },
      { id: 'html-step-2', label: 'Add an event tracker to test' },
      { id: 'html-step-3', label: 'Create profile' },
      { id: 'html-step-4', label: 'Track events' },
    ],
  },
  {
    id: 'react-installation',
    label: 'React Installation',
    children: [
      { id: 'react-step-1', label: 'Add the script' },
      { id: 'react-step-2', label: 'Create pixel.ts' },
      { id: 'react-step-3', label: 'Create profile' },
      { id: 'react-step-4', label: 'Track events' },
    ],
  },
  {
    id: 'angular-installation',
    label: 'Angular Installation',
    children: [
      { id: 'angular-step-1', label: 'Add the script' },
      { id: 'angular-step-2', label: 'Create a service' },
      { id: 'angular-step-3', label: 'Create profile' },
      { id: 'angular-step-4', label: 'Track events' },
    ],
  },
  {
    id: 'nextjs-installation',
    label: 'NextJs Installation',
    children: [
      { id: 'nextjs-step-1', label: 'Add the script' },
      { id: 'nextjs-step-2', label: 'Create pixel.ts' },
      { id: 'nextjs-step-3', label: 'Create profile' },
      { id: 'nextjs-step-4', label: 'Track events' },
    ],
  },
]

export const stepsToInstall = [
  {
    id: 'Installation',
    label: 'Installation',
    children: [
      { id: 'installation-step-1', label: 'Add the script' },
      { id: 'installation-step-2', label: 'Create pixel file' },
      { id: 'installation-step-3', label: 'Create profile' },
      { id: 'installation-step-4', label: 'Track events' },
    ],
  },
]

export const gettingStartedSections = navSections.filter(
  (section) => section.id === 'standard-attributes',
)
