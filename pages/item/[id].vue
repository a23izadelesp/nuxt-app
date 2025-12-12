<template>
  <div class="detail-page" v-if="item">
    <div class="card">
      <h1>{{ item.name }}</h1>
      <div class="images">
        <img :src="item.sprites?.front_default" :alt="item.name" />
        <img :src="item.sprites?.back_default" :alt="item.name" v-if="item.sprites?.back_default" />
      </div>
      
      <div class="info">
        <div class="types">
          <span v-for="t in item.types" :key="t.type.name" class="type-badge">
            {{ t.type.name }}
          </span>
        </div>
        
        <div class="stats">
          <div v-for="s in item.stats" :key="s.stat.name" class="stat-row">
            <span class="stat-name">{{ s.stat.name }}:</span>
            <div class="stat-bar-container">
              <div class="stat-bar" :style="{ width: Math.min(s.base_stat, 100) + '%' }"></div>
            </div>
            <span class="stat-value">{{ s.base_stat }}</span>
          </div>
        </div>
      </div>

      <button @click="router.back()" class="back-button">Volver</button>
    </div>
  </div>
  <div v-else-if="error" class="error">
    <p>Error al cargar el Pokémon.</p>
    <NuxtLink to="/search">Volver a buscar</NuxtLink>
  </div>
  <div v-else class="loading">Cargando...</div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const api = useApi();

// SSR Data Fetching
const { data: item, error } = await useAsyncData(
  `pokemon-${route.params.id}`,
  () => api.get(`pokemon/${route.params.id}`)
);

// Set page meta for SEO
useHead({
  title: item.value ? `${item.value.name.toUpperCase()} - Col·leccionista` : 'Detalle Pokémon',
  meta: [
    { name: 'description', content: item.value ? `Detalles de ${item.value.name}` : 'Detalles del Pokémon' }
  ]
});
</script>

<style scoped>
.detail-page {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  text-transform: capitalize;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.images {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  background-color: var(--color-background-soft);
  border-radius: 12px;
  padding: 1rem;
}

.images img {
  width: 150px;
  height: 150px;
  image-rendering: pixelated;
}

.types {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.type-badge {
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-transform: capitalize;
  font-weight: bold;
}

.stat-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.stat-name {
  width: 120px;
  text-transform: capitalize;
  font-weight: 500;
}

.stat-bar-container {
  flex-grow: 1;
  height: 10px;
  background-color: var(--color-background-soft);
  border-radius: 5px;
  margin: 0 1rem;
  overflow: hidden;
}

.stat-bar {
  height: 100%;
  background-color: var(--color-accent);
  border-radius: 5px;
}

.stat-value {
  width: 30px;
  text-align: right;
  font-weight: bold;
}

.back-button {
  display: block;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  background-color: transparent;
  border: 1px solid var(--color-text);
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.back-button:hover {
  background-color: var(--color-text);
  color: var(--color-background);
}

.error, .loading {
  text-align: center;
  margin-top: 4rem;
  font-size: 1.5rem;
}
</style>
