import { categoryType } from './categoryType'
import { nutritionItemType } from './settings/nutritionItemType'
import { nutritionValueType } from './settings/nutritionValueType'
import { recipeType } from './recipeType'
import { headerSettingsType } from './settings/headerSettingsType'
import { footerSettingsType } from './settings/footerSettingsType'
import { pageType } from './pageType'

export const schemaTypes = [
  recipeType,
  categoryType,
  pageType,
  nutritionItemType,
  nutritionValueType,
  headerSettingsType,
  footerSettingsType,
]
