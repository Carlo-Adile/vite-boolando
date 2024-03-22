<script>
/* import { products } from '../products'; */

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  computed:{
    hasDiscount() {
      return this.product.badges.some(badge => badge.type === 'discount')
    },
    discountedPrice(){
      if(this.hasDiscount){
        const discountBadge = this.product.badges.find(badge => badge.type === 'discount');
        const discountPercentage = parseFloat(discountBadge.value) / 100;
        return (this.product.price * (1 - discountPercentage)).toFixed(2);
      }
      else{
        return this.product.price;
      }
    }
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
        <p> {{ product.brand }}</p>
        <p> {{ product.name }}</p>
        <p v-if="hasDiscount"> {{ discountedPrice }} €</p>
        <p v-else> {{ product.price }} €</p>
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
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
}

.card-header {
  width: 100%;
  margin-bottom: -6px;
  img {
    width: 100%;
    object-fit: cover;
  }
}

.card-body{
  color:black;
  padding: 6px;
  line-height: 0.5rem;
}

</style>