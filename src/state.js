import { reactive } from 'vue';

export const state = reactive ({

  message: 'this is a test',

  myMethod(){
    // Actions that change the state (your methods)
  },
  myOtherMethod(){
    
  }
})