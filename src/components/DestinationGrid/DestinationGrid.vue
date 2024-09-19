<template>
  <section class="font-[Inter] flex flex-col items-center px-36">
    <h3 class="text-primary mb-4">Top Destinations</h3>
    <p class="mb-7">
      Sost Brilliant reasons Entrada should be your one-stop-shop!
    </p>
    <ul class="flex gap-4">
      <li v-for="tab in tabsItems" :key="tab">
        <Button
          type="outline"
          class="min-w-24 mb-12 text-sm text-primary
          border-solid border-2 border-primary hover:bg-primary
        hover:text-white-standart p-3 rounded-[46px]"
        >
          {{ tab }}
        </Button>
      </li>
    </ul>
    <div class="max-h-[526px] grid grid-cols-5 grid-rows-2 gap-8">
      <DestinationGridItem
        v-for="item in cardsItems"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        :theme="item.theme"
        :rate="item.rate"
        :src="item.src"
        :class="item.class"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { cardsItems } from './cards-item'

const tabsItems = ['London', 'Bangkok', 'England', 'Singapore', 'Italy']
</script>
