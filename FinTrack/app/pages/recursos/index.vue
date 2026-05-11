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

<style scoped>
.resources-shell {
  --ft-navy: #0b2c3d;
  --ft-accent: #1fa971;

  width: 100%;
  max-width: min(75rem, 100%);
  margin-inline: auto;
}

.page-title {
  color: var(--ft-navy);
  font-weight: 600;
  letter-spacing: -0.035em;
  font-size: clamp(1.75rem, 2.75vw + 0.85rem, 2.875rem);
  line-height: 1.14;
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

.hero-copy {
  color: rgb(11 44 61 / 0.68);
  line-height: 1.7;
  max-width: 68ch;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 1.25rem;
  border: 1px solid rgb(11 44 61 / 0.1);
  background:
    linear-gradient(180deg, rgb(31 169 113 / 0.08), transparent 55%),
    #fff;
  box-shadow: 0 18px 40px -28px rgb(11 44 61 / 0.4);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.feature-card:hover,
.feature-card:focus-visible {
  transform: translateY(-2px);
  border-color: rgb(31 169 113 / 0.4);
  box-shadow: 0 22px 50px -28px rgb(11 44 61 / 0.5);
}

.feature-card:focus-visible {
  outline: 2px solid rgb(31 169 113 / 0.3);
  outline-offset: 4px;
}

.card-kicker {
  color: var(--ft-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
}

.card-title {
  color: var(--ft-navy);
  font-size: clamp(1.25rem, 1.4vw + 0.85rem, 1.65rem);
  line-height: 1.28;
  letter-spacing: -0.02em;
}

.card-copy {
  color: rgb(11 44 61 / 0.64);
  line-height: 1.7;
}
</style>