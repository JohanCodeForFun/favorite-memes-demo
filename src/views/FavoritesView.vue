<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore';
const favoriteStore = useFavoriteStore();
</script>

<template>
  <main>
    <h1>Favorite Memes</h1>
    <button @click="favoriteStore.$reset()">Remove all favorites</button>
    <div v-if="favoriteStore.count === 0">
      <p>No favorites yet!</p>
      <p>Add some :)</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="favorite in favoriteStore.favorite" :key="favorite.id">
          <span>{{ favorite.name }}</span>
          <img :src="favorite.url" :alt="favorite.name">
          <button @click="favoriteStore.removeFavorite(favorite.id)">Remove favorite</button>
        </li>
      </ul>
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