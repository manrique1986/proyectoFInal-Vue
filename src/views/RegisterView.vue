<template>
    <form class="register__form bg-white" @submit.prevent="">
      <h1 class="mb-5">Registro</h1>
      <div class="row mb-3">
        <div class="col">
          <input
            v-model="usuario"
            type="text"
            class="form-control"
            name="reg__nombre"
            placeholder="usuario"
            aria-label="First name"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input
            v-model="email"
            type="email"
            class="form-control"
            name="reg__email"
            placeholder="email"
            aria-label="email"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <input
            v-model="password"
            type="password"
            class="form-control"
            name="reg__password"
            placeholder="password"
            aria-label="password"
          />
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <input
            v-model="confirmPass"
            type="password"
            class="form-control"
            name="reg__confirmar"
            placeholder="Confirmar password"
            aria-label="cofirm-password"
          />
        </div>
      </div>
     
      <Button class="btn btn-danger">Registrarse</Button>
   
    </form>
  </template>

<style scoped>
    .register__form {
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
    .icon__google {
      display: block;
    }
    body {
      background-color: #f2edd7;
      padding-bottom: 100%;
    }
    @media screen and (min-width: 480px) {
      .register__form {
        width: 92%;
      }
    }
    @media screen and (min-width: 800px) {
      .register__form {
        width: 50%;
      }
    }
    @media screen and (min-width: 1200px) {
      .register__form {
        width: 35%;
      }
    }
    </style>