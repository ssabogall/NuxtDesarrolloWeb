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
          <NuxtLink to="/resources/savings-calculator" class="feature-link">
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
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
  }
}

@media (max-width: 720px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: #fff;
  border: 1px solid rgb(11 44 61 / 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.2s ease;
}

.feature-card:hover {
  box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  background: #1fa971;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1.5rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0b2c3d;
  margin: 0 0 1rem;
}

.feature-description {
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.feature-link {
  color: #1fa971;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.feature-link:hover {
  color: #0b2c3d;
}
</style>