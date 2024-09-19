<template>
  <div class="font-[Inter]">
    <img
      :src="`/src/assets/img/destinations/${item.title}.png`"
      :alt="`${item} image`"
      class="w-[362px] h-[252px] mb-6 object-cover rounded-2xl mx-3 mt-3"
    >
    <div class="px-6 pb-11">
      <h4 class="font-semibold text-2xl text-primary mb-4">{{ item.title }}</h4>
      <p class="text-sm text-grey mb-9">{{ item.text }}</p>

      <div class="w-full flex justify-between items-center mb-9">
        <p class="flex items-center text-sm text-grey">
          <span class="font-semibold text-2xl text-primary">${{ item.price }}</span> / Person
        </p>
        <Button
          type="outline" class="text-sm text-primary
          border-2 border-primary hover:bg-primary hover:text-white-standart p-3 min-w-24 rounded-[46px]"
        >
          Book Now
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '../common/Button.vue'

interface IDestinationItem {
  title: string
  text: string
  price: number
}

defineProps<{
  item: IDestinationItem
}>()
</script>
