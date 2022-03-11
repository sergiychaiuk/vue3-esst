<template>
  <nav class="navbar navbar-light sticky-top mr-3">
    <div
      v-if="cart.length"
      class="w-100 navbar-text ml-auto d-flex justify-content-end position-relative"
    >
      <div
        class="mr-auto d-flex align-items-end flex-column bd-highlight mb-3 position-absolute"
      >
        <div class="mb-2">
          <span class="font-weight-bold bg-white">
            <curr :amt="cartTotal"></curr>
          </span>
          <button
            @click="toggleCartMenu"
            class="btn btn-sm btn-success ml-3"
            id="cartDropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <fa icon="shopping-cart" />
            {{ cartQty }}
          </button>
        </div>
        <cart-dropdown :cart="cart" :displayCart="displayCart" />
      </div>
    </div>
  </nav>
</template>

<script>
import Curr from '@/components/Curr'
import CartDropdown from '@/components/CartDropdown'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data() {
    return {
      displayCart: false
    }
  },
  components: {
    Curr,
    CartDropdown
  },
  props: ['cart', 'cartTotal', 'cartQty'],
  methods: {
    toggleCartMenu() {
      this.displayCart = !this.displayCart
    }
  }
}
</script>

<style scoped></style>
