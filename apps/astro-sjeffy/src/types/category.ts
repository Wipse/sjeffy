/**
 * Category type based on Sanity schema
 */
export interface Category {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  imageUrl?: string
}
