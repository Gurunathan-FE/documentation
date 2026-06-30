function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function extractContentHeadings(root) {
  if (!root) return []

  const items = []
  const seenIds = new Set()

  root.querySelectorAll('h3, h4').forEach((heading) => {
    if (!heading.id) {
      const base = slugify(heading.textContent ?? 'section')
      let candidate = base
      let index = 2

      while (document.getElementById(candidate) || seenIds.has(candidate)) {
        candidate = `${base}-${index}`
        index += 1
      }

      heading.id = candidate
      heading.classList.add('scroll-mt-32')
    }

    seenIds.add(heading.id)
    items.push({
      id: heading.id,
      label: heading.textContent?.trim() ?? heading.id,
      children: [],
    })
  })

  return items
}

export function flattenPageHeadings(items) {
  return items.flatMap((item) => [item.id, ...item.children.map((child) => child.id)])
}
