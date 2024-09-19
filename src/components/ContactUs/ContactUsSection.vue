<template>
  <section
    class="px-36flex justify-center items-center"
  >
    <div
      class="bg-contact-us bg-cover bg-center flex
      rounded-[30px] justify-center items-center w-full font-[Inter] text-center"
    >
      <div class="flex flex-col py-18">
        <h3 class="text-primary mb-4 text-[40px]">Sign up to our newsletter</h3>
        <p class="text-grey mb-10">
          Reciev latest news, update, and many other things <br>
          every week.
        </p>
        <Input
          icon="src/assets/img/Telegram2.svg"
          placeholder="Enter Your email address"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-contact-us {
  background-image: url('@/assets/img/contact-us/ContactUs.png');
}
</style>
