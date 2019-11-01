<template>
  <q-page class="flex flex-center">
    <div
      class="fit column content-center items-center justify-center q-col-gutter-lg"
    >
      <div class="col">
        <bdi-question :question="questions[index]"></bdi-question>
      </div>

      <div class="col q-gutter-xl">
        <q-btn
          outline
          color="secondary"
          @click="index -= 1"
          v-if="index >= 1"
          label="Anterior"
        />
        <q-btn
          color="secondary"
          :disabled="questions[index].answer === null"
          v-if="index <= 20"
          @click="index += 1"
          label="Próxima"
        />
        <q-btn
          color="primary"
          type="submit"
          :disabled="questions[index].answer === null"
          v-if="
            questions.map(q => q.answer).every(a => a !== null) && index > 20
          "
          @click="sumbit()"
          label="Enviar"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import BdiQuestion from "../components/BdiQuestion";

export default {
  data() {
    return {
      index: 0,
      questions: [
        {
          id: "1",
          label: "",
          answer: null,
          options: [
            { id: 0, label: "Não me sinto triste", value: 0 },
            {
              id: 1,
              label: "Eu me sinto triste grande parte do tempo",
              value: 1
            },
            {
              id: 2,
              label: "Estou triste o tempo todo",
              value: 2
            },
            {
              id: 3,
              label: "Estou tão triste ou infeliz, que não consigo suportar",
              value: 3
            }
          ]
        },
        {
          id: "2",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não estou especialmente desanimado quanto ao futuro.",
              value: 0
            },
            {
              id: 0,
              label: "Eu me sinto desanimado quanto ao futuro.",
              value: 1
            },
            { id: 0, label: "Acho que nada tenho a esperar.", value: 2 },
            {
              id: 0,
              label:
                "Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar.",
              value: 3
            }
          ]
        },
        {
          id: "3",
          label: "",
          answer: null,
          options: [
            { id: 0, label: "Não me sinto um fracasso.", value: 0 },
            {
              id: 0,
              label: "Acho que fracassei mais do que uma pessoa comum.",
              value: 1
            },
            {
              id: 0,
              label:
                "Quando olho pra trás, na minha vida, tudo o que posso ver é um monte de fracassos.",
              value: 2
            },
            {
              id: 0,
              label: "Acho que, como pessoa, sou um completo fracasso.",
              value: 3
            }
          ]
        },
        {
          id: "4",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Tenho tanto prazer em tudo como antes.",
              value: 0
            },
            {
              id: 0,
              label: "Não sinto mais prazer nas coisas como antes.",
              value: 1
            },
            {
              id: 0,
              label: "Não encontro um prazer real em mais nada.",
              value: 2
            },
            {
              id: 0,
              label: "Estou insatisfeito ou aborrecido com tudo.",
              value: 3
            }
          ]
        },
        {
          id: "5",
          label: "",
          answer: null,
          options: [
            { id: 0, label: "Não me sinto especialmente culpado.", value: 0 },
            {
              id: 0,
              label: "Eu me sinto culpado grande parte do tempo.",
              value: 1
            },
            {
              id: 0,
              label: "Eu me sinto culpado na maior parte do tempo.",
              value: 2
            },
            { id: 0, label: "Eu me sinto sempre culpado.", value: 3 }
          ]
        },
        {
          id: "6",
          label: "",
          answer: null,
          options: [
            { id: 0, label: "Não acho que esteja sendo punido.", value: 0 },
            { id: 0, label: "Acho que posso ser punido.", value: 1 },
            { id: 0, label: "Creio que vou ser punido.", value: 2 },
            { id: 0, label: "Acho que estou sendo punido.", value: 3 }
          ]
        },
        {
          id: "7",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não me sinto decepcionado comigo mesmo.",
              value: 0
            },
            { id: 0, label: "Estou decepcionado comigo mesmo.", value: 1 },
            { id: 0, label: "Estou enojado de mim.", value: 2 },
            { id: 0, label: "Eu me odeio.", value: 3 }
          ]
        },
        {
          id: "8",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não me sinto de qualquer modo pior que os outros.",
              value: 0
            },
            {
              id: 0,
              label:
                "Sou crítico em relação a mim por minhas fraquezas ou erros.",
              value: 1
            },
            { id: 0, label: "Eu me culpo sempre por minhas falhas.", value: 2 },
            {
              id: 0,
              label: "Eu me culpo por tudo de mal que acontece.",
              value: 3
            }
          ]
        },
        {
          id: "9",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não tenho quaisquer ideia de me matar.",
              value: 0
            },
            {
              id: 0,
              label: "Tenho ideias de me matar, mas não as executaria.",
              value: 1
            },
            { id: 0, label: "Gostaria de me matar.", value: 2 },
            { id: 0, label: "Eu me mataria se tivesse oportunidade.", value: 3 }
          ]
        },
        {
          id: "10",
          label: "",
          answer: null,
          options: [
            { id: 0, label: "Não choro mais que o habitual.", value: 0 },
            { id: 0, label: "Choro mais agora do que costumava.", value: 1 },
            { id: 0, label: "Agora, choro o tempo todo.", value: 2 },
            {
              id: 0,
              label:
                "Costumava ser capaz de chorar, mas agora não consigo, mesmo que o queria.",
              value: 3
            }
          ]
        },
        {
          id: "11",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não sou mais irritado agora do que já fui.",
              value: 0
            },
            {
              id: 0,
              label:
                "Fico aborrecido ou irritado mais facilmente do que costumava.",
              value: 1
            },
            {
              id: 0,
              label: "Agora, eu me sinto irritado o tempo todo.",
              value: 2
            },
            {
              id: 0,
              label: "Não me irrito mais com coisas que costumavam me irritar.",
              value: 3
            }
          ]
        },
        {
          id: "12",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não perdi o interesse pelas outras pessoas.",
              value: 0
            },
            {
              id: 0,
              label:
                "Estou menos interessado pelas outras pessoas do que costumava estar.",
              value: 1
            },
            {
              id: 0,
              label:
                "Perdi a maior parte do meu interesse pelas outras pessoas.",
              value: 2
            },
            {
              id: 0,
              label: "Perdi todo o interesse pelas outras pessoas.",
              value: 3
            }
          ]
        },
        {
          id: "13",
          label: "",
          answer: null,
          options: [
            { id: 0, label: "Tomo decisões tão bem quanto antes.", value: 0 },
            {
              id: 0,
              label: "Adio as tomadas de decisões mais do que costumava.",
              value: 1
            },
            {
              id: 0,
              label: "Tenho mais dificuldades de tomar decisões do que antes.",
              value: 2
            },
            {
              id: 0,
              label: "Absolutamente não consigo mais tomar decisões.",
              value: 3
            }
          ]
        },
        {
          id: "14",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não acho que de qualquer modo pareço pior do que antes.",
              value: 0
            },
            {
              id: 0,
              label:
                "Estou preocupado em estar parecendo velho ou sem atrativo.",
              value: 1
            },
            {
              id: 0,
              label:
                "Acho que há mudanças permanentes na minha aparência, que me fazem parecer sem atrativo.",
              value: 2
            },
            { id: 0, label: "Acredito que pareço feio.", value: 3 }
          ]
        },
        {
          id: "15",
          label: "",
          answer: null,
          options: [
            { id: 0, label: "Posso trabalhar tão bem quanto antes.", value: 0 },
            {
              id: 0,
              label: "É preciso algum esforço extra para fazer alguma coisa.",
              value: 1
            },
            {
              id: 0,
              label: "Tenho que me esforçar muito para fazer alguma coisa.",
              value: 2
            },
            {
              id: 0,
              label: "Não consigo mais fazer qualquer trabalho.",
              value: 3
            }
          ]
        },
        {
          id: "16",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Consigo dormir tão bem como o habitual.",
              value: 0
            },
            { id: 0, label: "Não durmo tão bem quanto costumava.", value: 1 },
            {
              id: 0,
              label:
                "acordo 1 ou 2 mais cedo do que o ahbitual, e acho difícil voltar a dormir.",
              value: 2
            },
            {
              id: 0,
              label:
                "Acordo várias horas mais cedo do que costumava, e não consigo voltar a dormir.",
              value: 3
            }
          ]
        },
        {
          id: "17",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não fico mais cansado do que o habitual.",
              value: 0
            },
            {
              id: 0,
              label: "Fico cansado mais facilmente do que costumava.",
              value: 1
            },
            { id: 0, label: "Fico cansado em fazer qualquer coisa.", value: 2 },
            {
              id: 0,
              label: "Estou cansado demais para fazer qualquer coisa.",
              value: 3
            }
          ]
        },
        {
          id: "18",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "O meu apetite não está pior que o habitual.",
              value: 0
            },
            {
              id: 0,
              label: "Meu apetite não é tão bom como costumava ser.",
              value: 1
            },
            { id: 0, label: "Meu apetite é muito pior agora.", value: 2 },
            { id: 0, label: "Absolutamente não tenho mais apetite.", value: 3 }
          ]
        },
        {
          id: "19a",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Não tenho perdido muito peso, se é que perdi algum recentemente.",
              value: 0
            },
            { id: 0, label: "Perdi mais do que 2 quilos e meio.", value: 1 },
            { id: 0, label: "Perdi mais do que 5 quilos.", value: 2 },
            { id: 0, label: "Perdi mais do que 7 quilos.", value: 3 }
          ]
        },
        {
          id: "19b",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Tenho tentado emagrecer, e estou comendo menos.",
              value: 0
            },
            {
              id: 0,
              label: "Tenho tentado emagrecer, mas não estou comendo menos.",
              value: 1
            }
          ]
        },
        {
          id: "20",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não estou mais preocupado com a saúde do que o habitual.",
              value: 0
            },
            {
              id: 0,
              label:
                "Estou preocupado com problemas físicos, tais como dores, indisposição do estômago e constipação.",
              value: 1
            },
            {
              id: 0,
              label:
                "Estou muito preocupado com problemas físicos, e é díficil pensar em outra coisa.",
              value: 2
            },
            {
              id: 0,
              label:
                "Estou tão preocupado com meus problemas físicos, que não consigo pensar em qualquer outra coisa.",
              value: 3
            }
          ]
        },
        {
          id: "21",
          label: "",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Não notei qualquer mudança recente no meu interesse por sexo.",
              value: 0
            },
            {
              id: 0,
              label: "Estou menos interessado por sexo do que costumava.",
              value: 1
            },
            {
              id: 0,
              label: "Estou muito menos interessado por sexo agora.",
              value: 2
            },
            {
              id: 0,
              label: "Perdi completamente o interesse por sexo.",
              value: 3
            }
          ]
        }
      ]
    };
  },
  methods: {
    submit() {
      // TODO: implement questionnaire submission method
    }
  },
  components: { BdiQuestion }
};
</script>

<style lang="scss" scoped></style>
