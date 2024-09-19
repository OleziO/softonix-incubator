<template>
  <section class="flex justify-center gap-44 pl-[203px] pr-[165px]">
    <img :src="AboutUs" alt="About Us Image">
    <div class="font-[Inter]">
      <h3
        class="relative before:absolute before:rounded
        before:left-0 before:-top-2 before:content-[''] before:w-16 before:h-2
      before:bg-gradient-to-r from-light-secondary to-extra-light-secondary text-primary mb-7"
      >
        A customer said About us:
      </h3>
      <div class="py-8 px-7 rounded-xl bg-white-standart">
        <p class="text-grey text-lg mb-7">
          Salty helped me a lot in finding the best place for our <br>
          first outdoor adventure trip. They responded very <br>
          quickly and gave me a detailed account of the place—<br>
          its history, as well as its best features.
        </p>
        <ul class="flex gap-1 mb-4">
          <li v-for="item in 5" :key="item">
            <Star />
          </li>
        </ul>
        <div class="w-full flex justify-between">
          <div>
            <h4 class="mb-2 text-primary font-medium text-xl">Andrew Sarma</h4>
            <p class="text-xs text-grey">Enterpreneur</p>
          </div>
          <CarouselButtons size="10" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutUs from '@/assets/img/about-us/About-us.png'
import Star from '@/assets/img/about-us/Star.svg'
</script>
