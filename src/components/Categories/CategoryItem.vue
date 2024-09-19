<template>
  <div class="text-center">
    <img :src="`/src/assets/img/categories/${item}.png`" :alt="`${item} image`" class="mb-5">
    <p class="font-medium text-2xl text-primary">{{ item }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  item: string
}>()
</script>
