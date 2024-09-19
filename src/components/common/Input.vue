<template>
  <div class="relative">
    <input
      class="w-full h-16 rounded-xl pl-7 pr-20"
      :placeholder="placeholder"
    >
    <div
      class="flex justify-center items-center
    absolute rounded-xl right-4 top-1/2 translate-y-[-50%] w-10 h-10 bg-secondary"
    >
      <img :src="icon" alt="Input Icon" class="p-2.5">
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  placeholder?: string
}>()
</script>
