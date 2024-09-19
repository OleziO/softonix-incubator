<template>
  <div class="font-[Inter] relative overflow-hidden rounded-[20px]">
    <img
      :src="src"
      :alt="src"
      class="w-full h-full object-cover "
    >
    <div
      v-if="theme === EThemes.light"
      class="flex justify-center items center
      absolute left-6 top-6 bg-white-standart text-primary rounded-xl px-2.5 py-1 min-w-11 text-xs "
    >
      {{ rate }}
    </div>
    <div
      v-else-if="theme === EThemes.dark"
      class="flex justify-center items center
      absolute left-6 top-6 text-white-standart bg-primary rounded-xl px-2.5 py-1 min-w-11 text-xs "
    >
      {{ rate }}
    </div>
    <div class="absolute left-6 bottom-6 text-white-standart">
      <h4 class="text-xl font-semibold mb-2.5">{{ title }}</h4>
      <p class="text-xs">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
enum EThemes {
  light = 'light',
  dark = 'dark'
}
type TTheme = keyof typeof EThemes
defineProps<{
  title: string
  text: string
  src: string
  rate: number
  theme: TTheme
}>()
</script>
