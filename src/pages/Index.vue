<template>
  <q-page>
    <div class="container">
      <div class="title text-h3 text-justify">PROJETO VIVA VIDA</div>
      <div class="message text-justify text-body1">
        Uma pesquisa está sendo realizada pela aluna de doutorado Priscila
        Siqueira Aranha, com o título "Um Modelo Computacional para Descrever
        Traços Depressivos em Alunos de Pós-Graduação a partir dos seus
        Comportamentos em Redes Sociais" juntamente com o pesquisador, seu
        orientador, Dr. Carlos Renato Lisboa Francês, o coordenador geral do
        Laboratório de Tecnologias Sociais (LTS), do qual a aluna faz parte
        atualmente. Pertencem ao Programa de Pós-Graduação de Engenharia
        Elétrica (PPGEE) da Universidade Federal do Pará. O Laboratório de
        Ecologia do Desenvolvimento (LED) da Psicologia da UFPA e coordenado
        pela Dra. Lília Cavalcante está envolvido nesta pesquisa, como suporte
        especialista e de extrema importância para o desenvolvimento deste
        estudo.
      </div>
      <div class="logo">LOGO</div>
      <div class="btn">
        <q-btn
          elevated
          class="bg-blue-5 text-white"
          size="lg"
          label="Entrar"
          to="/login"
          v-if="!isAuthenticated"
        />
        <q-btn
          elevated
          class="bg-blue-5 text-white "
          size="lg"
          label="Voltar ao  Questionário"
          to="/bdi"
          v-if="isAuthenticated"
        />
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 25vh 40vh 35vh;
  grid-template-columns: 50vw 50vw;

  justify-content: center;
}

.title {
  grid-row: 1/2;
  grid-column: 1/2;

  align-self: end;
  justify-self: center;
}

.message {
  grid-row: 2/3;
  grid-column: 1/2;

  align-self: start;

  padding: 50px;
}

.logo {
  grid-row: 2/3;
  grid-column: 2/3;

  align-self: start;

  padding: 50px;
}

.btn {
  grid-row: 3/4;
  grid-column: 1/3;

  align-self: start;
  justify-self: center;
}
</style>
