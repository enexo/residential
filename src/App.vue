<template>
  <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
    <div class="mb-2 sm:mb-0 flex flex-row">
      <div class="logo self-center mr-2">
        <router-link to="/"><img class="logo self-center" src="./assets/images/logo.svg" /></router-link>
      </div>
    </div>
    <div class="sm:mb-0 self-center">
      <a href="tel:9375556374">(937) 555-6374</a>
    </div>
    <div class="sm:mb-0 self-center">
      <router-link to="/" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Home</router-link>
      <router-link to="/services" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Services</router-link>
      <router-link to="/work" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Our Work</router-link>
      <router-link to="/specials" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Specials</router-link>
      <router-link to="/contact" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Contact</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
  .logo {
    max-height: 150px;
  }
</style>
