<template>
  <OurServices/>
  <InteriorPainting/>
  <ExteriorPainting/>
  <ContactPage/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import OurServices from '../components/OurServices.vue';
import InteriorPainting from '../components/InteriorPainting.vue';
import ExteriorPainting from '../components/ExteriorPainting.vue';
import ContactPage from '../components/ContactPage.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Services',
  components: {
    ContactPage,
    Footer,
    OurServices,
    InteriorPainting,
    ExteriorPainting
  }
}
</script>