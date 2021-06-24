<template>
<div id="up" class="bg-center  bg-no-repeat bg-center bg-cover relative">
    <!-- Overlay Background + Center Control -->
    <!-- <div class="upsize h-screen bg-opacity-50 bg-black flex items-center justify-center" style="background:rgba(0,0,0,0.5);"> -->
      <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div class="">
            <ContactForm/>
        </div>
        
            <div class="my-4 align-middle">
                <p class="font-extrabold text-2xl xs:text-2xl md:text-2xl sm:text-xl text-white text-center lg:pt-20 md:pt-20">
                    <a href="tel:9375556374">(937)-555-6374</a><br>
                    <a href="mailto:service@residentialpainting.net">service@residentialpainting.net</a> 
                </p>
            </div>
      </div>
</div>
</template>

<script>
// @ is an alias to /src
import ContactForm from '@/components/ContactForm.vue';


export default {
  name: 'ContactPage',
   components: {
     ContactForm,
    
   }
}
</script>
<style scoped>
#up {
  background-image: url("../assets/images/exterior-home12.jpeg");
  
}
</style>