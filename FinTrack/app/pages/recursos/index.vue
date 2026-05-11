<script setup lang="ts">
definePageMeta({
  title: 'Recursos',
  ssr: false,
})

useSeoMeta({
  title: 'Recursos - FinTrack',
  description:
    'Main CSR route with two client-rendered subpages: simple text and a savings calculator.',
})
</script>

<template>
  <section class="resources-shell">
    <header class="resources-hero mb-4 mb-xl-5">
      <p class="mb-2 mb-md-3 mono-label">Ruta principal</p>
      <h1 class="mb-4 page-title">Recursos</h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mt-4 mb-0 hero-copy">
        Esta sección vive completamente en cliente y reúne dos subrutas para mostrar navegación anidada dentro de Nuxt.
      </p>
    </header>

    <div class="row g-4">
      <div class="col-12 col-xl-6">
        <NuxtLink
          to="/recursos/texto-simple"
          class="feature-card d-block text-decoration-none h-100"
        >
          <p class="card-kicker mb-3">Subruta 1</p>
          <h2 class="card-title mb-3">Texto simple</h2>
          <p class="card-copy mb-0">
            Un bloque de lectura breve para explicar por qué esta ruta se renderiza como CSR y cómo se organiza el árbol de páginas.
          </p>
        </NuxtLink>
      </div>

      <div class="col-12 col-xl-6">
        <NuxtLink
          to="/recursos/calculadora-ahorro"
          class="feature-card d-block text-decoration-none h-100"
        >
          <p class="card-kicker mb-3">Subruta 2</p>
          <h2 class="card-title mb-3">Calculadora de ahorro</h2>
          <p class="card-copy mb-0">
            Una calculadora ligera para probar interacción del lado del cliente sin recargar la página.
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
