import type { Category } from './category'

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
  imageUrl?: string
  ingredients?: string[]
  rating?: number
  timeToCook?: number
  uploadDate: string
  categories?: Category[]
}

/**
 * Props for Recipe Card components
 */
export interface RecipeCardProps {
  title: string
  description: string
  image: string
  link: string
  rating?: number
  timeToCook?: number
  categories?: Category[]
}
