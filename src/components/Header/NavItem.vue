<template>
  <li>
    <a
      :href="link" class="cursor-pointer font-[Poppins] text-blue
        relative before:absolute
        before:left-0 before:-bottom-2 before:content-['']
        hover:before:w-4 hover:before:h-1
        before:bg-gradient-to-r from-light-secondary to-extra-light-secondary mb-7"
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
