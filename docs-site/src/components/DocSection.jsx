export default function DocSection({ id, title, children }) {
  return (
    <section id={id} className="mb-16">
      <h2 className="doc-section-title mb-4 text-base font-semibold text-gray-900">{title}</h2>
      {children}
    </section>
  )
}
