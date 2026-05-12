import { categories } from '../../data/categories'
import { transactions } from '../../data/transactions'

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid category id' })
  }

  const category = categories.find((c) => c.id === id)

  if (!category) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found' })
  }

  const categoryTransactions = transactions.filter(
    (t) => t.categorySlug === category.slug
  )

  return { category, transactions: categoryTransactions }
})
