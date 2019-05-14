<template>
  <b-container>
    <h4 class="mb-4">Selecione a opção que lhe descreve melhor nesse momento.</h4>

    <b-form-group>
      <b-form-radio-group
        button-variant="outline-primary"
        buttons
        stacked
        v-model="questions[index].answer"
        :options="questions[index].options"
        :name="'question'+questions[index].id"
      />
    </b-form-group>

    <b-progress class="w-50 prog-bar" show-progress animated>
      <b-progress-bar :value="index + 1" :max="questions.length">
        {{ index + 1 }}/{{ questions.length - 1 }}
      </b-progress-bar>
    </b-progress>

    <b-button variant="outline-primary" @click="index--" v-if="index>0">Anterior</b-button>
    <b-button
      variant="primary"
      @click="index++"
      v-if="index<21"
      :disabled="questions[index].answer === null"
    >Próxima</b-button>
    <b-button variant="success" v-else :disabled="questions[index].answer === null">Finalizar</b-button>
  </b-container>
</template>

<script>
export default {
  name: "QuestionArea",
  data() {
    return {
      index: 0,
      questions: [
        {
          id: "1",
          answer: null,
          options: [
            { text: "Não me sinto triste.", value: 0 },
            { text: "Eu me sinto triste.", value: 1 },
            { text: "Estou sempre triste e não consigo sair disso.", value: 2 },
            {
              text: "Estou tão triste ou infeliz, que não consigo suportar.",
              value: 3
            }
          ]
        },
        {
          id: "2",
          answer: null,
          options: [
            {
              text: "Não estou especialmente desanimado quanto ao futuro.",
              value: 0
            },
            { text: "Eu me sinto desanimado quanto ao futuro.", value: 1 },
            { text: "Acho que nada tenho a esperar.", value: 2 },
            {
              text:
                "Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar.",
              value: 3
            }
          ]
        },
        {
          id: "3",
          answer: null,
          options: [
            { text: "Não me sinto um fracasso.", value: 0 },
            {
              text: "Acho que fracassei mais do que uma pessoa comum.",
              value: 1
            },
            {
              text:
                "Quando olho pra trás, na minha vida, tudo o que posso ver é um monte de fracassos.",
              value: 2
            },
            {
              text: "Acho que, como pessoa, sou um completo fracasso.",
              value: 3
            }
          ]
        },
        {
          id: "4",
          answer: null,
          options: [
            { text: "Tenho tanto prazer em tudo como antes.", value: 0 },
            { text: "Não sinto mais prazer nas coisas como antes.", value: 1 },
            { text: "Não encontro um prazer real em mais nada.", value: 2 },
            { text: "Estou insatisfeito ou aborrecido com tudo.", value: 3 }
          ]
        },
        {
          id: "5",
          answer: null,
          options: [
            { text: "Não me sinto especialmente culpado.", value: 0 },
            { text: "Eu me sinto culpado grande parte do tempo.", value: 1 },
            { text: "Eu me sinto culpado na maior parte do tempo.", value: 2 },
            { text: "Eu me sinto sempre culpado.", value: 3 }
          ]
        },
        {
          id: "6",
          answer: null,
          options: [
            { text: "Não acho que esteja sendo punido.", value: 0 },
            { text: "Acho que posso ser punido.", value: 1 },
            { text: "Creio que vou ser punido.", value: 2 },
            { text: "Acho que estou sendo punido.", value: 3 }
          ]
        },
        {
          id: "7",
          answer: null,
          options: [
            { text: "Não me sinto decepcionado comigo mesmo.", value: 0 },
            { text: "Estou decepcionado comigo mesmo.", value: 1 },
            { text: "Estou enojado de mim.", value: 2 },
            { text: "Eu me odeio.", value: 3 }
          ]
        },
        {
          id: "8",
          answer: null,
          options: [
            {
              text: "Não me sinto de qualquer modo pior que os outros.",
              value: 0
            },
            {
              text:
                "Sou crítico em relação a mim por minhas fraquezas ou erros.",
              value: 1
            },
            { text: "Eu me culpo sempre por minhas falhas.", value: 2 },
            { text: "Eu me culpo por tudo de mal que acontece.", value: 3 }
          ]
        },
        {
          id: "9",
          answer: null,
          options: [
            { text: "Não tenho quaisquer ideia de me matar.", value: 0 },
            {
              text: "Tenho ideias de me matar, mas não as executaria.",
              value: 1
            },
            { text: "Gostaria de me matar.", value: 2 },
            { text: "Eu me mataria se tivesse oportunidade.", value: 3 }
          ]
        },
        {
          id: "10",
          answer: null,
          options: [
            { text: "Não choro mais que o habitual.", value: 0 },
            { text: "Choro mais agora do que costumava.", value: 1 },
            { text: "Agora, choro o tempo todo.", value: 2 },
            {
              text:
                "Costumava ser capaz de chorar, mas agora não consigo, mesmo que o queria.",
              value: 3
            }
          ]
        },
        {
          id: "11",
          answer: null,
          options: [
            { text: "Não sou mais irritado agora do que já fui.", value: 0 },
            {
              text:
                "Fico aborrecido ou irritado mais facilmente do que costumava.",
              value: 1
            },
            { text: "Agora, eu me sinto irritado o tempo todo.", value: 2 },
            {
              text: "Não me irrito mais com coisas que costumavam me irritar.",
              value: 3
            }
          ]
        },
        {
          id: "12",
          answer: null,
          options: [
            { text: "Não perdi o interesse pelas outras pessoas.", value: 0 },
            {
              text:
                "Estou menos interessado pelas outras pessoas do que costumava estar.",
              value: 1
            },
            {
              text:
                "Perdi a maior parte do meu interesse pelas outras pessoas.",
              value: 2
            },
            { text: "Perdi todo o interesse pelas outras pessoas.", value: 3 }
          ]
        },
        {
          id: "13",
          answer: null,
          options: [
            { text: "Tomo decisões tão bem quanto antes.", value: 0 },
            {
              text: "Adio as tomadas de decisões mais do que costumava.",
              value: 1
            },
            {
              text: "Tenho mais dificuldades de tomar decisões do que antes.",
              value: 2
            },
            { text: "Absolutamente não consigo mais tomar decisões.", value: 3 }
          ]
        },
        {
          id: "14",
          answer: null,
          options: [
            {
              text: "Não acho que de qualquer modo pareço pior do que antes.",
              value: 0
            },
            {
              text:
                "Estou preocupado em estar parecendo velho ou sem atrativo.",
              value: 1
            },
            {
              text:
                "Acho que há mudanças permanentes na minha aparência, que me fazem parecer sem atrativo.",
              value: 2
            },
            { text: "Acredito que pareço feio.", value: 3 }
          ]
        },
        {
          id: "15",
          answer: null,
          options: [
            { text: "Posso trabalhar tão bem quanto antes.", value: 0 },
            {
              text: "É preciso algum esforço extra para fazer alguma coisa.",
              value: 1
            },
            {
              text: "Tenho que me esforçar muito para fazer alguma coisa.",
              value: 2
            },
            { text: "Não consigo mais fazer qualquer trabalho.", value: 3 }
          ]
        },
        {
          id: "16",
          answer: null,
          options: [
            { text: "Consigo dormir tão bem como o habitual.", value: 0 },
            { text: "Não durmo tão bem quanto costumava.", value: 1 },
            {
              text:
                "acordo 1 ou 2 mais cedo do que o ahbitual, e acho difícil voltar a dormir.",
              value: 2
            },
            {
              text:
                "Acordo várias horas mais cedo do que costumava, e não consigo voltar a dormir.",
              value: 3
            }
          ]
        },
        {
          id: "17",
          answer: null,
          options: [
            { text: "Não fico mais cansado do que o habitual.", value: 0 },
            {
              text: "Fico cansado mais facilmente do que costumava.",
              value: 1
            },
            { text: "Fico cansado em fazer qualquer coisa.", value: 2 },
            {
              text: "Estou cansado demais para fazer qualquer coisa.",
              value: 3
            }
          ]
        },
        {
          id: "18",
          answer: null,
          options: [
            { text: "O meu apetite não está pior que o habitual.", value: 0 },
            { text: "Meu apetite não é tão bom como costumava ser.", value: 1 },
            { text: "Meu apetite é muito pior agora.", value: 2 },
            { text: "Absolutamente não tenho mais apetite.", value: 3 }
          ]
        },
        {
          id: "19a",
          answer: null,
          options: [
            {
              text:
                "Não tenho perdido muito peso, se é que perdi algum recentemente.",
              value: 0
            },
            { text: "Perdi mais do que 2 quilos e meio.", value: 1 },
            { text: "Perdi mais do que 5 quilos.", value: 2 },
            { text: "Perdi mais do que 7 quilos.", value: 3 }
          ]
        },
        {
          id: "19b",
          answer: null,
          options: [
            {
              text: "Tenho tentado emagrecer, e estou comendo menos.",
              value: 0
            },
            {
              text: "Tenho tentado emagrecer, mas não estou comendo menos.",
              value: 1
            }
          ]
        },
        {
          id: "20",
          answer: null,
          options: [
            {
              text: "Não estou mais preocupado com a saúde do que o habitual.",
              value: 0
            },
            {
              text:
                "Estou preocupado com problemas físicos, tais como dores, indisposição do estômago e constipação.",
              value: 1
            },
            {
              text:
                "Estou muito preocupado com problemas físicos, e é díficil pensar em outra coisa.",
              value: 2
            },
            {
              text:
                "Estou tão preocupado com meus problemas físicos, que não consigo pensar em qualquer outra coisa.",
              value: 3
            }
          ]
        },
        {
          id: "21",
          answer: null,
          options: [
            {
              text:
                "Não notei qualquer mudança recente no meu interesse por sexo.",
              value: 0
            },
            {
              text: "Estou menos interessado por sexo do que costumava.",
              value: 1
            },
            { text: "Estou muito menos interessado por sexo agora.", value: 2 },
            { text: "Perdi completamente o interesse por sexo.", value: 3 }
          ]
        }
      ]
    };
  }
  // components: {
  //   Question
  // }
};
</script>

<style scoped>
h2 {
  display: block;
  margin-bottom: 50px;
}

.prog-bar {
  margin: 25px auto;
}

#prev {
  margin-right: 5px;
}

#next {
  margin-left: 5px;
}
</style>
