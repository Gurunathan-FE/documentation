export default function DocSection({ id, title, children }) {
  return (
    <section id={id} className="mb-16">
      <h2 className="doc-section-title mb-8 text-xl font-semibold text-gray-900 border-b border-gray-600 pb-4">{title}</h2>
      {children}
    </section>
  )
}
