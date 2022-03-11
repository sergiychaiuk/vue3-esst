<template>
  <navbar :cart="cart" />
  <div class="container">
    <router-view :products="products" @addToCart="addToCart" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  data() {
    return {
      cart: [],
      products: []
    }
  },
  components: {
    Navbar
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
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
