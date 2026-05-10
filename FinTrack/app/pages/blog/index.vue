<script setup lang="ts">
import { blogArticles } from '~/data/blogArticles'

definePageMeta({
  title: 'Blog',
})

useSeoMeta({
  title: 'Blog — FinTrack',
  description:
    'Short reads on categories, transactions, and goals in your financial dashboard.',
})
</script>

<template>
  <div class="blog-shell">
    <header class="hero-head mb-4 mb-xl-5">
      <p class="mb-2 mb-md-3 mono-label">Blog</p>
      <h1 class="mb-4 page-title">FinTrack insights</h1>
      <div class="accent-rule" aria-hidden="true" />
      <div class="header-line" />
    </header>

    <ul class="list-unstyled m-0 p-0">
      <li
        v-for="article in blogArticles"
        :key="article.id"
      >
        <NuxtLink
          :to="`/blog/${article.id}`"
          class="post-row d-block text-decoration-none py-5"
        >
          <p class="mb-3 topic-line">
            <span class="topic-name">{{ article.topic }}</span>
            <span class="partition">·</span>
            <span>{{ article.id }}</span>
          </p>
          <h2 class="post-title fw-semibold mb-3 title-line">{{ article.title }}</h2>
          <p class="mb-0 summary-line">{{ article.summary }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-shell {
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

.topic-name {
  font-weight: 600;
  color: rgb(11 44 61 / 0.68);
}

.partition {
  opacity: 0.5;
  margin: 0 0.4rem;
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
