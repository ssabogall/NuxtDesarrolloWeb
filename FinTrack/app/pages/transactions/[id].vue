<!-- author: all of us -->
<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id))

// useFetch reactivo al id — mismo patrón que categories/[slug].vue
const { data, error } = await useFetch(() => `/api/transactions/${id.value}`)

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Transaction not found' })
}

const transaction = computed(() => data.value?.transaction)
const category    = computed(() => data.value?.category)

useHead({
  title: () =>
    transaction.value ? `${transaction.value.name} — FinTrack` : 'Transactions',
})

useSeoMeta({
  description: () =>
    transaction.value
      ? `${transaction.value.type} of ${formatAmount(transaction.value.amount)} on ${transaction.value.date}`
      : undefined,
})

// Formatea amount como moneda USD
const formatAmount = (amount: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
</script>

<template>
  <article
    v-if="transaction"
    class="article-shell"
  >
    <!-- Volver al listado — mismo patrón que blog/[id].vue y categories/[slug].vue -->
    <p class="mb-4 mb-lg-5">
      <NuxtLink
        class="link-back text-decoration-none"
        to="/transactions"
      >
        ← Transactions
      </NuxtLink>
    </p>

    <header class="article-hero mb-5">
      <p class="mb-3 meta-line">
        <!-- Badge de tipo con color semántico -->
        <span
          class="meta-badge"
          :class="transaction.type === 'income' ? 'meta-badge--income' : 'meta-badge--expense'"
        >{{ transaction.type }}</span>
        <span class="meta-date">· {{ transaction.date }}</span>
      </p>

      <h1 class="mb-4 title-head">{{ transaction.name }}</h1>
      <div class="accent-rule" aria-hidden="true" />

      <!-- Monto destacado -->
      <p
        class="mb-0 mt-5 lead-amount"
        :class="transaction.type === 'income' ? 'lead-amount--income' : 'lead-amount--expense'"
      >
        {{ transaction.type === 'income' ? '+' : '-' }}{{ formatAmount(transaction.amount) }}
      </p>

      <div class="header-line mt-5" />
    </header>

    <!-- ── Categoría asociada ────────────────────────────────────────── -->
    <section
      v-if="category"
      class="category-section"
    >
      <h2 class="section-title mb-4">Category</h2>

      <!-- Enlaza de vuelta a la categoría — flujo bidireccional -->
      <NuxtLink
        :to="`/categories/${category.slug}`"
        class="category-card text-decoration-none"
      >
        <span
          class="category-badge"
          :style="{ background: category.color }"
        >{{ category.type }}</span>
        <span class="category-title">{{ category.title }}</span>
        <span class="category-arrow">→</span>
      </NuxtLink>

      <p class="mt-3 category-description">{{ category.description }}</p>
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

/* ── Back link ── */
.link-back {
  color: rgb(11 44 61 / 0.45);
  font-weight: 500;
  font-size: clamp(0.9375rem, 0.85vw + 0.74rem, 1.0625rem);
}

.link-back:hover { color: var(--ft-accent); }

/* ── Header ── */
.meta-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.03em;
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
  color: rgb(11 44 61 / 0.45);
  font-weight: 500;
  font-size: clamp(0.9375rem, 0.5vw + 0.8rem, 1.0625rem);
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

/* Monto grande destacado */
.lead-amount {
  font-size: clamp(1.5rem, 2vw + 1rem, 2.25rem);
  font-weight: 700;
  line-height: 1.2;
}

.lead-amount--income  { color: #1fa971; }
.lead-amount--expense { color: #c0392b; }

.header-line {
  height: 1px;
  background: rgb(11 44 61 / 0.1);
}

/* ── Category section ── */
.section-title {
  font-size: clamp(1.1rem, 1.2vw + 0.75rem, 1.375rem);
  font-weight: 600;
  color: var(--ft-navy);
  letter-spacing: -0.02em;
}

/* Tarjeta de categoría — misma lógica visual que post-row */
.category-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border: 1px solid rgb(11 44 61 / 0.1);
  border-radius: 0.75rem;
  background: rgb(11 44 61 / 0.02);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  max-width: 28rem;
}

.category-card:hover {
  background-color: rgb(31 169 113 / 0.04);
  border-color: var(--ft-accent);
}

.category-badge {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  flex-shrink: 0;
}

.category-title {
  color: var(--ft-navy);
  font-weight: 600;
  font-size: clamp(0.9375rem, 0.5vw + 0.8rem, 1.0625rem);
  flex: 1;
}

.category-arrow {
  color: var(--ft-accent);
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.category-description {
  color: rgb(11 44 61 / 0.55);
  line-height: 1.65;
  font-size: clamp(0.965rem, 0.85vw + 0.74rem, 1.11875rem);
  max-width: 68ch;
}
</style>
