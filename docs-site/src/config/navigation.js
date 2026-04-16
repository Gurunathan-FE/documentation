export const navSections = [
  {
    id: 'standard-attributes',
    label: 'Standard Attributes',
    children: [
      { id: 'standard-profile-fields', label: 'Standard Profile Fields' },
      { id: 'standard-events', label: 'Standard Events' },
    ],
  },
]

export const stepsToInstall = [
  {
    id: 'Installation',
    label: 'Installation',
    children: [
      { id: 'installation-step-1', label: 'Add the script' },
      { id: 'installation-step-2', label: 'Create a pixel file' },
      { id: 'installation-step-3', label: 'Create profile' },
      { id: 'installation-step-4', label: 'Track events' },
    ],
  },
]

export const gettingStartedSections = navSections.filter(
  (section) => section.id === 'standard-attributes',
)
