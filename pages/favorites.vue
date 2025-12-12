<template>
  <main>
    <h1>Mis Favoritos</h1>
    
    <div v-if="store.favorites.length > 0" class="results-grid">
      <ItemCard v-for="item in store.favorites" :key="item.id" :item="item">
        <!-- Slot empty as per requirements -->
      </ItemCard>
    </div>
    <div v-else class="status-message">
      <p>No tienes favoritos aún.</p>
      <NuxtLink to="/search">¡Ve a buscar algunos!</NuxtLink>
    </div>
  </main>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favoritesStore';

const store = useFavoritesStore();
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.status-message {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text-light);
  margin-top: 4rem;
}

.status-message a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: bold;
}
</style>
