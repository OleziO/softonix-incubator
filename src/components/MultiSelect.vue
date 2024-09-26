<template>
  <div class="w-full min-w-[200px] relative flex-1">
    <AppInput
      :model-value="selectedModel.join(', ')" placeholder="Select filter"
      @focus="isFiltersVisible = true"
    />

    <transition name="slide">
      <TransitionBox
        v-if="isFiltersVisible"
        ref="target"
        class="absolute z-10 bg-white shadow
        left-0 w-full max-h-20 overflow-y-auto"
      >
        <button
          v-for="item of items"
          :key="item"
          type="button"
          class="truncate p-2 w-full text-left"
          :class="{'bg-blue-500': isSelected(item)}"
          @click="onFilterClick(item)"
        >
          {{ item }}
        </button>
      </TransitionBox>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppInput from './AppInput.vue'
import { onClickOutside } from '@vueuse/core'

defineProps<{
  items: string[]
}>()

const selectedModel = defineModel<string[]>({ required: true })

const isFiltersVisible = ref(false)
const target = ref(null)

onClickOutside(target, () => { isFiltersVisible.value = false })

function onFilterClick (item: string) {
  const index = selectedModel.value.indexOf(item)

  if (index === -1) {
    selectedModel.value.push(item)
  } else {
    selectedModel.value.splice(index, 1)
  }
}

function isSelected (item: string) {
  return selectedModel.value.includes(item)
}

</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
