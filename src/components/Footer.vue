<template>
<div class="">
      <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        <div class="mx-10">
            <router-link to="/" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
                <img src="../assets/images/logo.svg" alt="logo">
                <p class="my-10">
                    Locally owned and operated, Creative Finishes serves all of the Dayton metro area
                </p>
            </router-link>
        </div>
        <div class="mx-10 my-8">
            <h3 class="font-bold ">Menu</h3>
            <span>
               <router-link to="/" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Home</router-link>
               <hr>
                <router-link to="/services" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Services</router-link>
               <hr>
               <router-link to="/work" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Our Work</router-link>
               <hr>
               <router-link to="/about" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">About Us</router-link>
               <hr>
               <router-link to="/contact" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Contact</router-link>
               <hr>
            </span>
        </div>
        <div class=" my-8">
                <p class="font-extrabold text-2xl xs:text-2xl md:text-2xl sm:text-xl text-black text-left">
                    <a href="tel:9375556374">(937)-555-6374</a><br>
                    <a href="mailto:service@residentialpainting.net">service@residentialpainting.net</a> 
                </p>
                <div class="icon-bar inline-flex mt-10">
                    <a href="https://www.facebook.com">
                        <img src="../assets/images/Facebook.svg" alt="facebook" class="social">
                    </a>
                    <a href="https://www.twitter.com">
                        <img src="../assets/images/Twitter.svg" alt="twitter" class="social">
                    </a>
                    <a href="https://www.instagram.com">
                        <img src="../assets/images/Instagram.svg" alt="instagram" class="social">
                    </a>
                    <a href="https://www.pinterest.com">
                        <img src="../assets/images/Pinterest.svg" alt="pinterest" class="social">
                    </a>
                    <a href="https://www.youtube.com">
                        <img src="../assets/images/Youtube.svg" alt="youtube" class="social">
                    </a>
                </div>
        </div>
      </div>
</div>
</template>

<script>
// @ is an alias to /src
import ContactForm from '@/components/ContactForm.vue';


export default {
  name: 'Footer',
   components: {
     
    
   }
}
</script>
<style scoped>
.social {
    max-height: 50px;
}
</style>