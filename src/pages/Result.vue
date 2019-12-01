<template>
  <q-page padding>
    <div
      class="result flex column fit wrap justify-center align-center items-center"
    >
      <div class="text-h4 col-6">Muito Obrigado!</div>
      <div class="text-body1 col-6">
        Agradecemos sua participação, {{ user.profile.first_name }}. Os dados
        coletados, a partir do questionário que você acabou de preencher e da
        permissão concedida para visualizar suas publicações do Facebook, nos
        ajudarão a encontrar uma forma de identificar e ajudar àqueles que
        estejam precisando.
      </div>
      <div class="text-h4 col-6">Sua pontuação é</div>
      <div class="score text-h4 col-6">{{ bdiScore }}</div>
      <div class="text-body1 col-6">
        Esta pontuação não é, e nem deve ser tomada como diagnóstico. Caso tenha
        interesse em saber mais sobre o questionário e a pontuação apresentada,
        recomendamos que procure por um profissional qualificado.
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Result",
  computed: {
    user() {
      return this.$store.getters.user;
    },
    bdiScore() {
      return this.user.bdi
        .map(q => q.answer.value)
        .reduce((total, current) => (total += current), 0);
    }
  }
};
</script>

<style>
.result > div {
  max-width: 400px;
  /* padding: 20px;
  margin: 5px;
  display: block;
  align-content: center;
  justify-content: center; */
}

.score {
  background-color: #dddddd;
  border-radius: 50px;
  padding: 25px;
  margin: 10px;
}
</style>
