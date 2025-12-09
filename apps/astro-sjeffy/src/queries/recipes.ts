import type { Recipe } from '../types/recipe'
import { sanityClient } from 'sanity:client'

/**
 * Haal alle recepten op
 */
export async function getAllRecipes(): Promise<Recipe[]> {
  const query = `*[
    _type == "recipe"
    && defined(slug.current)
  ]|order(uploadDate desc){
    _id,
    name,
    slug,
    description,
    "imageUrl": image.asset->url,
    ingredients,
    rating,
    timeToCook,
    uploadDate,
    categories[]->{
      name
    }
  }`

  return await sanityClient.fetch<Recipe[]>(query)
}

/**
 * Haal één recept op basis van slug
 */
export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  const query = `*[
    _type == "recipe"
    && slug.current == $slug
  ][0]{
    _id,
    name,
    slug,
    description,
    "imageUrl": image.asset->url,
    ingredients,
    rating,
    timeToCook,
    uploadDate,
    categories[]->{
      name
    }
  }`

  return await sanityClient.fetch<Recipe | null>(query, { slug })
}
