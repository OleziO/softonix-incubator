<script setup lang="ts">
import HeaderLayout from './layouts/HeaderLayout.vue'
</script>

<template>
  <div class="max-w-[1440px]">
    <HeaderLayout>
      <RouterView />
    </HeaderLayout>
  </div>
</template>
