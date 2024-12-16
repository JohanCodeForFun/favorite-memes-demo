import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type Meme = {
  id: string;
  name: string;
  url: string;
}

export const useFavoriteStore = defineStore('favoriteStore', () => {
  let favorite = ref<Meme[]>([]);

  const addFavorite = (meme: Meme) => {
    const exists = favorite.value.find(fav => fav.id === meme.id)
    if (!exists) {
      favorite.value.push(meme)
    }
  }

  const $reset = () => {
    favorite.value = [];
  }

  const removeFavorite = (id: string) => {
    favorite.value = favorite.value.filter(fav => fav.id !== id)
  }

  const count = computed(() => {
    return favorite.value.length
  });

  return { 
    removeFavorite,
    addFavorite,
    favorite,
    $reset,
    count,
   }
})
