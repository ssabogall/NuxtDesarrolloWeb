// author: all of us
// GET /api/transactions/:id
// Devuelve el detalle de una transacción y la categoría a la que pertenece.
// getTransactionById() y getCategoryBySlug() son auto-importados por Nitro
// desde server/utils/categoriesData.ts

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid transaction id' })
  }

  const transaction = getTransactionById(id)

  if (!transaction) {
    throw createError({ statusCode: 404, statusMessage: 'Transaction not found' })
  }

  // Enriquecemos la respuesta con la categoría a la que pertenece
  const category = getCategoryBySlug(transaction.categorySlug)

  return { transaction, category }
})
