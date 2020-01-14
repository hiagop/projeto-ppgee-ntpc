<template>
  <q-page padding>
    <div class="container">
      <div class="text-center text-h4">Muito Obrigado!</div>
      <div class="text-justify text-body1">
        {{ user.profile.first_name }}, agradecemos pela sua participação nesta
        pesquisa de doutorado. Este grupo de pesquisa, como um todo, agradece
        imensamente por sua atenciosa colaboração no preenchimento do Inventário
        de Depressão de Beck II, e pela sua permissão para coleta de dados da
        sua rede social, Facebook. Caso você, participante, tenha interesse em
        visualizar os dados da sua coleta, estamos disponibilizando-a, uma vez
        que se identifique diretamente com a doutoranda Priscila Siqueira
        Aranha, responsável pela análise de dados que está sendo proposta. Você
        pode se direcionar a Sala 26 - LPRAD no Campus Profissional da
        Universidade Federal do Pará, no Prédio de Engenharia Elétrica e
        Computação. Telefone para contato: 3201-8112.
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
.container {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-items: center;

  max-width: 100ch;

  margin: auto;
  padding: 50px;
}

.container > div {
  margin-bottom: 20px;
}
</style>
