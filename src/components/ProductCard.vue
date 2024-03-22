<script>
/* import { products } from '../products'; */

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  computed: {
    hasDiscount() {
      return this.product.badges.some(badge => badge.type === 'discount')
    },
    discountedPrice() {
      if (this.hasDiscount) {
        const discountBadge = this.product.badges.find(badge => badge.type === 'discount');
        const discountPercentage = parseFloat(discountBadge.value) / 100;
        return (this.product.price * (1 - discountPercentage)).toFixed(2);
      }
      else {
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
        <div @click="product.isInFavorites = !product.isInFavorites" class="favorite-icon">
          <i v-if="product.isInFavorites" class="fa-solid fa-heart"></i>
          <i v-else class="fa-regular fa-heart"></i>
        </div>
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

.favorite-icon {
  background-color: white;
  position: absolute;
  top: 5%;
  right: 3%;

  i {
    margin: 8px;
  }
}

.col-4 {
  @include flex-col-4;
}

.card {
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  position: relative;
}

.card-header {
  width: 100%;
  margin-bottom: -14px;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.card-body {
  color: black;
  line-height: 0.3rem;
  padding: 4px;

  >p {
    @include card-format;
  }
}
</style>