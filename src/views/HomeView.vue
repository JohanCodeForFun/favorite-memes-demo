<script setup lang="ts">
  import { useMemeStore } from "../stores/memeStore";
  import { useFavoriteStore } from "@/stores/favoriteStore";
  import { ref } from "vue";

  const memeStore = useMemeStore();
  const favoriteStore = useFavoriteStore();
  let index = ref(0);

  memeStore.fetchMemes();
  </script>

<template>
  <main>
    <h1>Home for Favorite Memes</h1>
    <br>
    <div>
      <h2>{{ memeStore.memes[index].name }}</h2>
      <img :src="memeStore.memes[index].url" :alt="memeStore.memes[index].name">
    </div>
    <div>
      <button @click="index--">Previous</button>
      <button @click="favoriteStore.addFavorite(memeStore.memes[index])">Save meme</button>
      <button @click="index++">Next</button>
    </div>
  </main>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  max-height: 500px;
}
</style>