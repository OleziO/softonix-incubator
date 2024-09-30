<template>
  <div ref="multiSelectRef" class="w-full relative">
    <p class="text-gray">{{ title }}</p>
    <label class="relative">
      <input
        type="text"
        readonly
        :placeholder="selectedModel.length ? '' : placeholder || ''"
        class="rounded-sm border border-gray focus:border-blue-500 text-xs p-2 w-full"
        @focus="isFiltersVisible = true"
      >

      <MultiSelectTabs v-model="selectedModel" />
    </label>

    <div
      v-if="isFiltersVisible"
      ref="target"
      class="absolute z-10 shadow bg-white rounded-sm pl-1
      left-0 w-full max-h-40 overflow-y-auto top-[calc(100%+5px)]"
    >
      <button
        v-for="item of items"
        :key="item.name"
        type="button"
        class="truncate p-[2px] text-gray w-full text-left"
        :class="{'bg-gray-light text-black': isSelected(item)}"
        @click="onFilterClick(item)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import MultiSelectTabs from './MultiSelectTabs.vue'

export interface IMultiSelectItem {
  name: string
  value: string
}

defineProps<{
  title?: string
  placeholder?: string
  items: IMultiSelectItem[]
}>()

const selectedModel = defineModel<IMultiSelectItem[]>({ required: true })

const isFiltersVisible = ref(false)
const multiSelectRef = ref()
const target = ref(null)

onClickOutside(multiSelectRef, () => {
  isFiltersVisible.value = false
})

function onFilterClick (item: IMultiSelectItem) {
  const index = selectedModel.value.indexOf(item)

  if (index === -1) {
    selectedModel.value.push(item)
  } else {
    selectedModel.value.splice(index, 1)
  }
}

function isSelected (item: IMultiSelectItem) {
  return selectedModel.value.includes(item)
}

</script>
