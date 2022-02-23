<template>
  {{ dollar(amt) }}
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Curr',
  props: ['amt'],
  methods: {
    dollar(value) {
      return '$' + Number.parseFloat(value).toFixed(2)
    }
  }
}
</script>

<style scoped></style>
