// author: all of us
// GET /api/categories
// Devuelve la lista completa de categorías.
// getCategories() es auto-importado por Nitro desde server/utils/categoriesData.ts

export default defineEventHandler(() => {
  return getCategories()
})
