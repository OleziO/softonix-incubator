<template>
  <input
    type="text"
    :value="model"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 block w-full"
    @input="model = ($event.target as HTMLInputElement).value"
  >
</template>

<script lang="ts" setup>
const model = defineModel<string>()
</script>
