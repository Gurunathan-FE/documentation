import { NavLink } from 'react-router-dom'

function SidebarLink({ to, label, isActive, isDarkMode }) {
  const activeClass = isDarkMode
    ? 'bg-orange-500/15 text-orange-300'
    : 'bg-orange-50 text-orange-700'

  const inactiveClass = isDarkMode
    ? 'text-gray-400 hover:bg-zinc-900 hover:text-gray-100'
    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'

  return (
    <NavLink
      to={to}
      className={({ isActive: routeActive }) =>
        `block px-2.5 py-1.5 text-sm transition ${
          routeActive || isActive ? activeClass : inactiveClass
        }`
      }
    >
      {label}
    </NavLink>
  )
}

function SidebarGroup({ group, isDarkMode, activeSectionId, activeChildId }) {
  return (
    <div>
      <h6 className={`mb-2 font-medium ${isDarkMode ? 'text-gray-200' : 'text-black/90'}`}>
        <NavLink
          to={group.path}
          end
          className={({ isActive }) =>
            `transition hover:text-orange-500 ${
              isActive || (activeSectionId === group.id && !activeChildId)
                ? isDarkMode
                  ? 'text-orange-300'
                  : 'text-orange-600'
                : isDarkMode
                  ? 'text-gray-200'
                  : 'text-black/90'
            }`
          }
        >
          {group.label}
        </NavLink>
      </h6>
      <ul className="space-y-1">
        {group.children.map((child) => (
          <li key={child.id}>
            <SidebarLink
              to={child.path}
              label={child.label}
              isActive={activeChildId === child.id}
              isDarkMode={isDarkMode}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DocSidebar({ groups, isDarkMode, activeSectionId, activeChildId }) {
  return (
    <>
      {groups.map((group, index) => (
        <div key={group.id} className={index > 0 ? 'mt-2' : undefined}>
          <SidebarGroup
            group={group}
            isDarkMode={isDarkMode}
            activeSectionId={activeSectionId}
            activeChildId={activeChildId}
          />
        </div>
      ))}
    </>
  )
}
