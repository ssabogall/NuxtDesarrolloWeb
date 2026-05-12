import type { TransactionType } from '~/types/transaction'

export class Formatters {
  static formatToCOP(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  static signPrefix(type: TransactionType): string {
    return type === 'income' ? '+' : '−'
  }

  static formatDate(isoDate: string): string {
    const [year, month, day] = isoDate.split('-').map(Number)
    return new Date(year, month - 1, day).toLocaleDateString('es-CO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }
}
