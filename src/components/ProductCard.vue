<script>
/* import { products } from '../products'; */

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  data() {
    return {
      hovering: false
    }
  },
  methods: {
    toggleHover(status) {
      this.hovering = status;
    }
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
  <div class="col-4">
    <div class="card">
      <div class="card-header">
        <div @click="product.isInFavorites = !product.isInFavorites" class="favorite-icon">
          <i v-if="product.isInFavorites" class="fa-solid fa-heart"></i>
          <i v-else class="fa-regular fa-heart"></i>
        </div>
        <!-- image -->
        <div @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)">
          <img :src="hovering ? product.backImage : product.frontImage" alt="product.name" class="card-image">
        </div>
      </div>
      <!-- text description -->
      <div class="card-body">
        <p> {{ product.brand }}</p>
        <p> {{ product.name }}</p>
        <p v-if="hasDiscount" class="discount-format"> <span style="color:red; font-weight: 600;">{{ discountedPrice }}
            €</span> <span style="text-decoration: line-through;">{{ product.price }} €</span></p>
        <p v-else> {{ product.price }} €</p>
        <!-- badges -->
        <div v-for="(badge, index) in product.badges" :key="index" class="card-badge"
          :style="{ left: `${2 + index * 24}%` }">
          <p :class="{ 'sostenibilità-badge': badge.type === 'tag', 'discount-badge': badge.type === 'discount' }">{{
          badge.value }}</p>
        </div>
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
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 4px;
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

/* badge, icon */
.favorite-icon {
  background-color: white;
  position: absolute;
  top: 5%;
  right: 3%;

  i {
    margin: 8px;
  }
}

.card-badge {
  position: absolute;
  bottom: 22%;
  font-family: sans-serif;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;

  .sostenibilità-badge {
    padding: 0.6rem;
    background-color: green;
  }

  .discount-badge {
    padding: 0.6rem;
    background-color: red;
  }
}
</style>