import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    usuario: "",
    password: "",
    email: "",
    products: [],
    cart: [],
    usuarios: [],
  },
  getters: {},
  mutations: {
    validarLogin(state) {
      let data = state.find(
        (o) => o.usuario === this.usuario && o.password === this.password
      );
      localStorage.clear();
      if (data) {
        localStorage.setItem("isLogged", "true");
        if (data?.isAdmin) {
          localStorage.setItem("isAdmin", "true");
          this.$router.push("admin");
        } else {
          localStorage.setItem("isAdmin", "false");
          this.$router.push("main");
        }
      }
    },

    obtenerProductos(state, payload) {
      state.products = payload;
    },
    invrementoProduct(state, item) {
      item.cantidad++;
    },
    addProductToCart(state, products) {
      state.cart.push({ id: products.id, cantidad: 1 });
    },
    decrementCOuntaProducto(state, product) {
      product.count--;
    },

    añadir(state, payload) {
      state.usuarios.push(payload);
    },
    deleteProductFromCart(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    async getProducts({ commit }) {
      let resp = await axios.get(
        "https://62e1c00cfa99731d75dbab30.mockapi.io/api/products"
      );
      let data = resp.data;
      commit("obtenerProductos", data);
    },

    async addProductToCart(context) {
      let resp = await axios.get(
        "https://62e1c00cfa99731d75dbab30.mockapi.io/api/carrito"
      );
      let data = resp.data;

      context.commit("addProductToCart", data);
    },

    async addCart(context, carrito) {
      let resp = await axios.post(
        "https://62e1c00cfa99731d75dbab30.mockapi.io/api/carrito",
        carrito
      );

      context.commit("addProductToCart", resp.data);
    },
    async setLogin(context) {
      let resp = await axios.get(
        "https://62e1c00cfa99731d75dbab30.mockapi.io/api/usuarios"
      );
      console.log(resp);
      let data = resp.data;
      context.commit("validarLogin", data);
    },

    async createUser(context, state) {
      const newUser = {
        usuario: state.usuario,
        password: state.password,
        email: state.email,
        isAdmin: false,
      };
      let resp = await axios.post(
        "https://62e1c00cfa99731d75dbab30.mockapi.io/usuarios",
        newUser
      );
      state.usuarios = resp.data;
      this.$router.push("/login");
      context.commit("añadir", resp.data);
    },
  },
  modules: {},
});
