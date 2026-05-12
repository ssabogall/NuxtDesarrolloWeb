<script setup lang="ts">
import type { TransactionDetailResponse } from '~/interfaces/TransactionInterface'
import { Formatters } from '~/utils/Formatters'

const route = useRoute()
const id    = computed(() => Number(route.params.id))

const { data, error } = await useFetch<TransactionDetailResponse>(
  () => `/api/transactions/${id.value}`,
)

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Transaction not found' })
}

const transaction = computed(() => data.value?.transaction)
const category    = computed(() => data.value?.category)

const formattedAmount = computed(() =>
  transaction.value ? Formatters.formatToCOP(transaction.value.amount) : '',
)

const formattedDate = computed(() =>
  transaction.value ? Formatters.formatDate(transaction.value.date) : '',
)

const amountSign = computed(() =>
  transaction.value ? Formatters.signPrefix(transaction.value.type) : '',
)

const isIncome = computed(() => transaction.value?.type === 'income')

useHead({
  title: () => transaction.value ? `${transaction.value.name} — FinTrack` : 'Transactions',
})

useSeoMeta({
  description: () => transaction.value
    ? `${transaction.value.type} · ${formattedAmount.value} · ${formattedDate.value}`
    : undefined,
})
</script>

<template>
  <article v-if="transaction" class="detail-shell">

    <p class="mb-4 mb-lg-5">
      <NuxtLink class="link-back text-decoration-none" to="/transactions">
        ← Transactions
      </NuxtLink>
    </p>

    <TransactionDetailCard
      :transaction="transaction"
      :formatted-amount="formattedAmount"
      :formatted-date="formattedDate"
      :amount-sign="amountSign"
      :is-income="isIncome"
      class="mb-5"
    />

    <TransactionCategoryBadge
      v-if="category"
      :category="category"
    />

  </article>
</template>

<style scoped>
.detail-shell {
  width: 100%;
  max-width: min(75rem, 100%);
  margin-inline: auto;
  padding-inline: 0;
}

.link-back {
  color: rgb(11 44 61 / 0.45);
  font-weight: 500;
  font-size: clamp(0.9375rem, 0.85vw + 0.74rem, 1.0625rem);
  transition: color 0.18s ease;
}

.link-back:hover { color: #1fa971; }
</style>
