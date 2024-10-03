<template>
  <div class="flex-shrink-0">
    <el-avatar
      :src="image"
      alt="Contact Avatar"
      @error="imageHasError = true"
      @load="imageHasError = false"
    >
      {{ imagePlaceholder }}
    </el-avatar>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  image?: string
}>()

const imageHasError = ref(false)

const imagePlaceholder = computed(() => {
  return props.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc.toLocaleUpperCase()
  }, '')
})
</script>
