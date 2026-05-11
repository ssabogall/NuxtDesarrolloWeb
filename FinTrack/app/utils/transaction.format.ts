// author: all of us
// Utilidades de presentación para el dominio de transacciones.
// Solo transformaciones puras: reciben datos y devuelven strings.
// Sin efectos secundarios, sin estado, sin imports de Vue.

import type { TransactionType } from '~/types/transaction'

/**
 * Formatea un número como moneda colombiana (COP).
 * Ejemplo: 18.5 → "$ 18,50"
 */
export function formatToCOP(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * Devuelve el signo de presentación según el tipo de transacción.
 * income → "+"  |  expense → "−"
 */
export function signPrefix(type: TransactionType): string {
  return type === 'income' ? '+' : '−'
}

/**
 * Formatea una fecha ISO 8601 a formato legible en español.
 * Ejemplo: "2025-05-01" → "1 de mayo de 2025"
 */
export function formatTransactionDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
