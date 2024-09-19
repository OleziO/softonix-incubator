<template>
  <section
    class="w-full flex justify-between gap-40 items-center pl-36 pr-32 mb-36"
  >
    <div>
      <h1 class="font-[Sen] font-bold text-8xl leading-3xl text-primary mb-7">
        Discover the Best Lovely Places
      </h1>
      <p class="text-lgleading-7 text-grey mb-11">
        Plan and book your perfect trip with expert advice, travel <br>
        tips, destination information and inspiration from us.
      </p>
      <div
        class="flex w-full gap-14 justify-between items-center rounded-[38px] bg-white py-3 pl-6 pr-5"
      >
        <div class="flex">
          <SearchItem
            title="Where"
            text="Center Point, London"
            class="mr-9 pl-3"
          >
            <template #icon>
              <Location />
            </template>
          </SearchItem>
          <SearchItem
            title="Date"
            text="09th March,2021"
            class="pl-9 border-l border-solid border-light-grey"
          >
            <template #icon>
              <Date />
            </template>
          </SearchItem>
        </div>

        <Button
          type="standart"
          class="flex justify-center items-center bg-secondary rounded-full
          w-14 h-14"
        >
          <Search />
        </Button>
      </div>
    </div>
    <img :src="HeroSection" alt="Hero Section Image">
  </section>
</template>

<script setup>
import HeroSection from '@/assets/img/HeroSection.png'
import Location from '@/assets/img/Location.svg'
import Date from '@/assets/img/Date.svg'
import Search from '@/assets/img/Search.svg'
import SearchItem from './SearchItem.vue'
</script>
