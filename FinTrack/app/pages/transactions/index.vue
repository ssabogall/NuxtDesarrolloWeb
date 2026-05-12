<!-- author: all of us -->
<script setup lang="ts">
// useFetch llama a /api/transactions en el servidor durante SSR;
// en cliente reutiliza el payload ya hidratado — sin doble petición.
const { data: transactions } = await useFetch('/api/transactions')

definePageMeta({
  title: 'Transactions',
})

useSeoMeta({
  title: 'Transactions — FinTrack',
  description:
    'Full list of income and expense transactions across all categories.',
})

// Formatea amount como moneda USD — mismo helper que en categories/[slug].vue
const formatAmount = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
</script>

<template>
  <div class="transactions-shell">
    <header class="hero-head mb-4 mb-xl-5">
      <p class="mb-2 mb-md-3 mono-label">Finance</p>
      <h1 class="mb-4 page-title">Transactions</h1>
      <div class="accent-rule" aria-hidden="true" />
      <div class="header-line" />
    </header>

    <ul class="transactions-grid list-unstyled m-0 p-0">
      <li
        v-for="tx in transactions"
        :key="tx.id"
      >
        <NuxtLink
          :to="`/transactions/${tx.id}`"
          class="post-row d-block text-decoration-none py-5"
        >
          <p class="mb-3 topic-line">
            <!-- Badge de tipo de transacción -->
            <span
              class="type-badge"
              :class="tx.type === 'income' ? 'type-badge--income' : 'type-badge--expense'"
            >{{ tx.type }}</span>
            <span class="partition">·</span>
            <span class="tx-date-inline">{{ tx.date }}</span>
          </p>
          <h2 class="post-title fw-semibold mb-3 title-line">{{ tx.name }}</h2>
          <p
            class="mb-0 tx-amount-line"
            :class="tx.type === 'income' ? 'tx-amount--income' : 'tx-amount--expense'"
          >
            {{ tx.type === 'income' ? '+' : '-' }}{{ formatAmount(tx.amount) }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.transactions-shell {
  --ft-navy: #0b2c3d;
  --ft-accent: #1fa971;

  width: 100%;
  max-width: min(75rem, 100%);
  margin-inline: auto;
  padding-inline: 0;
}

.hero-head .page-title {
  font-size: clamp(1.75rem, 2.75vw + 0.85rem, 2.875rem);
  line-height: 1.14;
}

.page-title {
  color: var(--ft-navy);
  font-weight: 600;
  letter-spacing: -0.035em;
}

.mono-label {
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: clamp(0.7rem, 0.85vw + 0.52rem, 0.8125rem);
  font-weight: 600;
  color: var(--ft-accent);
}

.accent-rule {
  width: clamp(3rem, 5vw, 4rem);
  height: 4px;
  border-radius: 999px;
  background: var(--ft-accent);
}

.header-line {
  margin-top: clamp(1.25rem, 2vw, 1.65rem);
  height: 1px;
  background: rgb(11 44 61 / 0.1);
}

.transactions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.topic-line {
  font-size: clamp(0.875rem, 0.5vw + 0.74rem, 1rem);
  color: rgb(11 44 61 / 0.52);
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.type-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
}

.type-badge--income  { background: #1fa971; }
.type-badge--expense { background: #c0392b; }

.partition {
  opacity: 0.5;
  margin: 0 0.25rem;
}

.tx-date-inline {
  font-size: clamp(0.8rem, 0.5vw + 0.68rem, 0.9rem);
  color: rgb(11 44 61 / 0.42);
}

.post-title {
  font-size: clamp(1.2rem, 1.55vw + 0.76rem, 1.5625rem);
  line-height: 1.3;
}

.title-line {
  color: var(--ft-navy);
  letter-spacing: -0.022em;
  transition: color 0.18s ease;
}

.tx-amount-line {
  font-weight: 700;
  font-size: clamp(1rem, 0.75vw + 0.82rem, 1.15625rem);
}

.tx-amount--income  { color: #1fa971; }
.tx-amount--expense { color: #c0392b; }

.post-row {
  display: block;
  background: #fff;
  border: 1px solid rgb(11 44 61 / 0.08);
  border-radius: 1.5rem;
  padding: 1.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 10px 30px -22px rgba(11, 44, 61, 0.15);
}

.post-row:hover,
.post-row:focus-visible {
  transform: translateY(-2px);
  border-color: var(--ft-accent);
  background-color: rgb(31 169 113 / 0.06);
  box-shadow: 0 18px 36px -24px rgba(11, 44, 61, 0.2);
}

.post-row:focus-visible {
  outline: 2px solid rgb(31 169 113 / 0.28);
  outline-offset: 4px;
}

.post-row:hover .title-line,
.post-row:focus-visible .title-line {
  color: var(--ft-accent);
}

.post-row:focus-visible {
  outline: 2px solid rgb(31 169 113 / 0.35);
  outline-offset: 4px;
}

.post-row:hover .title-line,
.post-row:focus-visible .title-line {
  color: var(--ft-accent);
}
</style>
