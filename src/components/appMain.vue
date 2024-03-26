<script>
import ProductCard from './ProductCard.vue';
import { products } from '../products.js';
import { state } from '../state.js';
import axios from 'axios';

export default {
  name: 'AppMain',
  components: {
    ProductCard
  },
  data() {
    return {
      /* products, */
      state
    }
  },
  mounted(){
    console.log(state);

    console.log(this.state);

    /* axios.get('http://localhost:3000/products')
    .then(response => {
      console.log(response)
      this.products = response.data
    }) */

    /* get data from state object */
    this.state.getProducts(this.state.base_products_api_url)
  }
}
</script>

<template>
  <main id="site_main">
    <div class="container">
      <div class="row">
        
        <!-- i miei prodotti -->
        <!-- <ProductCard :product="product" :key="product.id" v-for="product in products" /> -->

        <!-- use state to get products -->
        <ProductCard :product="product" :key="product.id" v-for="product in state.products" />

        <!-- use state inside the template -->
        <!-- <p> {{  state.message }}</p> -->

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