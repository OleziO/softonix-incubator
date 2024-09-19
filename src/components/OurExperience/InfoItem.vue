<template>
  <li class="bg-white-2 flex flex-col justify-center p-7 font-[Inter] rounded-[14px]">
    <h3 class="font-semibold text-secondary text-5xl mb-5">{{ kFormatter(title) }}+</h3>
    <p class="text-xl text-extra-ight-grey-2">{{ text }}</p>
  </li>
</template>

<script lang="ts" setup>
const kFormatter = (n: number) => {
  const formatter = new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short'
  })

  return formatter.format(n)
}
defineProps<{
  title: number
  text: string
}>()
</script>
