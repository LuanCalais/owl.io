<template>
  <div class="formulario" v-if="!isExistUser">
    <form name="form.cad">
      <div class="form-group row">
        <label for="inputNmae" class="col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            v-model="user.name"
            type="text"
            class="form-control"
            name="name"
            id="userNamer"
            maxlength="50"
            placeholder="Entre com o seu nome"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputEmail3" class="col-form-label">E-mail</label>
        <div class="col-sm-10">
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            name="email"
            id="email"
            maxlength="50"
            placeholder="fulano@email.com"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-form-label">Senha</label>
        <div class="col-sm-10">
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            name="senha"
            id="senha"
            placeholder="********"
          />
        </div>
      </div>

      <div class="form-group row">
        <div class="botao-logar">
          <button
            type="submit"
            class="btn btn-block btn-outline-dark"
          >
            Cadastrar <i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
    </form>
  </div>

  <div class="formulario" v-else>
    <form name="form.log">
      <div class="form-group row">
        <label for="inputEmail3" class="col-form-label">E-mail</label>
        <div class="col-sm-10">
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="fulano@email.com"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-form-label">Senha</label>
        <div class="col-sm-10">
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            name="senha"
            id="senha"
            placeholder="********"
          />
        </div>
      </div>

      <div class="form-group row">
        <div class="botao-logar">
          <button type="submit" class="btn btn-block btn-outline-dark">
            Logar <i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>

      <div class="form-group row">
        <div class="forgot-password">
          Esqueceu sua senha? Clique <a href="#">aqui</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import UserModel from "../model/UserModel";

export default {
  data() {
    return {
      user: new UserModel(),
    };
  },

  props: {
    isExistUser: {
      required: true,
      default: false,
    },
  },

};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
