<template>
  <img class="cat-image" :src="asyncData.catImageUrl" />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'

async function getAsyncData() {
  const getCatImagesResult = await axios.get('https://dog.ceo/api/breeds/image/random');

  const catImageUrl = getCatImagesResult?.data?.message ?? '';

  return {
    catImageUrl,
  }
}

// window.__ASYNCDATA__ = await getAsyncData();

const isNode = typeof globalThis.process !== 'undefined' &&
  globalThis.process.versions !== null &&
  globalThis.process.versions.node !== undefined;

let asyncData = reactive({
  catImageUrl: '',
});

// if (!isNode && window.__ASYNCDATA__) {
//   asyncData = reactive(window.__ASYNCDATA__);
// }

// console.log("created catImageUrl", asyncData.catImageUrl);

</script>

<style>
.cat-image {
  margin: 1rem;
  width: 10rem;
}
</style>
