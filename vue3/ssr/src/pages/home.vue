<template>
  <Bar msg="home bar"></Bar>
  <Count></Count>
  <suspense>
    <template #default>
      <Cat></Cat>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
  <FooterComponent msg="home footer"></FooterComponent>
</template>

<script setup lang="ts">
import Bar from '../components/Bar.vue'
import FooterComponent from '../components/Footer.vue'
import Content from '../components/Content.vue'
import Cat from '../components/Cat.vue'
import Count from '../components/Count.vue'



</script>

<style>
.cat-image {
  margin: 1rem;
  width: 20rem;
}
</style>
