import { defineStore } from "pinia";
type Meme = {
  id: string;
  name: string;
  url: string;
}

export const useFavoriteStore = defineStore('favoriteStore', {
  state: () => ({
    favorites: [] as Meme[]
  }),
  actions: {
    addFavorite(meme: Meme) {
      const exists = this.favorites.find(fav => fav.id === meme.id)
      if (!exists) {
        this.favorites.push({ ...meme })
      }
    },
    removeFavorite(id: string) {
      this.favorites = this.favorites.filter(meme => meme.id !== id);
    }
  },
  getters: {
    favoritesCount(): number {
      return this.favorites.length;
    }
  }
})