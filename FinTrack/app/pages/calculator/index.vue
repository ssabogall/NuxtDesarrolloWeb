<script setup lang="ts">
definePageMeta({
  title: 'Calculator',
  ssr: false,
})

useSeoMeta({
  title: 'Calculator - FinTrack',
  description: 'Client-rendered calculator info and interactive tool.',
})
</script>

<template>
  <section class="resources-shell">
    <header class="resources-hero mb-4 mb-xl-5">
      <p class="mb-2 mb-md-3 mono-label">Calculator</p>
      <h1 class="mb-4 page-title">Calculator</h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mt-4 mb-0 hero-copy">Choose a subpage below.</p>
    </header>

    <div class="row g-4">
      <div class="col-12 col-xl-6">
        <NuxtLink to="/calculator/savings-text" class="feature-card d-block text-decoration-none h-100">
          <p class="card-kicker mb-3">Subroute 1</p>
          <h2 class="card-title mb-3">How it works</h2> 
          <p class="card-copy mb-0">Explanation of the savings calculator formula and scenarios.</p>
        </NuxtLink>
      </div>

      <div class="col-12 col-xl-6">
        <NuxtLink to="/calculator/savings-calculator" class="feature-card d-block text-decoration-none h-100">
          <p class="card-kicker mb-3">Subroute 2</p>
          <h2 class="card-title mb-3">Savings calculator</h2>
          <p class="card-copy mb-0">Open the interactive calculator to test initial amounts, monthly contributions and duration.</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resources-shell {
  --ft-navy: #0b2c3d;
  --ft-accent: #1fa971;
  width: 100%;
  max-width: min(75rem, 100%);
  margin-inline: auto;
}
.page-title { color: var(--ft-navy); font-weight: 600; }
.mono-label { letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: var(--ft-accent); }
.accent-rule { width: clamp(3rem, 5vw, 4rem); height: 4px; border-radius: 999px; background: var(--ft-accent); }
.hero-copy { color: rgb(11 44 61 / 0.68); max-width: 68ch; }
.feature-card { padding: 1.5rem; border-radius: 1.25rem; border: 1px solid rgb(11 44 61 / 0.1); background: #fff; box-shadow: 0 18px 40px -28px rgb(11 44 61 / 0.4); transition: transform .18s; }
.feature-card:hover { transform: translateY(-2px); }
.card-kicker { color: var(--ft-accent); font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; }
.card-title { color: var(--ft-navy); font-size: 1.35rem; margin: 0.25rem 0; }
.card-copy { color: rgb(11 44 61 / 0.64); }
</style>
