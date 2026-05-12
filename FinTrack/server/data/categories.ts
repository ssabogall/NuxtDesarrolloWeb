import type { CategoryInterface } from '../interfaces/category'

export const categories: CategoryInterface[] = [
  {
    id: 1,
    slug: 'food-dining',
    title: 'Food & Dining',
    color: '#e67e22',
    type: 'expense',
    description: 'Restaurants, groceries, coffee shops, and every meal that hits your budget.',
  },
  {
    id: 2,
    slug: 'salary',
    title: 'Salary',
    color: '#1fa971',
    type: 'income',
    description: 'Monthly or bi-weekly payroll deposits from your primary employer.',
  },
  {
    id: 3,
    slug: 'transport',
    title: 'Transport',
    color: '#2980b9',
    type: 'expense',
    description: 'Fuel, public transit, ride-hailing, tolls, and vehicle maintenance.',
  },
  {
    id: 4,
    slug: 'freelance',
    title: 'Freelance',
    color: '#8e44ad',
    type: 'income',
    description: 'One-off or recurring payments from independent work and consulting.',
  },
  {
    id: 5,
    slug: 'subscriptions',
    title: 'Subscriptions',
    color: '#c0392b',
    type: 'expense',
    description: 'Streaming services, SaaS tools, gym memberships, and recurring charges.',
  },
]
