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
    topic: 'Budgeting',
    title: 'How to build a monthly budget that actually works',
    summary:
      'A practical budget gives you clarity on income, expenses, and the small adjustments that keep your money aligned with your priorities.',
    bodyParagraphs: [
      'Start with a simple structure: list your recurring income, fixed costs, essential spending, and savings targets. When you categorize payments consistently, you can clearly see where your money is going each month.',
      'Use categories that fit your life, not the other way around. Split expenses into essential, flexible, and discretionary groups so you can reduce or redirect spending without losing control.',
      'Review your plan weekly and adjust it based on real activity. A budget is not a rulebook, it is a living guide that helps you make smarter decisions before the month ends.',
    ],
  },
  {
    id: 2,
    topic: 'Savings',
    title: 'Emergency funds: a simple strategy for uncertain times',
    summary:
      'An emergency fund is the financial cushion that lets you handle surprises without tapping credit or derailing your goals.',
    bodyParagraphs: [
      'Aim for three to six months of essential expenses in a separate savings bucket. Start small if needed, but make the habit automatic by transferring a fixed amount each week or month.',
      'Keep the fund liquid and easy to access, but avoid using it for normal spending. Treat it as a safety buffer so you can handle repairs, medical bills, or temporary income gaps with confidence.',
      'Revisit the target regularly: if your monthly costs change, adjust the amount. A sustainable emergency fund grows with your life, not just with your next paycheck.',
    ],
  },
  {
    id: 3,
    topic: 'Investing',
    title: 'Small investments, big habits: getting started right',
    summary:
      'Consistent small investments can build lasting wealth when you focus on discipline, diversification, and low fees.',
    bodyParagraphs: [
      'You do not need a large balance to begin. Set up recurring contributions to a low-cost index fund or automated investment plan, and let time work for you through compounding.',
      'Diversify across asset classes and avoid chasing the hottest trend. A balanced portfolio is more about steady progress than perfect timing.',
      'Review performance occasionally, but resist the urge to react to every market headline. The best investing habits are patient, persistent, and aligned with your long-term goals.',
    ],
  },
] as const
