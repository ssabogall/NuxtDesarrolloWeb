export type TransactionType = 'income' | 'expense'

export interface TransactionInterface {
  id: number
  name: string
  amount: number
  date: string
  type: TransactionType
  categorySlug: string
}

export interface CategoryInterface {
  id: number
  slug: string
  title: string
  color: string
  type: TransactionType
  description: string
}

export interface TransactionDetailResponse {
  transaction: TransactionInterface
  category: CategoryInterface | undefined
}
