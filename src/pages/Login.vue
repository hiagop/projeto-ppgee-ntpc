<template>
  <q-page>
    <div class="container">
      <div class="col">
        Gostaríamos de convidar você, aluno de pós graduação da UFPA a colaborar
        com a presente pesquisa. Sua participação é muito importante para nos
        ajudar a compreender como o comportamento em redes sociais pode revelar
        traços de depressão e/ou ansiedade.
      </div>
      <div>
        Ao efetuar o login, você estará nos dando permissão para ler suas
        publicações. Mas não se preocupe! Todos os dados coletados serão
        armazenados de forma segura, e serão utilizados estritamente para fins
        científicos.
      </div>
      <div>
        Depois de entrar, será apresentado um questionário utilizado por
        profissionais da psicologia como auxílio para a identificação de traços
        depressivos. Siga às instruções e preencha-o com atenção.
      </div>
      <!-- TODO: apresentar um convite ao participante antes de continuar para o questionário -->
      <div>
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
      <div>
        <q-checkbox
          v-model="accepted"
          label="Li e aceito os Termos de Serviço e os Termos de Privacidade"
        />
      </div>
      <div>
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
      console.log("Login page mutation subscription log:", mutation);
      if (mutation.type === "setUser") {
        const path = mutation.payload.filledQuestionnaire ? "/result" : "/bdi";
        this.$router.push({ path });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  // align-self: center;
  justify-items: center;
  align-items: center;

  max-width: 100ch;

  font-size: 14pt;

  margin: auto;
  padding: 50px;
}

.container > div {
  margin-bottom: 10px;

  text-align: justify;
}

.center {
  // text-align: center;
  align-self: center;
}
</style>
