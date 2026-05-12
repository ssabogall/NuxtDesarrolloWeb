<script setup lang="ts">
definePageMeta({ title: 'How it works', ssr: false })

useSeoMeta({ title: 'How the savings calculator works - Calculator', description: 'Explanation of the formula and scenarios used by the savings calculator.' })
</script>

<template>
  <article class="resource-article">
    <p class="mb-4 mb-lg-5">
      <NuxtLink class="link-back text-decoration-none" to="/calculator">← Calculator</NuxtLink>
    </p>

    <header class="article-hero mb-5">
      <p class="mb-3 meta-line">Calculator details</p>
      <h1 class="mb-4 title-head">How the savings calculator works</h1>
      <div class="accent-rule" aria-hidden="true" />
    </header>

    <div class="body-copy">
      <h2>Formula</h2>
      <p>
        The calculator uses a straightforward projection: <strong>total = initial + monthly × months</strong>.
        This keeps the tool simple and deterministic for planning short-term savings.
      </p>

      <h2>Scenarios</h2>
      <p>
        Built-in scenarios provide quick presets (for example: Emergency fund, Short trip,
        Big purchase). Choosing a preset fills the inputs so you can see typical
        outcomes immediately.
      </p>
    </div>
  </article>
</template>

<style scoped>
.resource-article { --ft-navy:#0b2c3d; --ft-accent:#1fa971; max-width:min(75rem,100%); margin-inline:auto }
.link-back{ color:rgb(11 44 61 / 0.45); font-weight:500 }
.meta-line{ color:var(--ft-accent); font-weight:700; text-transform:uppercase }
.title-head{ color:var(--ft-navy); font-weight:600 }
.body-copy h2{ margin-top:1rem }
</style>
