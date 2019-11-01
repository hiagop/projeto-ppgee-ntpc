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
        <q-btn elevated class="bg-blue-5" label="Login" to="/login" />
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
  }
};
</script>

style.<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
