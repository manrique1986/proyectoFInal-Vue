import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    titulo: "",
    usuario: "",
    password: "",
    email: "",
    products: [],
    cart: [],
    usuarios: [],
    
  },
  getters: {
    cartItemCount(state) {
      return state.cart.length;
    },

    productsOnCart(state) {
      return state.cart.map((item) => {
        const product = state.products.find(
          (products) => products.id === item.id
        );
        return {
          titulo: product.titulo,
          precio: product.precio,
        };
      });
    },
  
  },
  mutations: {
    validarLogin(state) {
      let data = state.usuarios.find(
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
    incrementoProduct(state, item) {
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
    LOGIN: (state, data) => {
      state.userList = data
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
    async login(context) {
      try {
          let resp = await axios.get('https://62e1c00cfa99731d75dbab30.mockapi.io/api/usuarios')
          context.commit('validarLogin', resp.data);
      } catch (error) {
          console.log(error)
      }
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
