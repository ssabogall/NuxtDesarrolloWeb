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
        Aquí usamos una ruta principal con dos subrutas: una textual y otra interactiva.
      </p>
    </div>
  </article>
</template>

<style scoped>
.resource-article {
  --ft-navy: #0b2c3d;
  --ft-accent: #1fa971;

  width: 100%;
  max-width: min(75rem, 100%);
  margin-inline: auto;
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
  color: var(--ft-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: clamp(0.7rem, 0.85vw + 0.52rem, 0.8125rem);
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

.para {
  color: var(--ft-navy);
  line-height: 1.76;
  font-size: clamp(1rem, 0.75vw + 0.82rem, 1.15625rem);
  opacity: 0.93;
  max-width: min(68ch, 100%);
}
</style>