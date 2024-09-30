<template>
  <ul v-if="tabsModel?.length" class="absolute text-[10px] top-1/2 -translate-y-1/2 left-1 flex gap-0.5">
    <li class="tab relative">
      {{ tabsModel[0].name }}
      <button class="absolute right-1 text-gray" @click="removeTab">
        <IconCross class="w-1.5 h-1.5" />
      </button>
    </li>
    <li v-if="tabsModel.length > 1" class="tab">
      +{{ tabsModel.length - 1 }}...
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { IMultiSelectItem } from './MultiSelect.vue'

const tabsModel = defineModel<IMultiSelectItem[]>({ required: true })

function removeTab () {
  tabsModel.value.splice(0, 1)
}
</script>

<style>
.tab {
  @apply flex justify-center items-center text-blue-600 p-1 pr-4 bg-blue-100 rounded
}
</style>
