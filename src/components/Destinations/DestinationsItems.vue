<template>
  <ul
    class="pb-8 flex gap-8 overflow-x-auto snap-x snap-mandatory snap-always"
  >
    <li
      v-for="item in items" :key="item.title" class="flex-none snap-center
      rounded-lg border-white-standart border-2"
    >
      <DestinationItem :item="item" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DestinationItem from './DestinationItem.vue'

const items = ref([
  { title: 'Mountain Hiking Tour', text: 'Mountain Hiking Tour', price: 89 },
  { title: 'Machu Picchu, Peru', text: 'Machu Picchu, Peru', price: 99 },
  { title: 'The Grand Canyon, Arizona', text: 'Mountain Hiking Tour', price: 70 },
  { title: 'Rome, Italy', text: 'Mountain Hiking Tour', price: 99 }
])
</script>
