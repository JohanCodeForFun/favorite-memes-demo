import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMemeStore = defineStore('memeStore', () => {
  let memes = ref([]);
  let loading = ref(false);

  
  const count = computed(() => {
    return memes.value.length
  });

  const fetchMemes = async () => {
    loading.value = true;


    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();

      console.log(data)

      memes.value = data.data?.memes;
    } catch (error) {
      console.error("Error fetching memes:", error);
    } finally {
      loading.value = false;
    }
  };

  return { 
    memes,
    count,
    loading,
    fetchMemes
   }
})
