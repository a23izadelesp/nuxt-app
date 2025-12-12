<template>
  <form @submit.prevent="onSearch">
    <div class="search-wrapper">
      <input type="text" v-model="query" placeholder="Busca tu Pokémon..." />
      <button type="submit">Buscar</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const query = ref('');
const emit = defineEmits(['search']);

const onSearch = () => {
  emit('search', query.value);
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  max-width: 500px;
  margin: 2rem auto;
}

input {
  flex-grow: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px 0 0 6px;
  background-color: var(--color-surface);
  color: var(--color-text);
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-soft);
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid var(--color-primary);
  border-left: none;
  border-radius: 0 6px 6px 0;
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
}
</style>
