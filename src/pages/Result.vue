<template>
  <q-page padding>
    <div class="container">
      <div class="title text-center text-h4">Muito Obrigado!</div>
      <div class="message text-justify text-body1">
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
  display: grid;
  grid-template-rows: 2fr 3fr;
  grid-template-columns: repeat(3, 1fr);

  align-items: center;
  justify-items: center;
}

.title {
  grid-row: 1/2;
  grid-column: 2/3;
}

.message {
  grid-row: 2/3;
  grid-column: 2/3;
}

.score {
  background-color: #dddddd;
  border-radius: 50px;
  padding: 25px;
  margin: 10px;
}
</style>
