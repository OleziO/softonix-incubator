<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="rounded-sm border border-gray focus:border-blue-500 text-sm p-1 block w-full"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>
defineProps<{
  placeholder?: string
  modelValue?: string
}>()

defineEmits(['update:modelValue'])
</script>
