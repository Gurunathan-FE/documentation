export default function DocSection({ id, title, children }) {
  return (
    <section id={id} className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  )
}
