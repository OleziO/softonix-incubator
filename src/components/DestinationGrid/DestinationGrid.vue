<template>
  <section class="font-[Inter] flex flex-col items-center px-36 mb-36">
    <h3 class="text-primary mb-4">Top Destinations</h3>
    <p class="mb-7">
      Sost Brilliant reasons Entrada should be your one-stop-shop!
    </p>
    <ul class="flex gap-4">
      <li v-for="item in items" :key="item" class="">
        <Button
          type="outline"
          class="min-w-24 mb-12 text-sm text-primary border-solid border-2
           border-primary hover:bg-primary hover:text-white-standart p-3 rounded-[46px]"
        >
          {{ item }}
        </Button>
      </li>
    </ul>
    <div class="max-h-[526px] grid grid-cols-5 grid-rows-2 gap-8">
      <DestinationGridItem
        title="Vientam" text="Worefall" theme="light"
        :rate="3.5" :src="Card1" class="col-start-1 col-end-2 row-start-1 row-end-2"
      />
      <DestinationGridItem
        title="Vientam" text="Worefall" theme="light"
        :rate="3.5" :src="Card2" class="col-start-1 col-end-2 row-start-2 row-end-3"
      />
      <DestinationGridItem
        title="Vientam" text="Worefall" theme="dark"
        :rate="3.5" :src="Card3" class="col-start-2 col-end-4 row-start-1 row-end-3"
      />
      <DestinationGridItem
        title="Vientam" text="Worefall" theme="dark"
        :rate="3.5" :src="Card4" class="col-start-4 col-end-6 row-start-1 row-end-1"
      />
      <DestinationGridItem
        title="Vientam" text="Worefall" theme="dark"
        :rate="3.5" :src="Card5" class="col-start-4 col-end-5 row-start-2 row-end-3"
      />
      <DestinationGridItem
        title="Vientam" text="Worefall" theme="dark"
        :rate="3.5" :src="Card6" class="col-start-5 col-end-6 row-start-2 row-end-3"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../common/Button.vue'
import Card1 from '@/assets/img/destination-grid/Card1.png'
import Card2 from '@/assets/img/destination-grid/Card2.png'
import Card3 from '@/assets/img/destination-grid/Card3.png'
import Card4 from '@/assets/img/destination-grid/Card4.png'
import Card5 from '@/assets/img/destination-grid/Card5.png'
import Card6 from '@/assets/img/destination-grid/Card6.png'

const items = ref(['London', 'Bangkok', 'England', 'Singapore', 'Italy'])
</script>
