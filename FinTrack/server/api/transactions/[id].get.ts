import { transactions } from '../../data/transactions'
import { categories } from '../../data/categories'

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid transaction id' })
  }

  const transaction = transactions.find((t) => t.id === id)

  if (!transaction) {
    throw createError({ statusCode: 404, statusMessage: 'Transaction not found' })
  }

  const category = categories.find((c) => c.slug === transaction.categorySlug)

  return { transaction, category }
})
