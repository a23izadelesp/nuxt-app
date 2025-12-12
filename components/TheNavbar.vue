<template>
  <nav>
    <div class="nav-content">
      <NuxtLink to="/" class="brand">Col·leccionista</NuxtLink>
      <div class="links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/search">Buscar</NuxtLink>
        <NuxtLink to="/favorites">Favoritos</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
  text-decoration: none;
}

.links {
  display: flex;
  gap: 2rem;
}

.links a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s;
}

.links a:hover,
.links a.router-link-active {
  color: var(--color-primary);
}
</style>
