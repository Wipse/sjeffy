import type { Page } from './index'

/**
 * Settings type based on Sanity schema
 */
export interface Settings {
  _id: string
  navigationItems: Page[]
}
