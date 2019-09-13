<template>
  <q-page padding>
    <q-form class="q-gutter-md">
      <div class="row">
        <div class="col-3">
          <q-input
            label="Nome"
            outlined
          ></q-input>
        </div>
        <div class="col-3">
          <q-input
            label="Sobrenome"
            outlined
          ></q-input>
        </div>
      </div>
      <q-btn
        class="bg-primary text-white"
        type="submit"
      >Enviar</q-btn>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
