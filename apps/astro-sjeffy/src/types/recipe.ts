import type { Category } from './index'
/**
 * Recipe type based on Sanity schema
 */
export interface Recipe {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  mainImageUrl?: string
  additionalImageUrl?: string
  ingredients?: string[]
  rating?: number
  timeToCook?: number
  uploadDate: string
  categories?: Category[]
  servings?: number
  servingsType?: string
  nutrition?: {
    value: number
    item: {
      name: string
      unit: string
    }
  }[]
}
