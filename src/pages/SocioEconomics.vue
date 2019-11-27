<template>
  <q-page padding>
    <h5>Dados Pessoais</h5>
    <q-form class="q-gutter-sm">
      <div class="row">
        <div class="q-pa-sm" style="max-width: 300px">
          <q-input label="Nome" outlined></q-input>
        </div>
        <div class="q-pa-sm" style="max-width: 300px">
          <q-input label="Sobrenome" outlined></q-input>
        </div>
        <div class="q-pa-sm" style="max-width: 300px">
          <q-input filled v-model="date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    title="Data de Nascimento"
                    v-model="date"
                    @input="() => $refs.qDateProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <q-btn class="bg-primary text-white" type="submit">Enviar</q-btn>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return { date: "2019/09/13" };
  }
};
</script>

<style></style>
