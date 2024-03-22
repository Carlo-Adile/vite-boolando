<script>
/* import { products } from '../products'; */

export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
}

</script>

<template>

  <!-- <img :src="product.frontImage" alt="product.name"> -->

  <div class="col-4">
    <div class="card">
      <div class="card-header">
        <img :src="product.frontImage" alt="product.name" class="card-image">
      </div>
      <div class="card-body">
        <h4><!--  {{ product.name }} --> ciao</h4>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import '../assets/scss/partials/structure';

.col-4 {
  @include flex-col-4;
}

.card {
  margin:4px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}

.card-header {
  width: 100%;
  border-bottom: 1px solid #ccc;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.card-body{
  color:black;
  padding: 6px;
}

</style>