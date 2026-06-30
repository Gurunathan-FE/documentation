import { BRAND_ICONS } from '../../assets/brands'
import * as FiIcons from 'react-icons/fi'
import * as LuIcons from 'react-icons/lu'

const REACT_ICON_LIBRARIES = {
  Fi: FiIcons,
  Lu: LuIcons,
}

function resolveReactIcon(name) {
  const prefix = Object.keys(REACT_ICON_LIBRARIES).find((libraryPrefix) =>
    name.startsWith(libraryPrefix),
  )

  if (!prefix) return null

  return REACT_ICON_LIBRARIES[prefix][name] ?? null
}

export default function DocIcon({ name, className = 'h-8 w-8', isDarkMode = false }) {
  if (!name) return null

  const brandSrc = BRAND_ICONS[name]
  if (brandSrc) {
    return <img src={brandSrc} alt="" className={`shrink-0 ${className}`} aria-hidden="true" />
  }

  const IconComponent = resolveReactIcon(name)
  if (!IconComponent) return null

  const colorClass = isDarkMode ? 'text-gray-300' : 'text-gray-600'

  return <IconComponent className={`shrink-0 ${className} ${colorClass}`} aria-hidden="true" />
}
