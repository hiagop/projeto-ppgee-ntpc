<template>
  <q-layout view="hHh lpr fFf">

    <q-header
      elevated
      class="bg-purple-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar
            size="80px"
            square
            rounded
          >
            <img src="../assets/logo-viva-vida.svg">
          </q-avatar> -->
          VivaVida
        </q-toolbar-title>
        <q-btn
          class="bg-primary"
          elevated
        >Entrar</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-10 text-white"
    >
      <q-toolbar>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>