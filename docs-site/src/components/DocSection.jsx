export default function DocSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-40 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  )
}
