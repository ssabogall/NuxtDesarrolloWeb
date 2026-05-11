// author: all of us
// GET /api/transactions
// Devuelve todas las transacciones.
// getTransactions() es auto-importado por Nitro desde server/utils/categoriesData.ts

export default defineEventHandler(() => {
  return getTransactions()
})
