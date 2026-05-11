// author: all of us
// Composable responsable de obtener y exponer el detalle de una transacción.
// Encapsula: fetch, manejo de error 404, y valores derivados con computed.
// La página solo llama a este composable — no sabe cómo se obtienen los datos.

import type { TransactionDetailResponse } from '~/types/transaction'
import { formatToCOP, signPrefix, formatTransactionDate } from '~/utils/transaction.format'

export function useTransactionDetail(id: ComputedRef<number>) {
  const { data, error } = useFetch<TransactionDetailResponse>(
    () => `/api/transactions/${id.value}`,
  )

  if (error.value) {
    throw createError({ statusCode: 404, statusMessage: 'Transaction not found' })
  }

  // ── Datos base ────────────────────────────────────────────────────────────
  const transaction = computed(() => data.value?.transaction)
  const category    = computed(() => data.value?.category)

  // ── Valores derivados de presentación ────────────────────────────────────
  // Evitan que el template contenga lógica condicional o llamadas a funciones

  const formattedAmount = computed(() =>
    transaction.value ? formatToCOP(transaction.value.amount) : '',
  )

  const formattedDate = computed(() =>
    transaction.value ? formatTransactionDate(transaction.value.date) : '',
  )

  const amountSign = computed(() =>
    transaction.value ? signPrefix(transaction.value.type) : '',
  )

  const isIncome = computed(() => transaction.value?.type === 'income')

  return {
    transaction,
    category,
    formattedAmount,
    formattedDate,
    amountSign,
    isIncome,
  }
}
