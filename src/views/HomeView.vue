<script setup lang="ts">
  import { useMemeStore } from "../stores/memeStore";
  import { ref } from "vue";

  const memeStore = useMemeStore();
  let index = ref(0);

  memeStore.fetchMemes();
  </script>

<template>
  <main>
    <h1>Home for Favorite Memes</h1>
    <p>{{ memeStore.count }}</p>
    <p>Index: {{ index }}</p>
    <br>
    <div>
      {{ memeStore.memes[index] }}
    </div>
    <div>
      <button @click="index--">Previous</button>
      <button>Save meme</button>
      <button @click="index++">Next</button>
    </div>
  </main>
</template>
