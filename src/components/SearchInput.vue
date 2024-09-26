<template>
  <AppInput :model-value="model" placeholder="What are we looking for?" @update:model-value="debouncedSearch" />
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import AppInput from './AppInput.vue'

const model = defineModel<string>({ required: true })

const debouncedSearch = useDebounceFn((event) => {
  model.value = event.trim()
}, 500)

</script>
