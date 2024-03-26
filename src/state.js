import { reactive } from 'vue';
import axios from 'axios';

/* export global state as an object */
export const state = reactive ({

  message: 'this is a test',

  /* store products here, this is an array of the object state */
  products: [],
  base_products_api_url: 'http://localhost:3000/products',


  /* fetch products from API */
  getProducts: async function(){
    try{
      const response = await axios.get(this.base_products_api_url);
      this.products = response.data;
    }
    catch (error) {
      console.log('errore durante il Fetch', error.message)
    }
  }

  // Actions that change the state (your methods)
  /* myMethod(){
    
  },
  myOtherMethod(){

  } */
})