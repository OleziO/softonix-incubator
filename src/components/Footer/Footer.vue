<template>
  <footer class="w-full px-36 font-[Inter] flex justify-between mb-20">
    <div>
      <Logo class="mb-7" />
      <p class="text-grey mb-10">
        Enjoy the touring <br>
        with Salty
      </p>
      <div class="flex justify-between">
        <a href="">
          <Facebook />
        </a>
        <a href="">
          <Instagram />
        </a>
        <a href="">
          <Twitter />
        </a>
      </div>
    </div>
    <div class="flex gap-28">
      <FooterNavItem v-for="item in links" :key="item.title" :title="item.title" :links="item.links" />
    </div>
  </footer>
</template>

<script setup>
import Logo from '@/assets/img/Logo.svg'
import Facebook from '@/assets/img/footer/Facebook.svg'
import Instagram from '@/assets/img/footer/Instagram.svg'
import Twitter from '@/assets/img/footer/Twitter.svg'

const links = ref([{
  title: 'Resources',
  links: ['Download',
    'Help Center',
    'Guide Book',
    'App Directory']
},
{
  title: 'Travellers',
  links: ['Why Travellers',
    'Enterprice',
    'Customer Stories',
    'Instagram post']
},
{
  title: 'Company',
  links: ['Travelling',
    'About Locato',
    'Success',
    'Information']
},
{
  title: 'Get App',
  links: ['App Store',
    'Google Play Store']
}])

</script>
