export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid category id' })
  }

  const category = getCategoryById(id)

  if (!category) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found' })
  }

  const transactions = getTransactionsByCategoryId(id)

  return { category, transactions }
})
