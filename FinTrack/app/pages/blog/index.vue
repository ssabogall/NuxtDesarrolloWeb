<script setup lang="ts">
import { blogArticles } from '~/data/blogArticles'
</script>

<template>
  <div class="blog-index">
    <p class="mb-1">
      <span class="text-secondary small text-uppercase letter-spacing-wide"
        >Blog</span
      >
    </p>

    <h1 class="h3 mb-2 fw-semibold">FinTrack insights</h1>
    <p class="text-muted mb-4 small mw-readable">
      Three posts tied to user, category, transaction, and goal from your dashboard
      class diagram.
    </p>

    <ul class="list-unstyled mb-0">
      <li
        v-for="article in blogArticles"
        :key="article.id"
        class="mb-2 pb-2 border-bottom border-light"
      >
        <NuxtLink
          :to="`/blog/${article.id}`"
          class="text-decoration-none"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-index {
  max-width: 42rem;
}

.mw-readable {
  max-width: 36rem;
}

.letter-spacing-wide {
  letter-spacing: 0.08em;
}
</style>
