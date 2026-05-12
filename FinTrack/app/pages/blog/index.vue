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

    <ul class="blog-grid list-unstyled m-0 p-0">
      <li
        v-for="article in blogArticles"
        :key="article.id"
      >
        <NuxtLink
          :to="`/blog/${article.id}`"
          class="post-row d-block text-decoration-none"
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.875rem, 0.5vw + 0.74rem, 1rem);
  color: rgb(11 44 61 / 0.52);
  letter-spacing: 0.02em;
}

.topic-name {
  font-weight: 700;
  color: var(--ft-accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.partition {
  opacity: 0.5;
  margin: 0 0.4rem;
}

.post-title {
  font-size: clamp(1.3rem, 1.65vw + 0.76rem, 1.75rem);
  line-height: 1.25;
  margin-bottom: 1rem;
}

.title-line {
  color: var(--ft-navy);
  letter-spacing: -0.022em;
  transition: color 0.18s ease;
}

.summary-line {
  color: rgb(11 44 61 / 0.7);
  line-height: 1.8;
  font-size: clamp(0.97rem, 0.85vw + 0.74rem, 1.13rem);
  max-width: 64ch;
  margin-bottom: 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.75rem;
}

.post-row {
  display: block;
  background: #fff;
  border: 1px solid rgb(11 44 61 / 0.08);
  border-radius: 1.5rem;
  padding: 1.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 12px 28px -24px rgba(11, 44, 61, 0.18);
}

.post-row:hover,
.post-row:focus-visible {
  transform: translateY(-3px);
  border-color: var(--ft-accent);
  background-color: rgba(31, 169, 113, 0.08);
  box-shadow: 0 22px 40px -26px rgba(11, 44, 61, 0.2);
}

.post-row:focus-visible {
  outline: 2px solid rgba(31, 169, 113, 0.28);
  outline-offset: 4px;
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
