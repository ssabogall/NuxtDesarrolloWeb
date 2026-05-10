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
</script>

<template>
  <article v-if="article">
    <p class="mb-1">
      <NuxtLink
        class="text-decoration-none small"
        to="/blog"
        >← Blog</NuxtLink
      >
    </p>

    <h1 class="h2">{{ article.title }}</h1>
    <p class="lead mb-2">{{ article.id }} · FinTrack</p>
    <p class="mb-3">{{ article.summary }}</p>
    <p
      v-for="(paragraph, idx) in article.bodyParagraphs"
      :key="idx"
      :class="
        idx === article.bodyParagraphs.length - 1 ? 'mb-0' : 'mb-3'
      "
    >
      {{ paragraph }}
    </p>
  </article>
</template>
