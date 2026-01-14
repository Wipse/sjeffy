import type { Recipe } from '../types'
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
    "mainImageUrl": mainImage.asset->url,
    "additionalImageUrl": additionalImages.asset->url,
    ingredients,
    rating,
    timeToCook,
    uploadDate,
    categories[]->{
      name,
      slug
    },
    servings,
    servingsType,
    nutrition[]{
      value,
      item->{
        name,
        unit
      }
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
    "mainImageUrl": mainImage.asset->url,
    "additionalImageUrl": additionalImages.asset->url,
    ingredients,
    rating,
    timeToCook,
    uploadDate,
    categories[]->{
      name,
      slug
    },
    servings,
    servingsType,
    nutrition[]{
      value,
      item->{
        name,
        unit
      }
    }
  }`

  return await sanityClient.fetch<Recipe | null>(query, { slug })
}
