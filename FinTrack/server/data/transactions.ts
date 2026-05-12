import type { TransactionInterface } from '../interfaces/transaction'

export const transactions: TransactionInterface[] = [
  { id: 1,  name: 'McDonalds',             amount: 18.50,   date: '2025-05-01', type: 'expense', categorySlug: 'food-dining' },
  { id: 2,  name: 'Weekly grocery run',    amount: 94.30,   date: '2025-05-03', type: 'expense', categorySlug: 'food-dining' },
  { id: 3,  name: 'Starbucks',             amount: 6.75,    date: '2025-05-05', type: 'expense', categorySlug: 'food-dining' },
  { id: 4,  name: 'Team dinner',           amount: 210.00,  date: '2025-05-08', type: 'expense', categorySlug: 'food-dining' },
  { id: 5,  name: 'May payroll deposit',   amount: 3200.00, date: '2025-05-01', type: 'income',  categorySlug: 'salary' },
  { id: 6,  name: 'Bonus Q1',             amount: 500.00,  date: '2025-05-15', type: 'income',  categorySlug: 'salary' },
  { id: 7,  name: 'Monthly metro pass',   amount: 45.00,   date: '2025-05-01', type: 'expense', categorySlug: 'transport' },
  { id: 8,  name: 'Uber airport pickup',  amount: 32.40,   date: '2025-05-10', type: 'expense', categorySlug: 'transport' },
  { id: 9,  name: 'Gas station fill-up',  amount: 58.90,   date: '2025-05-14', type: 'expense', categorySlug: 'transport' },
  { id: 10, name: 'Logo design Client A', amount: 450.00,  date: '2025-05-04', type: 'income',  categorySlug: 'freelance' },
  { id: 11, name: 'Web audit Client B',   amount: 300.00,  date: '2025-05-12', type: 'income',  categorySlug: 'freelance' },
  { id: 12, name: 'Netflix',              amount: 15.99,   date: '2025-05-02', type: 'expense', categorySlug: 'subscriptions' },
  { id: 13, name: 'Spotify',              amount: 9.99,    date: '2025-05-02', type: 'expense', categorySlug: 'subscriptions' },
  { id: 14, name: 'GitHub Pro',           amount: 4.00,    date: '2025-05-02', type: 'expense', categorySlug: 'subscriptions' },
  { id: 15, name: 'Adobe Creative Cloud', amount: 54.99,   date: '2025-05-05', type: 'expense', categorySlug: 'subscriptions' },
]
