<template>
  <HeroCenterText/>
  <FreeEstimate/>
  <SuperiorPainting/>
  <OurProcess/>
  <Rejuvinate/>
  <ContactPage/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import HeroCenterText from '@/components/HeroCenterText.vue';
import FreeEstimate from '@/components/FreeEstimate.vue';
import SuperiorPainting from '@/components/SuperiorPainting.vue';
import OurProcess from '@/components/OurProcess.vue';
import Rejuvinate from '../components/Rejuvinate.vue';
import ContactPage from '../components/ContactPage.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HeroCenterText,
    FreeEstimate,
    SuperiorPainting,
    OurProcess,
    Rejuvinate,
    ContactPage,
    Footer
  }
}
</script>