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
    favorite.value.push(meme)
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
    count,
   }
})
