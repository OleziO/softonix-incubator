<template>
  <div class="text-center">
    <a
      href="#" class="relative mb-5 rounded-[85px]
      before:rounded-[85px] flex text-white-standart before:hidden hover:before:flex
      before:justify-center before:items-center
      before:w-full before:h-full before:absolute before:content-['Visit'] before:bg-[#00000040]"
    >
      <img
        :src="`/src/assets/img/categories/${item}.png`"
        :alt="`${item} image`"
        class="rounded-[85px]"
      >
    </a>

    <p class="font-medium text-2xl text-primary">{{ item }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  item: string
}>()
</script>
