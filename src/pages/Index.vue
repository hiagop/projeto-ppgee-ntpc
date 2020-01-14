<template>
  <q-page>
    <div class="container">
      <div class="title text-h3 text-center">Projeto VivaVida</div>
      <div class="message text-justify">
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
      <div>
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
          class="bg-blue-5 text-white"
          size="lg"
          label="Voltar ao  Questionário"
          to="/bdi"
          v-if="isAuthenticated"
        />
      </div>
    </div>
    <div style="width: 100vw; height: 75vh">
      <div class="team-title text-h3">Equipe</div>
      <div class="team-container">
        <div class="member-profile" v-for="member in team" :key="member.id">
          <img :src="member.img" :alt="member.name" />
          <p>{{ member.name }}</p>
          <p>{{ member.title }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      team: [
        {
          id: 0,
          img: "../statics/priscila.jpg",
          name: "Msc. Priscila Siqueira Aranha",
          title:
            "Doutoranda do Programa de Pós-Graduação em Engenharia Elétrica (PPGEE/UFPA)"
        },
        {
          id: 1,
          img: "../statics/renato.gif",
          name: "Prof. Dr. Carlos Renato Lisboa Francês",
          title: "Coordenador do Laboratório de Tecnologias Sociais (LTS/UFPA)"
        },
        {
          id: 2,
          img: "../statics/jasmine.jpg",
          name: "Prof. Dra. Jasmine Leite de Araújo",
          title: "Coorientadora do Projeto Viva Vida (LCT/UFPA)"
        },
        {
          id: 3,
          img: "../statics/lília.jpg",
          name: "Prof. Dra. Lília Iêda Chaves Cavalcante",
          title:
            "Coordenadora do Laboratório de Ecologia do Desenvolvimento (LED/UFPA)"
        },
        {
          id: 4,
          img: "../statics/hiago.jpg",
          name: "Hiago Cavalcante Prata",
          title: "Graduando em Engenharia da Computação (FCT/UFPA)"
        }
      ]
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  max-width: 100ch;
  max-height: 100vh;

  align-items: center;
  justify-items: center;

  margin: auto;
  padding: 50px;
}
.container > div {
  margin-bottom: 25px;
}

.message {
  font-size: 14pt;
}

.team-container {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);

  align-content: center;
}

.team-title {
  grid-row: 1/2;

  text-align: center;
  margin: 50px;
}

.member-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.member-profile > p {
  text-align: center;
  width: 30ch;
  height: 4ch;
}

.member-profile > img {
  width: 200px;
  height: 200px;

  margin-bottom: 10px;

  border-radius: 50vh;
}
</style>
