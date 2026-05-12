<template>
  <article class="article-shell">
    <header class="article-hero mb-5">
      <h1 class="mb-4 title-head">Welcome to FinTrack</h1>
      <div class="accent-rule" aria-hidden="true" />
      <p class="mb-0 mt-5 lead-soft">
        Your personal financial manager to easily and effectively control income, expenses, and savings.
      </p>
      <div class="header-line mt-5" />
    </header>

    <section class="home-features">
      <h2 class="section-title mb-4">Explore the features</h2>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-arrow-right-arrow-left"></i>
          </div>
          <h3 class="feature-title">Transactions</h3>
          <p class="feature-description">
            Record and manage your daily income and expenses.
          </p>
          <NuxtLink to="/transactions" class="feature-link">
            View transactions →
          </NuxtLink>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-tags"></i>
          </div>
          <h3 class="feature-title">Categories</h3>
          <p class="feature-description">
            Organize your finances by custom categories.
          </p>
          <NuxtLink to="/categories" class="feature-link">
            Explore categories →
          </NuxtLink>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-calculator"></i>
          </div>
          <h3 class="feature-title">Savings Calculator</h3>
          <p class="feature-description">
            Plan your savings goals with our tool.
          </p>
          <NuxtLink to="/calculator" class="feature-link">
            Calculate savings →
          </NuxtLink>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-newspaper"></i>
          </div>
          <h3 class="feature-title">Blog</h3>
          <p class="feature-description">
            Read tips and articles about personal finance.
          </p>
          <NuxtLink to="/blog" class="feature-link">
            Read blog →
          </NuxtLink>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.article-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.article-hero {
  text-align: center;
  margin-bottom: 3rem;
}

.title-head {
  font-size: 3rem;
  font-weight: 700;
  color: #0b2c3d;
  margin: 0;
}

.accent-rule {
  width: 4rem;
  height: 0.25rem;
  background: #1fa971;
  margin: 1.5rem auto;
  border-radius: 0.125rem;
}

.lead-soft {
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.6;
}

.header-line {
  width: 100%;
  height: 1px;
  background: rgb(11 44 61 / 0.1);
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #0b2c3d;
  margin: 0;
}

.home-features {
  margin-top: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }
}

@media (max-width: 760px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(31, 169, 113, 0.15);
  border-radius: 1.5rem;
  padding: 2.25rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -15px rgba(11, 44, 61, 0.2);
}

.feature-icon {
  width: 4.25rem;
  height: 4.25rem;
  background: linear-gradient(135deg, #1fa971 0%, #16a56a 100%);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 20px -12px rgba(31, 169, 113, 0.5);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0b2c3d;
  margin: 0 0 1rem;
}

.feature-description {
  color: #64748b;
  line-height: 1.75;
  margin: 0 0 2rem;
  flex: 1;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  background: rgba(31, 169, 113, 0.1);
  color: #1fa971;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.feature-link:hover {
  background: #1fa971;
  color: #fff;
  transform: translateY(-1px);
}
</style>