<template>
  <ul class="w-full grid grid-cols-3 gap-5">
    <li v-for="item in items" :key="item.text">
      <InfoItem :title="+item.title" :text="item.text" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InfoItem from './InfoItem.vue'

const items = ref([{
  title: 12000,
  text: 'Succes Journey'
},
{
  title: 16,
  text: 'Awards Winning'
},
{
  title: 20,
  text: 'Years Of Experience'
}])
</script>
