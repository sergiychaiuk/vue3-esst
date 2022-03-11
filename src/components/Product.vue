<template>
  <div class="col-2 m-auto">
    <button
      @click="$parent.$parent.$parent.$emit('addItem', item)"
      class="btn btn-success"
    >
      +
    </button>
  </div>
  <div class="col-sm-4">
    <img class="img-fluid d-block" :src="item.image" :alt="item.name" />
  </div>
  <div class="col">
    <h3 class="text-primary">{{ item.name }}</h3>
    <p class="mb-0">{{ item.description }}</p>
    <div class="h5 float-right">
      <span class="label"></span>
      <curr :amt="item.price"></curr>
    </div>
  </div>
</template>

<script>
import Curr from '@/components/Curr'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  components: {
    Curr
  },
  props: ['item'],
  emits: ['addItem']
}
</script>

<style scoped></style>
