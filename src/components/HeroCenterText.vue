<template>
  <div id="up" class="bg-center  bg-no-repeat bg-center bg-cover h-screen relative">
    <!-- Overlay Background + Center Control -->
    <div class="upsize h-screen bg-opacity-50 bg-black flex items-center justify-center" style="background:rgba(0,0,0,0.5);">
      <div class="mx-2 text-left">
        <h2 class="text-gray-200 font-extrabold text-2xl xs:text-2xl md:text-2xl leading-tight">
          <span class="text-white">Residential Interior & Exterior Painting</span> <br> in Dayton, Ohio
        </h2>
        <div class="inline-flex">
          <router-link to="/contact" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
            <button class="text-white bg-blue-600 py-4 px-4 font-bold text-2xl mt-5 rounded-lg">Contact</button>
          </router-link>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroCenterText"
}
</script>

<style scoped>
#up {
  background-image: url("../assets/images/hero.png");
  max-height: 500px;
}
.upsize {
    max-height: 500px;
}
</style>