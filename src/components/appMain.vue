<script>
import ProductCard from './ProductCard.vue';
import { products } from '../products.js';

export default {
  name: 'AppMain',
  components:{
    ProductCard
  },
  data(){
    return{
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
    /* gap:0.3rem; */

    .col-4 {
      @include flex-col-4;
      
    }
  }
}

/* card of the shop */

/* .card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
} */

/* .product{
    position:relative;
    width:25%;
    height:600px;
    margin-bottom:75px;
    margin-left: 10px;
    margin-right:10px;
} */

/* list of products with corresponding images */

/* .relaxed_fit{
    background-image: url(..//img/1.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.relaxed_fit:hover{
    background-image: url(..//img/1b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.roses_tee{
    background-image: url(..//img/2.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.roses_tee:hover{
    background-image: url(..//img/2b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.colori_pastello{
    background-image: url(..//img/3.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.colori_pastello:hover{
    background-image: url(..//img/3b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.tee_unisex{
    background-image: url(..//img/4.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.tee_unisex:hover{
    background-image: url(..//img/4b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.stripe_bodice{
    background-image: url(..//img/5.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.stripe_bodice:hover{
    background-image: url(..//img/5b.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.maglione_black{
    background-image: url(..//img/6.webp);
    background-size:cover;
    background-repeat: no-repeat;
}

.maglione_black:hover{
    background-image: url(..//img/6b.webp);
    background-size:cover;
    background-repeat: no-repeat;
} */

/* product added parts to the card */

/* .discount{
    color:white;
    background-color:orangered;
    font-weight: bold;
    position:absolute;
    bottom:8%;
    width:50px;
    height:1.5rem;
    text-align: center;
}

.sustainability{
    color:white;
    background-color:green;
    font-weight: bold;
    position:absolute;
    bottom:8%;
    left:52px;
    width:110px;
    height:1.5rem;
    text-align: center;
}

.sustainability2{
    color:white;
    background-color:green;
    font-weight: bold;
    position:absolute;
    bottom:8%;
    left:0px;
    width:110px;
    height:1.5rem;
    text-align: center;
}

#like{
    position:absolute;
    top:2%;
    right:0;
    font-size:1.2em;
    text-align:center;
    background-color: white;
    border:8px solid white;
}

#like:hover{
    fill:black;
} */

/* product info parts of the card */

/* .product_info{
    position:absolute;
    top:100%;
    width:100%;
    font-family:sans-serif;
}

#product_name{
    font-weight:bold;
}

#price{
    font-weight: bold;
    color:red;
}

#original_price{
    color:black;
    text-decoration: line-through;
} */
</style>