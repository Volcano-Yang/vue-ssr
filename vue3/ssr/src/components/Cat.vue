<template>
  <img class="cat-image" :src="catImageUrl" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'


const catImageUrl = ref('');

const response = await axios.get('https://dog.ceo/api/breeds/image/random');

console.log("created response?.data", response?.data);

catImageUrl.value = response?.data?.message ?? '';

console.log("created catImageUrl.value", catImageUrl.value);

</script>

<style>
.cat-image {
  margin: 1rem;
  width: 10rem;
}
</style>
