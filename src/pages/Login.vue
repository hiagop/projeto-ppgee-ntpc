<template>
  <q-page class="flex flex-center">
    <div
      class="fit column items-center content-center justify-center q-col-gutter-md"
    >
      <!-- TODO: apresentar um convite ao participante antes de continuar para o questionário -->
      <div class="col">
        Antes de continuar leia atentamente aos
        <span>
          <router-link to="/termos-de-servico">Termos de Serviço</router-link>
        </span>
        e aos
        <span>
          <router-link to="/termos-de-privacidade"
            >Termos de Privacidade</router-link
          > </span
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
          @click.prevent.once="signin"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data() {
    return { accepted: false };
  },
  methods: {
    signin() {
      this.$store.dispatch("facebookSignIn");
    },
    logout() {
      this.$store.dispatch("logout");
    }
  },
  beforeCreate() {
    this.$store.subscribe(mutation => {
      if (mutation.type === "setUser") {
        if (mutation.payload.filledQuestionnaire) {
          this.$router.push({ path: "/result" });
        }
        this.$router.push({ path: "/result" });
      }
    });
  }
};
</script>

<style></style>
