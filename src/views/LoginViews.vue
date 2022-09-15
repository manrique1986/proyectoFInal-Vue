<template>
    <div class="formulario">
      <form @submit.prevent="validarLogin">
        <h2 class="titulo mb-5">Iniciar sesion</h2>
  
        <div class="row">
          <div class="col-md-12 form-group">
            <input
              v-model="usuario"
              type="text"
              class="email form-control"
              placeholder="usuario"
            />
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-12 form-group">
            <input
              v-model="password"
              type="password"
              placeholder="password"
              class="form-control"
            />
          </div>
        </div>
        <div style="margin-top: 2%">
         
        </div>
  
        <input type="checkbox" class="checkbox" value="" /> recordarme
        <p>olvidaste tu contraseña?</p>
  
        <div>
          <Button class="btn btn-danger">Iniciar sesion</Button>
        </div>
  
      </form>
    </div>
  </template>

<script >

export default {
    name: 'login-views',
    props: [],
    data() {
        return {
            usuario: "",
            password: "",
            
        }
    },
  
    methods:{
    login(product){
      this.$store.dispatch("validarLogin", product)
    }
  }

}
</script>
<style scoped>
    /* .container{
      background-color: #F2EDD7;
    } */
    .sesion {
      margin-top: 50px;
      margin-left: 15px;
      width: 450px;
      text-align: center;
      line-height: 22px;
    }
    .formulario {
      background-color: white;
      width: 80%;
      margin: 4em auto;
      /* transform: translateY(10%); */
      transition: all 300ms;
      padding: 2em;
      border-radius: 5px;
      /* backdrop-filter: blur(50%); */
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
    }
    .titulo {
      margin-bottom: 20px;
    }
    .email {
      margin-bottom: 15px;
    }
    .checkbox {
      margin-top: 15px;
    }
    .hrLinea {
      vertical-align: middle;
      width: 27%;
      display: inline-block;
      border: 1px solid black;
    }
    .hr {
      margin-top: 15px;
    }
    .but1 {
      background-color: #2d3748;
      font-family: Gothic A1;
      font-size: 17px;
      font-weight: 700;
      color: white;
      margin-top: 15px;
    }
    p {
      float: right;
      margin-top: 10px;
      color: #18a0fb;
      cursor: pointer;
    }
    .container {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      padding: 1em;
    }
    h6 {
      float: left;
    }
    .cuentah6 {
      color: #18a0fb;
      margin-left: 5px;
      cursor: pointer;
    }

    .btn{
        display: flex;
        justify-content: center;
    }
    @media screen and (min-width: 480px) {
      .formulario {
        width: 92%;
      }
    }
    @media screen and (min-width: 800px) {
      .formulario {
        width: 50%;
      }
    }
    @media screen and (min-width: 1200px) {
      .formulario {
        width: 35%;
      }
    }
    </style>