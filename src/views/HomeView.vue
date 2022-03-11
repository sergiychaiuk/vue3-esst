<template>
  <section class="container">
    <range-selector :products="filteredProducts" v-model="max" />
    <product-list :products="filteredProducts" />
  </section>
</template>

<script>
import RangeSelector from '@/components/RangeSelector'
import ProductList from '@/components/ProductList'

export default {
  name: 'HomeView',
  data() {
    return {
      max: 50,
      products: []
    }
  },
  components: {
    RangeSelector,
    ProductList
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
  },
  computed: {
    filteredProducts() {
      return this.products.filter(item => item.price < Number(this.max))
    }
  }
}
</script>
