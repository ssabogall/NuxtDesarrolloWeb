<script setup lang="ts">
import { blogArticles } from '~/data/blogArticles'

definePageMeta({
  validate(route) {
    const param = String(route.params.id)
    return blogArticles.some((a) => String(a.id) === param)
  },
})

const route = useRoute()
const id = computed(() => String(route.params.id))
const article = computed(() =>
  blogArticles.find((a) => String(a.id) === id.value),
)

useHead({
  title: () =>
    article.value ? `${article.value.title} — FinTrack` : 'Blog',
})

useSeoMeta({
  description: () => article.value?.summary,
})
</script>

<template>
  <article
    v-if="article"
    class="article-shell"
  >
    <p class="mb-4 mb-lg-5">
      <NuxtLink
        class="link-back text-decoration-none"
        to="/blog"
      >
        ← Blog
      </NuxtLink>
    </p>

    <header class="article-hero mb-5">
      <p class="mb-3 meta-line">
        <span class="meta-topic">{{ article.topic }}</span>
        <span class="meta-id">· {{ article.id }}</span>
      </p>
      <h1 class="mb-4 title-head">
        {{ article.title }}
      </h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mb-0 mt-5 lead-soft">
        {{ article.summary }}
      </p>
      <div class="header-line mt-5" />
    </header>

    <div class="body-copy">
      <p
        v-for="(paragraph, idx) in article.bodyParagraphs"
        :key="idx"
        class="mb-4 mb-xl-5 para"
      >
        {{ paragraph }}
      </p>
    </div>
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

.link-back:hover {
  color: var(--ft-accent);
}

.meta-line {
  letter-spacing: 0.03em;
}

.meta-topic {
  font-weight: 600;
  color: var(--ft-accent);
  text-transform: uppercase;
  font-size: clamp(0.7rem, 0.85vw + 0.52rem, 0.8125rem);
  letter-spacing: 0.14em;
}

.meta-id {
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

.para {
  color: var(--ft-navy);
  line-height: 1.76;
  font-size: clamp(1rem, 0.75vw + 0.82rem, 1.15625rem);
  opacity: 0.93;
  max-width: min(68ch, 100%);
}

.body-copy .para:last-child {
  margin-bottom: 0 !important;
}
</style>
