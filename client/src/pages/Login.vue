<template>
  <q-page class="flex flex-center">
    <div
      class="fit column items-center content-center justify-center q-col-gutter-md"
    >
      <!-- TODO: apresentar um convite ao participante antes de continuar para o questionário -->
      <div class="col">
        Antes de continuar leia atentamente aos
        <span
          ><router-link to="/termos-de-servico"
            >Termos de Serviço</router-link
          ></span
        >
        e aos
        <span
          ><router-link to="/termos-de-privacidade"
            >Termos de Privacidade</router-link
          ></span
        >.
      </div>
      <div class="col">
        <q-checkbox
          v-model="accepted"
          label="Li e aceito os Termos de Serviço e os Termos de Privacidade"
        />
      </div>
      <div class="col">
        <q-btn
          elevated
          :disable="!accepted"
          size="lg"
          icon="mdi-facebook-box"
          label="Entrar com Facebook"
          class="bg-primary text-white"
          to="/bdi"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
// const facebookProvider = new this.$auth.FacebookAuthProvider();
// facebookProvider.addScope("");

export default {
  name: "Login",
  data() {
    return { accepted: false, loggedIn: false };
  },
  methods: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    }
  }
};
</script>

<style></style>
