<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">HALSEY</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/login">login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/register">register</router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
        <button @click="carrito" class="btn btn-outline-dark">Carrito {{cartItemCount}}</button>
    </nav>
</template>
  
<script>
export default {

    methods: {
    carrito(){
      this.$router.push('/cart')
    }
  },
  computed: {
    cartItemCount (){
      return this.$store.getters.cartItemCount;
    }
  }
};

</script>
  
<style scoped>

</style>
  