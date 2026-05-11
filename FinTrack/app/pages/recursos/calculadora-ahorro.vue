<script setup lang="ts">
type SavingsScenario = {
  label: string
  initialAmount: number
  monthlyContribution: number
  months: number
}

const initialAmount = ref<number>(250)
const monthlyContribution = ref<number>(300)
const months = ref<number>(12)

const scenarios: readonly SavingsScenario[] = [
  {
    label: 'Ahorro de emergencia',
    initialAmount: 100,
    monthlyContribution: 200,
    months: 18,
  },
  {
    label: 'Viaje corto',
    initialAmount: 0,
    monthlyContribution: 350,
    months: 8,
  },
  {
    label: 'Compra importante',
    initialAmount: 500,
    monthlyContribution: 400,
    months: 10,
  },
] as const

const projectedTotal = computed<number>(
  () => initialAmount.value + monthlyContribution.value * months.value,
)

function applyScenario(scenario: SavingsScenario): void {
  initialAmount.value = scenario.initialAmount
  monthlyContribution.value = scenario.monthlyContribution
  months.value = scenario.months
}

useSeoMeta({
  title: 'Calculadora de ahorro - FinTrack',
  description: 'A tiny client-side calculator for savings planning.',
})

definePageMeta({
  title: 'Calculadora de ahorro',
  ssr: false,
})
</script>

<template>
  <section class="calculator-shell">
    <p class="mb-4 mb-lg-5">
      <NuxtLink
        class="link-back text-decoration-none"
        to="/recursos"
      >
        ← Recursos
      </NuxtLink>
    </p>

    <header class="calculator-hero mb-5">
      <p class="mb-3 meta-line">Subruta interactiva</p>
      <h1 class="mb-4 title-head">Calculadora de ahorro</h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mb-0 mt-5 lead-soft">
        Ajusta el ahorro inicial, la contribución mensual y la cantidad de meses para ver el total proyectado.
      </p>
    </header>

    <div class="row g-4 align-items-stretch">
      <div class="col-12 col-xl-7">
        <div class="panel card-inputs h-100">
          <div class="row g-4">
            <div class="col-12 col-md-4">
              <label
                class="form-label field-label"
                for="initialAmount"
              >
                Aporte inicial
              </label>
              <input
                id="initialAmount"
                v-model.number="initialAmount"
                class="form-control field-input"
                type="number"
                min="0"
                step="50"
              />
            </div>

            <div class="col-12 col-md-4">
              <label
                class="form-label field-label"
                for="monthlyContribution"
              >
                Aporte mensual
              </label>
              <input
                id="monthlyContribution"
                v-model.number="monthlyContribution"
                class="form-control field-input"
                type="number"
                min="0"
                step="50"
              />
            </div>

            <div class="col-12 col-md-4">
              <label
                class="form-label field-label"
                for="months"
              >
                Meses
              </label>
              <input
                id="months"
                v-model.number="months"
                class="form-control field-input"
                type="number"
                min="1"
                step="1"
              />
            </div>
          </div>

          <div class="scenario-list mt-4">
            <p class="mb-3 scenario-kicker">Ejemplos rápidos</p>
            <div class="d-flex flex-wrap gap-2">
              <button
                v-for="scenario in scenarios"
                :key="scenario.label"
                type="button"
                class="scenario-pill"
                @click="applyScenario(scenario)"
              >
                {{ scenario.label }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-5">
        <div class="result-panel h-100">
          <p class="mb-2 result-kicker">Resultado</p>
          <p class="mb-3 result-value">
            ${{ projectedTotal.toLocaleString('es-CO') }}
          </p>
          <p class="mb-4 result-copy">
            Ese es el monto proyectado al final del periodo con la configuración actual.
          </p>

          <div class="result-grid">
            <div class="result-item">
              <span class="result-label">Inicial</span>
              <strong class="result-number">
                ${{ initialAmount.toLocaleString('es-CO') }}
              </strong>
            </div>
            <div class="result-item">
              <span class="result-label">Mensual</span>
              <strong class="result-number">
                ${{ monthlyContribution.toLocaleString('es-CO') }}
              </strong>
            </div>
            <div class="result-item">
              <span class="result-label">Meses</span>
              <strong class="result-number">{{ months }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
