<template>
  <ul class="w-full flex gap-8 justify-between">
    <li v-for="item in items" :key="item">
      <CategoryItem :item="item" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CategoryItem from './CategoryItem.vue'

const items = ref(['Beach', 'Desert', 'Mountain', 'Temple', 'Tower', 'Pyramid'])
</script>
