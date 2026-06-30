export default function DocTable({ columns, rows, isDarkMode }) {
  const bodyClass = `text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`

  return (
    <div
      className={`overflow-x-auto border rounded-lg ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
    >
      <table className="min-w-full text-left text-base">
        <thead className={`${isDarkMode ? 'bg-orange-600' : 'bg-orange-400'} text-white`}>
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className={`divide-y ${isDarkMode ? 'divide-zinc-800 bg-zinc-900' : 'divide-gray-200 bg-white '}`}
        >
          {rows.map((row) => (
            <tr key={row.key}>
              {row.cells.map((cell, index) => (
                <td
                  key={`${row.key}-${index}`}
                  className={`px-4 py-3 ${index === 0 ? `font-medium ${bodyClass}` : bodyClass}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
