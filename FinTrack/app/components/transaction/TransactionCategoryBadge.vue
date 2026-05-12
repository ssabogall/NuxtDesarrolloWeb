<script setup lang="ts">
import type { CategoryInterface } from '~/interfaces/TransactionInterface'

interface Props {
  category: CategoryInterface
}

defineProps<Props>()
</script>

<template>
  <section class="category-section">
    <p class="mb-4 section-label">Category</p>

    <NuxtLink
      :to="`/categories/${category.id}`"
      class="category-card text-decoration-none"
    >
      <div
        class="category-card-stripe"
        :style="{ background: category.color }"
        aria-hidden="true"
      />

      <div class="category-card-body">
        <div class="category-card-head mb-3">
          <span
            class="category-type-badge"
            :style="{ background: category.color }"
          >{{ category.type }}</span>
          <span class="category-title">{{ category.title }}</span>
        </div>
        <p class="mb-0 category-description">{{ category.description }}</p>
      </div>

      <div class="category-card-arrow" aria-hidden="true">
        <i class="fas fa-arrow-right" />
      </div>
    </NuxtLink>
  </section>
</template>

<style scoped>
.category-section {
  --ft-navy: #0b2c3d;
  --ft-accent: #1fa971;
}

.section-label {
  font-size: clamp(0.7rem, 0.85vw + 0.52rem, 0.8125rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ft-accent);
}

.category-card {
  display: flex;
  align-items: stretch;
  border: 1px solid rgb(11 44 61 / 0.1);
  border-radius: 1rem;
  overflow: hidden;
  background: rgb(11 44 61 / 0.015);
  max-width: 38rem;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.category-card:hover {
  border-color: var(--ft-accent);
  background-color: rgb(31 169 113 / 0.04);
  box-shadow: 0 4px 20px -4px rgb(31 169 113 / 0.15);
}

.category-card-stripe {
  width: 6px;
  flex-shrink: 0;
}

.category-card-body {
  flex: 1;
  padding: 1.4rem 1.25rem 1.4rem 1.5rem;
}

.category-card-head {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.category-type-badge {
  display: inline-block;
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  flex-shrink: 0;
}

.category-title {
  font-size: clamp(1.05rem, 0.75vw + 0.88rem, 1.25rem);
  font-weight: 600;
  color: var(--ft-navy);
  letter-spacing: -0.02em;
}

.category-description {
  color: rgb(11 44 61 / 0.55);
  font-size: clamp(0.875rem, 0.5vw + 0.74rem, 1rem);
  line-height: 1.65;
  max-width: 52ch;
}

.category-card-arrow {
  display: flex;
  align-items: center;
  padding: 0 1.4rem;
  color: rgb(11 44 61 / 0.18);
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: color 0.2s ease;
}

.category-card:hover .category-card-arrow {
  color: var(--ft-accent);
}
</style>
