<template>
  <navbar :cart="cart" />
  <div class="container">
    <router-view @addToCart="addToCart" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  data() {
    return {
      cart: []
    }
  },
  components: {
    Navbar
  },
  methods: {
    addToCart(product) {
      this.cart.push(product)
    }
  }
}
</script>

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
