export type TransactionType = 'income' | 'expense'

export interface CategoryInterface {
  id: number
  slug: string
  title: string
  color: string
  type: TransactionType
  description: string
}
