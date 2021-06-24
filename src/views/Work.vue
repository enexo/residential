<template>
  <OurWork/>
  <ContactPage/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import OurWork from '../components/OurWork.vue';
import ContactPage from '../components/ContactPage.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Work',
  components: {
    ContactPage,
    Footer,
    OurWork,

  }
}
</script>