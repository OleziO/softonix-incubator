<template>
  <div class="font-[Inter]">
    <h4 class="mb-6 text-primary font-medium"> {{ title }} </h4>
    <nav>
      <ul>
        <li v-for="item in links" :key="item" class="mb-2">
          <a href="" class="text-[#676A6C] text-xs">
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  links: string[]
}>()
</script>
