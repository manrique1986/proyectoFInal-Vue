<template>

    <div>
      <h3>carrito</h3>
      <ul>
        <li v-for="item   in cartItems" :key="item.id">
          {{ item.titulo }}  {{ item.precio }}
          <button @click="eliminar( )">x</button>
        </li>
      </ul>
      <h4> total ={{cartTotal || 0 }}</h4>
    </div>
  </template>
  
  <script>
  export default {
    name: "CarritoVue",
    data(){
      return {
        products: [],
        cart: [],
      }
    },
    computed: {
      cartItems() {
        return this.$store.getters.productsOnCart;
      },
      cartTotal() {
        return this.$store.getters.cartTotal;
      }
    },
    methods:{
      eliminar(){
        this.$store.dispatch("deleteProductCart", )   }
    }
  };
  </script>
  
  <style scoped></style>