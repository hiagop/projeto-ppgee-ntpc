<template>
  <q-page class="flex flex-center">
    <div
      class="fit column items-center content-center justify-center q-col-gutter-md"
    >
      <div class="col">
        Antes de continuar leia atentamente aos
        <span
          ><router-link to="/termos-de-servico"
            >Termos de Serviço</router-link
          ></span
        >
        e aos
        <span
          ><router-link to="/termos-de-servico"
            >Termos de Serviço</router-link
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
          label="Login com Facebook"
          class="bg-primary text-white"
          to="/bdi"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
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
