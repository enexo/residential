<template>
  <ContactPage/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import ContactPage from '../components/ContactPage.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Conact',
  components: {
    ContactPage,
    Footer
  }
}
</script>