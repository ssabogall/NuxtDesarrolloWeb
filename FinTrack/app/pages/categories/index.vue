<!-- author: all of us -->
<script setup lang="ts">
// useFetch llama a /api/categories en el servidor durante SSR;
// en cliente reutiliza el payload ya hidratado — sin doble petición.
const { data: categories } = await useFetch('/api/categories')

definePageMeta({
  title: 'Categories',
})

useSeoMeta({
  title: 'Categories — FinTrack',
  description:
    'Browse income and expense categories and explore their linked transactions.',
})
</script>

<template>
  <div class="categories-shell">
    <header class="hero-head mb-4 mb-xl-5">
      <p class="mb-2 mb-md-3 mono-label">Finance</p>
      <h1 class="mb-4 page-title">Categories</h1>
      <div class="accent-rule" aria-hidden="true" />
      <div class="header-line" />
    </header>

    <ul class="list-unstyled m-0 p-0">
      <li
        v-for="category in categories"
        :key="category.slug"
      >
        <NuxtLink
          :to="`/categories/${category.slug}`"
          class="post-row d-block text-decoration-none py-5"
        >
          <p class="mb-3 topic-line">
            <!-- Badge coloreado dinámicamente con el color de la categoría -->
            <span
              class="type-badge"
              :style="{ background: category.color }"
            >{{ category.type }}</span>
          </p>
          <h2 class="post-title fw-semibold mb-3 title-line">{{ category.title }}</h2>
          <p class="mb-0 summary-line">{{ category.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.categories-shell {
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

.topic-line {
  font-size: clamp(0.875rem, 0.5vw + 0.74rem, 1rem);
  color: rgb(11 44 61 / 0.52);
  letter-spacing: 0.02em;
}

/* Badge coloreado dinámicamente vía :style */
.type-badge {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
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

.summary-line {
  color: rgb(11 44 61 / 0.58);
  line-height: 1.65;
  font-size: clamp(0.965rem, 0.85vw + 0.74rem, 1.11875rem);
  max-width: 68ch;
}

.post-row {
  border-bottom: 1px solid rgb(11 44 61 / 0.08);
  padding-left: 1rem;
  margin-left: -1rem;
  border-left: 4px solid transparent;
  transition:
    border-left-color 0.2s ease,
    background-color 0.2s ease;
  border-radius: 0 4px 4px 0;
}

.post-row:last-of-type {
  border-bottom: none;
}

.post-row:hover,
.post-row:focus-visible {
  border-left-color: var(--ft-accent);
  background-color: rgb(31 169 113 / 0.04);
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
