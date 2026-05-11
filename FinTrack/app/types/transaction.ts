// author: all of us
// Interfaces y DTOs del dominio de transacciones.
// Estos tipos son el contrato entre la API y el frontend — si la API
// cambia su forma, este archivo es el único punto de cambio en el cliente.

export type TransactionType = 'income' | 'expense'

// DTO que refleja exactamente lo que devuelve /api/transactions/:id
export interface TransactionDTO {
  id: number
  name: string
  amount: number
  date: string         // ISO 8601 — YYYY-MM-DD
  type: TransactionType
  categorySlug: string
}

// DTO que refleja exactamente lo que devuelve /api/categories/:slug
export interface CategoryDTO {
  id: number
  slug: string
  title: string
  color: string        // hex
  type: TransactionType
  description: string
}

// Respuesta combinada del endpoint /api/transactions/:id
export interface TransactionDetailResponse {
  transaction: TransactionDTO
  category: CategoryDTO | undefined
}
