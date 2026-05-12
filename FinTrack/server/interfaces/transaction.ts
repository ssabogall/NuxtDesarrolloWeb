import type { TransactionType } from './category'

export interface TransactionInterface {
  id: number
  name: string
  amount: number
  date: string
  type: TransactionType
  categorySlug: string
}
