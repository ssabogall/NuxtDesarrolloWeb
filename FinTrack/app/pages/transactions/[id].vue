<!-- author: all of us -->
<!--
  /transactions/[id]
  Responsabilidad exclusiva: orquestar la vista de detalle.
  - Obtiene el id de la ruta
  - Delega fetch y lógica derivada a useTransactionDetail
  - Registra SEO
  - Monta los componentes con los datos ya listos
  Sin lógica de negocio, sin formateos, sin condicionales complejos.
-->
<script setup lang="ts">
import { useTransactionDetail } from '~/composables/useTransactionDetail'

const route = useRoute()
const id    = computed(() => Number(route.params.id))

const {
  transaction,
  category,
  formattedAmount,
  formattedDate,
  amountSign,
  isIncome,
} = await useTransactionDetail(id)

useHead({
  title: () => transaction.value
    ? `${transaction.value.name} — FinTrack`
    : 'Transactions',
})

useSeoMeta({
  description: () => transaction.value
    ? `${transaction.value.type} · ${formattedAmount.value} · ${formattedDate.value}`
    : undefined,
})
</script>

<template>
  <article v-if="transaction" class="detail-shell">

    <!-- Volver al listado -->
    <p class="mb-4 mb-lg-5">
      <NuxtLink class="link-back text-decoration-none" to="/transactions">
        ← Transactions
      </NuxtLink>
    </p>

    <!-- Hero: nombre + monto grande -->
    <TransactionDetailCard
      :transaction="transaction"
      :formatted-amount="formattedAmount"
      :formatted-date="formattedDate"
      :amount-sign="amountSign"
      :is-income="isIncome"
      class="mb-5"
    />

    <!-- Categoría asociada (opcional) -->
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
