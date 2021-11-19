import { App } from '../data/apps'
import { Category } from '../data/categories'

export function filterApps(
  apps: App[],
  category: Category | null,
  sortBy: Sort
) {
  return sort(sortBy, category ? filterByCategory(category, apps) : apps)
}

function filterByCategory(category: Category, apps: App[]) {
  return apps.filter((app) => app.category === category.id)
}

function sort(sortBy: Sort, apps: App[]) {
  switch (sortBy) {
    case Sort.price:
      return apps.sort((a, b) => a.price - b.price)
    case Sort.release:
      return apps.sort((a, b) => a.release.localeCompare(b.release))
    default:
      return apps
  }
}

export enum Sort {
  'price',
  'release',
}
