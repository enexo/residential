<template>
  <div class="bg-center  bg-no-repeat bg-center bg-cover elative blueBG">
      <div class="">
        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
            <div class="m-20">
                <h2 class="text-3xl font-bold">Get a Free Estimate</h2>
                <p>Contact Residential Painting today for a free estimate on all your Dayton house painting needs.</p>
            </div>
            <div class="grid justify-items-center align-middle">
                <div class="m-20">
                <router-link to="/contact" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
                    <button class="bg-blue-800 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center text-white">
                        <span>Get your FREE estimate</span>
                        <img src="../assets/images/RightArrow.svg" alt="right arrow" class="ml-1">
                    </button>
                </router-link>
                </div>
            </div>
            
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "FreeEstimate"
}
</script>

<style scoped>
.blueBG {
    background-color: #D6E5EC;
}
</style>