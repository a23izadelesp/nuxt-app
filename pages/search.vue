<template>
  <main>
    <h1>Encuentra tu Pokémon</h1>
    <SearchBar @search="performSearch" />

    <div v-if="loading" class="loading-spinner"></div>
    <div v-if="error" class="status-message">{{ error }}</div>

    <div v-if="results.length > 0" class="results-grid">
      <ItemCard v-for="item in results" :key="item.id" :item="item">
        <button @click="store.toggleFavorite(item)" 
                class="favorite-button"
                :class="{ 'is-favorite': store.isFavorite(item.id) }"
                :title="store.isFavorite(item.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'">
          ❤️
        </button>
      </ItemCard>
    </div>
    <div v-else-if="!loading && !error" class="status-message">
      <p>No se encontraron resultados. ¡Intenta con otro nombre!</p>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useFavoritesStore } from '../stores/favoritesStore';

const store = useFavoritesStore();
const { query, results, loading, error, search } = useSearch();

const performSearch = (q) => {
  search(q);
};

// Initial load
onMounted(() => {
  if (results.value.length === 0) {
    search();
  }
});
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

.favorite-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
  color: var(--color-border-hover);
}

.favorite-button:hover {
  transform: scale(1.2);
}

.favorite-button.is-favorite {
  color: var(--color-accent);
}

.status-message {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text-light);
  margin-top: 4rem;
}

.loading-spinner {
  border: 4px solid var(--color-background-soft);
  border-top: 4px solid var(--color-primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 4rem auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
