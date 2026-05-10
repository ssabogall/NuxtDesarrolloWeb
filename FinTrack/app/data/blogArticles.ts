export type BlogArticle = {
  id: number
  topic: string
  title: string
  summary: string
  bodyParagraphs: string[]
}

export const blogArticles: readonly BlogArticle[] = [
  {
    id: 1,
    topic: 'Categories',
    title:
      'Income/expense categories: the first step before recording transactions',
    summary:
      'Categories tie your movements to their owning user through name, color, and type (income/expense). That keeps your dashboard aligned with the domain model.',
    bodyParagraphs: [
      'In FinTrack every category has an id, name, color, and type, and belongs to a user who owns that data—in the same sense as your class diagram.',
      'Defining categories before you log transactions cuts down unclassified loose descriptions and makes it easier to filter by movement type when you build reports.',
      'Transactions can point to a category or omit one when the model allows it as optional (Category | null), handy for quick adjustments or partial imports.',
    ],
  },
  {
    id: 2,
    topic: 'Transactions',
    title:
      'Transactions linked to categories and goals: how it maps to your data model',
    summary:
      'A transaction stores amount, description, and date; it may tie to a category and, where relevant, to a goal, reflecting the diagram’s relationships.',
    bodyParagraphs: [
      'Transactions are the operational core of the dashboard: each entry has an owning user and may optionally reference a category to separate income and expenses.',
      'When you also reference a goal (Goal | null), movements explicitly feed progress against targetAmount, consistent with currentAmount across the goal’s lifecycle.',
      'This keeps a single input model (transactions) while supporting two analytical views: by category for spending habits and by goal for savings or projects.',
    ],
  },
  {
    id: 3,
    topic: 'Goals',
    title:
      'Financial goals: targetAmount, currentAmount, and the user as aggregate root',
    summary:
      'Goals wrap timeframe, amounts, and status; the user holds categories, transactions, and goals with domain createdAt/updatedAt timestamps.',
    bodyParagraphs: [
      'A goal includes name, description, targetAmount, currentAmount, start and end dates, and a status that reflects whether it is active, paused, or completed in the dashboard.',
      'Progress relies on linked transactions and business rules (for example calculateProgress) that project what share of the target is already covered.',
      'The user acts as the aggregation root: they own lists of categories, goals, and transactions, which avoids cross-talk between profiles in a multi-user app.',
    ],
  },
] as const
