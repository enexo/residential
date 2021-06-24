<template>
  <Coupons/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Coupons from '../components/Coupons.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Specials',
  components: {
    Coupons,
    Footer
  }
}
</script>
