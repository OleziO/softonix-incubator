<template>
  <div class="truncate my-2.5 font-[Inter]">
    <h3 class="mb-1 text-lg text-primary font-medium">{{ title }}</h3>
    <div class="flex gap-7 items-center">
      <p class="truncate max-w-24 text-xs text-extra-light-grey">{{ text }}</p>
      <slot name="icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  text: string
}>()
</script>
