<template>
  <div>
    <div v-for="(item, index) in $store.state.products" :key="index">
      <div class="productos">
        <div class="card" style="width: 18rem">
          <h5 class="card-title text-center">{{ item.titulo }}</h5>
          <img class="img-card" :src="item.imagen" alt="" />
          <!-- <img :src="getImgUrl()" class="card-img-top d-block w-50" :alt="titulo"> -->
          <div class="card-body">
            <p class="card-text">${{ item.precio }}</p>
            <button @click="addToCart()" class="btn btn-success text-center">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: ["product"],
  cart : [],
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        cantidad: 1,
      })
    }
  }
};
</script>

<style scoped>
.productos {
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-top: 40px;
  margin-right: 30px;
  border-radius: 10px;
  box-shadow: 1px 4px 10px 0 brown;
  float: right;
}
.img-card {
  width: 150px;
  height: 150px;
}
.product {
  margin: 75px;
}
</style>
