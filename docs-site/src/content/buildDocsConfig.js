export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function resolvePageSlug(meta, sectionSlug) {
  if (meta.slug) return meta.slug
  return slugify(meta.label ?? meta.id)
}

function buildPagePath(sectionSlug, pageSlug) {
  return `/${sectionSlug}/${pageSlug}`
}

function buildSectionPath(sectionSlug) {
  return `/${sectionSlug}`
}

export function buildDocsConfig(sections) {
  const orderedSections = [...sections].sort((a, b) => a.order - b.order)

  const docSections = orderedSections.map((section, sectionIndex) => {
    const sectionSlug = section.slug ?? slugify(section.id)
    const pages = (section.pages ?? []).map((page, pageIndex) => {
      const pageSlug = resolvePageSlug(page.meta, sectionSlug)

      return {
        id: page.meta.id,
        slug: pageSlug,
        title: page.meta.title ?? page.meta.label,
        label: page.meta.label,
        description: page.meta.description ?? '',
        icon: page.meta.icon ?? '',
        order: page.meta.order ?? pageIndex + 1,
        sectionId: section.id,
        sectionSlug,
        sectionTitle: section.title,
        path: buildPagePath(sectionSlug, pageSlug),
        Component: page.Component,
      }
    })

    return {
      id: section.id,
      slug: sectionSlug,
      title: section.title,
      description: section.description ?? '',
      order: section.order ?? sectionIndex + 1,
      path: buildSectionPath(sectionSlug),
      Overview: section.Overview,
      pages,
    }
  })

  const docGroups = docSections.map((section) => ({
    id: section.id,
    slug: section.slug,
    label: section.title,
    path: section.path,
    description: section.description,
    children: section.pages.map(({ id, slug, label, path, description }) => ({
      id,
      slug,
      label,
      path,
      description,
    })),
  }))

  const routes = [
    ...docSections.map((section) => ({
      type: 'overview',
      path: section.path,
      section,
    })),
    ...docSections.flatMap((section) =>
      section.pages.map((page) => ({
        type: 'page',
        path: page.path,
        section,
        page,
      })),
    ),
  ]

  const pathToRoute = Object.fromEntries(routes.map((route) => [route.path, route]))

  const flatNav = docSections.flatMap((section) => [
    {
      type: 'overview',
      path: section.path,
      title: section.title,
      label: section.title,
      sectionId: section.id,
      sectionSlug: section.slug,
      sectionTitle: section.title,
    },
    ...section.pages.map((page) => ({
      type: 'page',
      path: page.path,
      title: page.title,
      label: page.label,
      sectionId: section.id,
      sectionSlug: section.slug,
      sectionTitle: section.title,
      pageId: page.id,
    })),
  ])

  const idToPath = Object.fromEntries([
    ...docSections.map((section) => [section.id, section.path]),
    ...docSections.flatMap((section) => section.pages.map((page) => [page.id, page.path])),
  ])

  const searchIndex = flatNav.map((item) => ({
    id: item.type === 'overview' ? item.sectionId : item.pageId,
    title: item.label,
    section: item.sectionTitle,
    path: item.path,
    body: '',
    keywords: [],
  }))

  return {
    docSections,
    docGroups,
    routes,
    pathToRoute,
    flatNav,
    idToPath,
    searchIndex,
    defaultPath: docSections[0]?.path ?? '/',
  }
}

export function getAdjacentNavItems(flatNav, currentPath) {
  const index = flatNav.findIndex((item) => item.path === currentPath)
  if (index === -1) return { previous: null, next: null }

  return {
    previous: index > 0 ? flatNav[index - 1] : null,
    next: index < flatNav.length - 1 ? flatNav[index + 1] : null,
  }
}

export function getBreadcrumbs(route) {
  if (!route) return []

  if (route.type === 'overview') {
    return []
  }

  return [{ label: route.section.title, path: route.section.path }]
}
