<template>
  <section class="flex justify-between gap-40 pl-20 pr-36 mb-40">
    <img :src="OurExperience" alt="Our Experience Image">
    <div>
      <h4 class="font-[Inter] font-semibold text-secondary text-xl mb-5">Our Experience</h4>
      <h3 class=" text-primary text-6xl mb-5">Our Stories Have Adventures</h3>
      <p class="text-grey mb-10">
        We are experienced in bringing adventures to stay their <br>
        journey, with all outdoor destinations in the world as our <br>
        specialties. Start your adventure now! Nature has already <br>
        called you!
      </p>
      <InfoItems />
    </div>
  </section>
</template>

<script setup>
import OurExperience from '@/assets/img/OurExperience.png'
import InfoItems from './InfoItems.vue'
</script>
