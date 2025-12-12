import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [],
  }),

  actions: {
    addFavorite(item) {
      if (!this.isFavorite(item.id)) {
        this.favorites.push(item);
      }
    },

    removeFavorite(id) {
      this.favorites = this.favorites.filter((f) => f.id !== id);
    },

    toggleFavorite(item) {
      if (this.isFavorite(item.id)) {
        this.removeFavorite(item.id);
      } else {
        this.addFavorite(item);
      }
    }
  },

  getters: {
    isFavorite: (state) => (id) => {
      return state.favorites.some((f) => f.id === id);
    },
  },
});
