// author: all of us
// Fuente de datos estática para categorías y transacciones.
// Los datos se exponen mediante funciones — Nitro auto-importa funciones
// exportadas desde server/utils/ en todos los handlers sin import explícito.

// ─── Tipos ──────────────────────────────────────────────────────────────────

export type TransactionType = 'income' | 'expense'

export type Transaction = {
  id: number
  name: string          // nombre legible de la transacción (ej: "McDonalds")
  amount: number
  date: string          // ISO 8601 — YYYY-MM-DD
  type: TransactionType
  categorySlug: string  // FK hacia Category.slug
}

export type Category = {
  id: number
  slug: string          // identificador URL-safe (ej: "food-dining")
  title: string         // nombre legible de la categoría
  color: string         // hex — usado en el badge visual
  type: TransactionType
  description: string
}

// ─── Datos internos (no exportados directamente) ────────────────────────────

const _categories: readonly Category[] = [
  {
    id: 1,
    slug: 'food-dining',
    title: 'Food & Dining',
    color: '#e67e22',
    type: 'expense',
    description:
      'Restaurants, groceries, coffee shops, and every meal that hits your budget.',
  },
  {
    id: 2,
    slug: 'salary',
    title: 'Salary',
    color: '#1fa971',
    type: 'income',
    description:
      'Monthly or bi-weekly payroll deposits from your primary employer.',
  },
  {
    id: 3,
    slug: 'transport',
    title: 'Transport',
    color: '#2980b9',
    type: 'expense',
    description:
      'Fuel, public transit, ride-hailing, tolls, and vehicle maintenance.',
  },
  {
    id: 4,
    slug: 'freelance',
    title: 'Freelance',
    color: '#8e44ad',
    type: 'income',
    description:
      'One-off or recurring payments from independent work and consulting.',
  },
  {
    id: 5,
    slug: 'subscriptions',
    title: 'Subscriptions',
    color: '#c0392b',
    type: 'expense',
    description:
      'Streaming services, SaaS tools, gym memberships, and recurring charges.',
  },
] as const

const _transactions: readonly Transaction[] = [
  // Food & Dining
  { id: 1,  name: 'McDonalds',             amount: 18.50,   date: '2025-05-01', type: 'expense', categorySlug: 'food-dining' },
  { id: 2,  name: 'Weekly grocery run',    amount: 94.30,   date: '2025-05-03', type: 'expense', categorySlug: 'food-dining' },
  { id: 3,  name: 'Starbucks',             amount: 6.75,    date: '2025-05-05', type: 'expense', categorySlug: 'food-dining' },
  { id: 4,  name: 'Team dinner',           amount: 210.00,  date: '2025-05-08', type: 'expense', categorySlug: 'food-dining' },
  // Salary
  { id: 5,  name: 'May payroll deposit',   amount: 3200.00, date: '2025-05-01', type: 'income', categorySlug: 'salary' },
  { id: 6,  name: 'Bonus Q1',             amount: 500.00,  date: '2025-05-15', type: 'income', categorySlug: 'salary' },
  // Transport
  { id: 7,  name: 'Monthly metro pass',   amount: 45.00,   date: '2025-05-01', type: 'expense', categorySlug: 'transport' },
  { id: 8,  name: 'Uber airport pickup',  amount: 32.40,   date: '2025-05-10', type: 'expense', categorySlug: 'transport' },
  { id: 9,  name: 'Gas station fill-up',  amount: 58.90,   date: '2025-05-14', type: 'expense', categorySlug: 'transport' },
  // Freelance
  { id: 10, name: 'Logo design Client A', amount: 450.00,  date: '2025-05-04', type: 'income', categorySlug: 'freelance' },
  { id: 11, name: 'Web audit Client B',   amount: 300.00,  date: '2025-05-12', type: 'income', categorySlug: 'freelance' },
  // Subscriptions
  { id: 12, name: 'Netflix',              amount: 15.99,   date: '2025-05-02', type: 'expense', categorySlug: 'subscriptions' },
  { id: 13, name: 'Spotify',              amount: 9.99,    date: '2025-05-02', type: 'expense', categorySlug: 'subscriptions' },
  { id: 14, name: 'GitHub Pro',           amount: 4.00,    date: '2025-05-02', type: 'expense', categorySlug: 'subscriptions' },
  { id: 15, name: 'Adobe Creative Cloud', amount: 54.99,   date: '2025-05-05', type: 'expense', categorySlug: 'subscriptions' },
] as const

// ─── Funciones helper — Nitro las auto-importa en server/api/ ───────────────

export function getCategories(): readonly Category[] {
  return _categories
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return _categories.find((c) => c.slug === slug)
}

export function getTransactions(): readonly Transaction[] {
  return _transactions
}

export function getTransactionById(id: number): Transaction | undefined {
  return _transactions.find((t) => t.id === id)
}

export function getTransactionsBySlug(slug: string): readonly Transaction[] {
  return _transactions.filter((t) => t.categorySlug === slug)
}
