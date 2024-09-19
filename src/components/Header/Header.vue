<template>
  <header class="w-full max-w-xl py-6 px-36 flex justify-between mb-2.5">
    <div class="flex items-center">
      <Logo class="mr-20" />
      <Nav>
        <NavItem link="">Home</NavItem>
        <NavItem>About us</NavItem>
        <NavItem>Destinations</NavItem>
        <NavItem>Tours</NavItem>
        <NavItem>Blog</NavItem>
      </Nav>
    </div>
    <Button
      type="outline" class="gap-[6px] px-9 py-5 group
      rounded-3xl border-secondary text-secondary hover:bg-secondary
    hover:text-white-standart"
    >
      Book Now <Telegram class="group-hover:fill-white-standart" />
    </Button>
  </header>
</template>

<script setup>
import Logo from '@/assets/img/Logo.svg'
import Telegram from '@/assets/img/Telegram.svg'
</script>
