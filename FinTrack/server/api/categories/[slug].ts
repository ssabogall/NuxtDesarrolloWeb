// author: all of us
// GET /api/categories/:slug
// Devuelve el detalle de una categoría y sus transacciones asociadas.
// getCategoryBySlug() y getTransactionsBySlug() son auto-importados por Nitro
// desde server/utils/categoriesData.ts — sin import explícito necesario.

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  const category = getCategoryBySlug(slug ?? '')

  if (!category) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found' })
  }

  const transactions = getTransactionsBySlug(slug ?? '')

  return { category, transactions }
})
