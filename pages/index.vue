<template>
  <div class="home">
    <h1>Bienvenido al Col·leccionista Digital</h1>
    <p>Explora el mundo Pokémon, busca tus favoritos y crea tu propia colección.</p>
    <div class="actions">
      <NuxtLink to="/search" class="cta-button">Empezar a Buscar</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 4rem 1rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

p {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 3rem;
}

.cta-button {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: var(--color-accent);
}
</style>
