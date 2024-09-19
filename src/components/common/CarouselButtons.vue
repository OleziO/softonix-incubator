<template>
  <div class="flex gap-4">
    <Button
      type="outline" :class="`text-xs w-${size} h-${size}
    text-primary border-primary rounded-full hover:text-white-standart hover:bg-primary`"
    >
      {{ "<" }}
    </Button>
    <Button
      type="outline" :class="`text-xs w-${size} h-${size}
    text-primary border-primary rounded-full hover:text-white-standart hover:bg-primary`"
    >
      {{ ">" }}
    </Button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: string
}>()
</script>
