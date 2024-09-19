<template>
  <button
    v-if="type === EButtonTypes.outline" class="font-[Poppins] font-medium
    border-solid border-2 flex justify-center items-center"
  >
    <slot />
  </button>
  <button v-else-if="type === EButtonTypes.standart">
    <slot />
  </button>
</template>

<script lang="ts" setup>
enum EButtonTypes {
  outline = 'outline',
  standart = 'standart'
}

type TButton = keyof typeof EButtonTypes

defineProps<{
  type: TButton
}>()
</script>
