<!-- author: all of us -->
<script setup lang="ts">
import logo from '~/assets/logo/FinTrack-white.png'

const route = useRoute()
</script>

<template>
  <div class="app-root">
    <div class="app-layout-inner">
      <aside class="sidebar">
        <div class="sidebar-brand-wrap">
          <img
            :src="logo"
            alt="FinTrack Logo"
            class="sidebar-logo"
          />
        </div>

        <nav class="sidebar-nav">
          <NuxtLink
            to="/blog"
            class="nav-row"
            :class="{ 'nav-row--active': route.path.startsWith('/blog') }"
          >
            <i class="fas fa-newspaper"></i>
            <span>Blog</span>
          </NuxtLink>
        </nav>
      </aside>

      <div class="main-wrap">
        <header class="top-header">
          <div class="top-header-inner">
            <h1 class="page-title">
              {{ (route.meta.title as string) || 'FinTrack' }}
            </h1>
          </div>
        </header>

        <main class="page-main">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  background: #fff;
  color: #0b2c3d;
}

.app-layout-inner {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 18rem;
  flex-shrink: 0;
  background: #0b2c3d;
  color: #fff;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(0 0 0 / 0.1);
  z-index: 20;
}

.sidebar-brand-wrap {
  padding: 1.5rem 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-logo {
  height: 8.75rem;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.sidebar-nav {
  padding: 0 1rem;
  margin-top: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  min-height: 0;
}

.nav-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-row:hover {
  background: #1fa971;
  color: #fff;
}

.nav-row--active {
  background: #1fa971;
  color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.main-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 18rem;
  min-width: 0;
}

.top-header {
  background: #fff;
  border-bottom: 1px solid rgb(11 44 61 / 0.1);
  backdrop-filter: blur(8px);
}

.top-header-inner {
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-title {
  margin: 0;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #0b2c3d;
}

.page-main {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: #fff;
}
</style>
