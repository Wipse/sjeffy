/**
 * Page type based on Sanity schema
 */
export interface Page {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
}
