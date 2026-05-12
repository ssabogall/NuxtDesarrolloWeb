<script setup lang="ts">
import { Formatters } from '~/utils/Formatters'

const route = useRoute()
const id    = computed(() => Number(route.params.id))

const { data, error } = await useFetch(() => `/api/categories/${id.value}`)

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}

const category     = computed(() => data.value?.category)
const transactions = computed(() => data.value?.transactions ?? [])

useHead({
  title: () => category.value ? `${category.value.title} — FinTrack` : 'Categories',
})

useSeoMeta({
  description: () => category.value?.description,
})
</script>

<template>
  <article v-if="category" class="article-shell">
    <p class="mb-4 mb-lg-5">
      <NuxtLink class="link-back text-decoration-none" to="/categories">
        ← Categories
      </NuxtLink>
    </p>

    <header class="article-hero mb-5">
      <p class="mb-3 meta-line">
        <span class="meta-badge" :style="{ background: category.color }">{{ category.type }}</span>
      </p>
      <h1 class="mb-4 title-head">{{ category.title }}</h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mb-0 mt-5 lead-soft">{{ category.description }}</p>
      <div class="header-line mt-5" />
    </header>

    <section class="transactions-section">
      <h2 class="section-title mb-4">
        Transactions
        <span class="tx-count">{{ transactions.length }}</span>
      </h2>

      <p v-if="transactions.length === 0" class="empty-state">
        No transactions recorded for this category yet.
      </p>

      <ul v-else class="list-unstyled m-0 p-0">
        <li v-for="tx in transactions" :key="tx.id" class="tx-row py-4">
          <div class="tx-main">
            <span class="tx-description">{{ tx.name }}</span>
            <span
              class="tx-amount"
              :class="tx.type === 'income' ? 'tx-amount--income' : 'tx-amount--expense'"
            >
              {{ Formatters.signPrefix(tx.type) }}{{ Formatters.formatToCOP(tx.amount) }}
            </span>
          </div>
          <p class="mb-0 tx-date">{{ Formatters.formatDate(tx.date) }}</p>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.article-shell {
  --ft-navy: #0b2c3d;
  --ft-accent: #1fa971;

  width: 100%;
  max-width: min(75rem, 100%);
  margin-inline: auto;
  padding-inline: 0;
}

.link-back {
  color: rgb(11 44 61 / 0.45);
  font-weight: 500;
  font-size: clamp(0.9375rem, 0.85vw + 0.74rem, 1.0625rem);
}

.link-back:hover { color: var(--ft-accent); }

.meta-line { letter-spacing: 0.03em; }

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

.title-head {
  color: var(--ft-navy);
  font-weight: 600;
  letter-spacing: -0.035em;
  font-size: clamp(1.75rem, 2.5vw + 0.9rem, 2.875rem);
  line-height: 1.17;
}

.accent-rule {
  width: clamp(3rem, 5vw, 4rem);
  height: 4px;
  border-radius: 999px;
  background: var(--ft-accent);
}

.lead-soft {
  font-size: clamp(1.0625rem, 1vw + 0.9rem, 1.3125rem);
  line-height: 1.68;
  color: rgb(11 44 61 / 0.66);
  max-width: min(72ch, 100%);
}

.header-line {
  height: 1px;
  background: rgb(11 44 61 / 0.1);
}

.section-title {
  font-size: clamp(1.1rem, 1.2vw + 0.75rem, 1.375rem);
  font-weight: 600;
  color: var(--ft-navy);
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.tx-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgb(11 44 61 / 0.08);
  color: rgb(11 44 61 / 0.55);
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 0.1rem 0.55rem;
}

.empty-state {
  color: rgb(11 44 61 / 0.45);
  font-style: italic;
  font-size: clamp(0.965rem, 0.85vw + 0.74rem, 1.11875rem);
}

.tx-row {
  border-bottom: 1px solid rgb(11 44 61 / 0.08);
  padding-left: 1rem;
  margin-left: -1rem;
  border-left: 4px solid transparent;
  transition: border-left-color 0.2s ease, background-color 0.2s ease;
  border-radius: 0 4px 4px 0;
}

.tx-row:last-of-type { border-bottom: none; }

.tx-row:hover {
  border-left-color: var(--ft-accent);
  background-color: rgb(31 169 113 / 0.04);
}

.tx-main {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.tx-description {
  color: var(--ft-navy);
  font-weight: 500;
  font-size: clamp(1rem, 0.75vw + 0.82rem, 1.15625rem);
  line-height: 1.4;
}

.tx-amount {
  font-weight: 700;
  font-size: clamp(1rem, 0.75vw + 0.82rem, 1.15625rem);
  white-space: nowrap;
}

.tx-amount--income  { color: #1fa971; }
.tx-amount--expense { color: #c0392b; }

.tx-date {
  margin-top: 0.25rem;
  color: rgb(11 44 61 / 0.42);
  font-size: clamp(0.8rem, 0.5vw + 0.68rem, 0.9rem);
  letter-spacing: 0.02em;
}
</style>
