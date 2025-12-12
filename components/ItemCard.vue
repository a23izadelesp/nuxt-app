<template>
  <div class="item-card">
    <NuxtLink :to="`/item/${item.id}`" class="card-link">
      <div class="image-container">
        <img :src="item.sprites?.front_default" :alt="item.name" />
      </div>
      <h3>{{ item.name }}</h3>
    </NuxtLink>
    <div class="actions">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.item-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
}

.image-container {
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.item-card img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  image-rendering: pixelated; /* For a sharper pixel art look */
}

.item-card h3 {
  margin: 0;
  text-transform: capitalize;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
}

.card-link {
  text-decoration: none;
  color: inherit;
  flex-grow: 1;
}

.actions {
  margin-top: 1rem;
}
</style>
