<script setup lang="ts">
import type { SavingsScenario } from '~/interfaces/SavingsInterface'

definePageMeta({
  title: 'Savings calculator',
  ssr: false,
})

useSeoMeta({
  title: 'Savings calculator - FinTrack',
  description: 'A lightweight client-side calculator for savings planning.',
})

const initialAmount       = ref<number>(250)
const monthlyContribution = ref<number>(300)
const months              = ref<number>(12)

const scenarios: readonly SavingsScenario[] = [
  { label: 'Emergency fund', initialAmount: 100, monthlyContribution: 200, months: 18 },
  { label: 'Short trip',     initialAmount: 0,   monthlyContribution: 350, months: 8  },
  { label: 'Big purchase',   initialAmount: 500, monthlyContribution: 400, months: 10 },
] as const

const projectedTotal = computed<number>(
  () => initialAmount.value + monthlyContribution.value * months.value,
)

function applyScenario(scenario: SavingsScenario): void {
  initialAmount.value       = scenario.initialAmount
  monthlyContribution.value = scenario.monthlyContribution
  months.value              = scenario.months
}
</script>

<template>
  <section class="calculator-shell">
    <p class="mb-4 mb-lg-5">
      <NuxtLink class="link-back text-decoration-none" to="/resources">
        ← Resources
      </NuxtLink>
    </p>

    <header class="calculator-hero mb-5">
      <p class="mb-3 meta-line">Interactive sub-route</p>
      <h1 class="mb-4 title-head">Savings calculator</h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mb-0 mt-5 lead-soft">
        Adjust the initial amount, monthly contribution, and number of months to see the projected total.
      </p>
    </header>

    <div class="row g-4 align-items-stretch">
      <div class="col-12 col-xl-7">
        <div class="panel h-100">
          <div class="row g-4">
            <div class="col-12 col-md-4">
              <label class="form-label field-label" for="initialAmount">Initial amount</label>
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
              <label class="form-label field-label" for="monthlyContribution">Monthly contribution</label>
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
              <label class="form-label field-label" for="months">Months</label>
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

          <div class="mt-4">
            <p class="mb-3 scenario-kicker">Quick examples</p>
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
          <p class="mb-2 result-kicker">Result</p>
          <p class="mb-3 result-value">${{ projectedTotal.toLocaleString('en-US') }}</p>
          <p class="mb-4 result-copy">
            Projected total at the end of the period with the current configuration.
          </p>

          <div class="result-grid">
            <div class="result-item">
              <span class="result-label">Initial</span>
              <strong class="result-number">${{ initialAmount.toLocaleString('en-US') }}</strong>
            </div>
            <div class="result-item">
              <span class="result-label">Monthly</span>
              <strong class="result-number">${{ monthlyContribution.toLocaleString('en-US') }}</strong>
            </div>
            <div class="result-item">
              <span class="result-label">Months</span>
              <strong class="result-number">{{ months }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.calculator-shell {
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
.link-back:hover { color: var(--ft-accent); }

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

.panel,
.result-panel {
  border-radius: 1.25rem;
  border: 1px solid rgb(11 44 61 / 0.1);
  background: #fff;
  box-shadow: 0 18px 40px -28px rgb(11 44 61 / 0.4);
  padding: 1.5rem;
}

.field-label { color: var(--ft-navy); font-weight: 600; }

.field-input {
  border-color: rgb(11 44 61 / 0.16);
  border-radius: 0.9rem;
  padding-block: 0.8rem;
}
.field-input:focus {
  border-color: rgb(31 169 113 / 0.45);
  box-shadow: 0 0 0 0.2rem rgb(31 169 113 / 0.14);
}

.scenario-kicker,
.result-kicker {
  color: var(--ft-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
}

.scenario-pill {
  border: 1px solid rgb(31 169 113 / 0.25);
  border-radius: 999px;
  padding: 0.65rem 0.95rem;
  background: rgb(31 169 113 / 0.07);
  color: var(--ft-navy);
  font-weight: 600;
  transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease;
}
.scenario-pill:hover {
  transform: translateY(-1px);
  background: rgb(31 169 113 / 0.14);
  border-color: rgb(31 169 113 / 0.4);
}

.result-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, rgb(31 169 113 / 0.1), transparent 58%), #fff;
}

.result-value {
  color: var(--ft-navy);
  font-weight: 700;
  letter-spacing: -0.04em;
  font-size: clamp(2rem, 3vw + 0.95rem, 3.5rem);
  line-height: 1;
}

.result-copy { color: rgb(11 44 61 / 0.66); line-height: 1.7; }

.result-grid { display: grid; gap: 0.85rem; }

.result-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 0.95rem;
  background: rgb(11 44 61 / 0.03);
}

.result-label { color: rgb(11 44 61 / 0.6); font-weight: 500; }
.result-number { color: var(--ft-navy); font-size: 1.05rem; }
</style>
