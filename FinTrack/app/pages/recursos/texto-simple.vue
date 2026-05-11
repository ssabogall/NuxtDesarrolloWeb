<script setup lang="ts">
definePageMeta({
  title: 'Texto simple',
  ssr: false,
})

useSeoMeta({
  title: 'Texto simple - Recursos',
  description: 'A short text page rendered entirely on the client.',
})
</script>

<template>
  <article class="resource-article">
    <p class="mb-4 mb-lg-5">
      <NuxtLink
        class="link-back text-decoration-none"
        to="/recursos"
      >
        ← Recursos
      </NuxtLink>
    </p>

    <header class="article-hero mb-5">
      <p class="mb-3 meta-line">Subruta de texto</p>
      <h1 class="mb-4 title-head">Texto simple</h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mb-0 mt-5 lead-soft">
        Esta página existe para demostrar una subruta ligera, útil como ejemplo de contenido estático que todavía vive dentro de una navegación CSR.
      </p>
    </header>

    <div class="body-copy">
      <p class="mb-4 para">
        En una aplicación Nuxt, una sección puede cambiar a cliente solamente usando reglas de ruta o metadatos de página. Eso permite que el resto del sitio siga con SSR mientras esta parte se comporta como una SPA.
      </p>
      <p class="mb-4 para">
        Aquí usamos una ruta principal con dos subrutas: una textual y otra interactiva. La idea es que puedas mostrar estructura, navegación y un caso claro de CSR sin complicar el proyecto.
      </p>
    </div>
  </article>
</template>
