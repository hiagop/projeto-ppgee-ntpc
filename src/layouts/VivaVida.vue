<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-primary text-white q-pa-sm">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar
            size="80px"
            square
            rounded
          >
            <img src="../assets/logo-viva-vida.svg">
          </q-avatar> -->
          <router-link class="text-white" to="/">
            VivaVida
          </router-link>
        </q-toolbar-title>

        <!-- <div>{{ isAuthenticated }}</div> -->
        <q-btn
          elevated
          class="bg-blue-5"
          label="Entrar"
          to="/login"
          v-if="!(isAuthenticated || isLoginPage)"
        />
        <q-btn
          elevated
          class="bg-red-5"
          label="Sair"
          v-if="isAuthenticated"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-10 text-white">
      <q-toolbar> </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    isLoginPage() {
      return this.$route.path === "/login";
    }
  },
  beforeCreate() {
    this.$store.subscribe(mutation => {
      if (mutation.type === "setUser") {
        if (!mutation.payload) {
          this.$router.push({ path: "/" });
        }
      }
    });
  }
};
</script>

style.<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
