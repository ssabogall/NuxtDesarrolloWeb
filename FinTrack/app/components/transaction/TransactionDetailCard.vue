<script setup lang="ts">
import type { TransactionDTO } from '~/types/transaction'

interface Props {
  transaction: TransactionDTO
  formattedAmount: string
  formattedDate: string
  amountSign: string
  isIncome: boolean
}

defineProps<Props>()
</script>

<template>
  <header class="detail-card">
    <p class="mb-4 meta-line">
      <span
        class="meta-badge"
        :class="isIncome ? 'meta-badge--income' : 'meta-badge--expense'"
      >{{ transaction.type }}</span>
      <span class="meta-date">{{ formattedDate }}</span>
    </p>

    <h1 class="mb-5 transaction-name">{{ transaction.name }}</h1>

    <div class="amount-hero mb-5" aria-label="Transaction amount">
      <span
        class="amount-sign"
        :class="isIncome ? 'amount--income' : 'amount--expense'"
        aria-hidden="true"
      >{{ amountSign }}</span>
      <span
        class="amount-value"
        :class="isIncome ? 'amount--income' : 'amount--expense'"
      >{{ formattedAmount }}</span>
    </div>

    <div class="accent-rule" aria-hidden="true" />
  </header>
</template>

<style scoped>
.detail-card {
  --ft-navy: #0b2c3d;
  --ft-accent: #1fa971;
}

.meta-line {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.meta-badge {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
}

.meta-badge--income  { background: #1fa971; }
.meta-badge--expense { background: #c0392b; }

.meta-date {
  color: rgb(11 44 61 / 0.42);
  font-size: clamp(0.85rem, 0.5vw + 0.72rem, 0.95rem);
  letter-spacing: 0.03em;
}

.transaction-name {
  color: var(--ft-navy);
  font-weight: 600;
  letter-spacing: -0.035em;
  font-size: clamp(1.75rem, 2.5vw + 0.9rem, 2.875rem);
  line-height: 1.17;
}

.amount-hero {
  display: flex;
  align-items: baseline;
  gap: 0.08em;
  flex-wrap: wrap;
}

.amount-sign {
  font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  font-weight: 800;
  line-height: 1;
  opacity: 0.5;
}

.amount-value {
  font-size: clamp(3.5rem, 8vw + 1.5rem, 7.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
}

.amount--income  { color: #1fa971; }
.amount--expense { color: #c0392b; }

.accent-rule {
  width: clamp(3rem, 5vw, 4rem);
  height: 4px;
  border-radius: 999px;
  background: var(--ft-accent);
}
</style>
