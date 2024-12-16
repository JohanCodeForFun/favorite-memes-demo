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

  const count = computed(() => {
    return favorite.value.length
  });

  return { 
    addFavorite,
    favorite,
    count,
   }
})
