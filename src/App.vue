<template>
  <navbar
    :cart="cart"
    :cart-total="cartTotal"
    :cart-qty="cartQty"
    @delete-item="deleteItem"
  />
  <div class="container">
    <router-view
      :products="products"
      @addItem="addItem"
      @delete-item="deleteItem"
      :cart="cart"
      :cart-total="cartTotal"
    />
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
    addItem(product) {
      let whichProduct
      let existing = this.cart.filter((item, index) => {
        if (Number(item.product.id) === Number(product.id)) {
          whichProduct = index
          return true
        } else {
          return false
        }
      })
      if (existing.length) {
        this.cart[whichProduct].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },
    deleteItem(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--
      } else {
        this.cart.splice(id, 1)
      }
    }
  },
  computed: {
    cartTotal() {
      let sum = 0
      this.cart.forEach(item => {
        sum = sum + item.product.price * item.qty
      })
      return sum
    },
    cartQty() {
      let qty = 0
      this.cart.forEach(item => {
        qty = qty + item.qty
      })
      return qty
    }
  }
}
</script>

<style lang="scss">
$primary: #6f42c1;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
