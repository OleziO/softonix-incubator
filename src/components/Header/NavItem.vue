<template>
  <li>
    <a
      :href="link" class="font-[Poppins] text-blue
        relative before:absolute
        before:left-0 before:bottom-[-8px] before:content-['']
        hover:before:w-4 hover:before:h-1
        before:bg-gradient-to-r from-[#FFD482] to-[#FFBE82] mb-7"
    >
      <slot />
    </a>
  </li>
</template>

<script lang="ts" setup>

defineProps<{
  link: string
}>()
</script>
