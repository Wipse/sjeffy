import type { Settings } from '../types'
import { sanityClient } from 'sanity:client'

/**
 * Haal de Settings op vanuit Sanity
 */
export async function getSettings(): Promise<Settings> {
  const query = `*[_type == "headerSettings"][0]{
    _id,
    navigationItems[]->{
      _id,
      name,
      slug,
      description
    }
  }`

  return await sanityClient.fetch<Settings>(query)
}
