<script>
import ProductCard from './ProductCard.vue';
import { products } from '../products.js';

export default {
  name: 'AppMain',
  components: {
    ProductCard
  },
  data() {
    return {
      products
    }
  }
}
</script>

<template>
  <main id="site_main">
    <div class="container">
      <div class="row">
        <ProductCard :product="product" :key="product.id" v-for="product in products" />

      </div>
    </div>
  </main>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@import '../assets/scss/partials/structure';

#site_main {
  padding-top: 125px;
  padding-bottom: 25px;
  width: 100%;
}

.container {
  @include flex-container;

  .row {
    @include flex-row;

    .col-4 {
      @include flex-col-4;

    }
  }
}
</style>