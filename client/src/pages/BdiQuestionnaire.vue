<template>
  <q-page class="flex flex-center">
    <!-- TODO: exibir instruções para o preenchimento do questionário
               exibir a pontuação final e a recomendação de que um profissional
               de psicologia deve ser procurado -->
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
          v-if="index < 20"
          @click="index += 1"
          label="Próxima"
        />
        <q-btn
          color="primary"
          type="submit"
          :loading="submitting"
          :disabled="!questions.map(q => q.answer).every(a => a !== null)"
          v-if="index == 20"
          @click="submit()"
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
      submitting: false,
      questions: [
        {
          id: "1",
          label: "Tristeza",
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
          label: "Pessimismo",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não estou desanimado(a) a respeito do meu futuro",
              value: 0
            },
            {
              id: 1,
              label:
                "Eu me sinto mais desanimado(a) a respeito do meu futuro do que de costume",
              value: 1
            },
            {
              id: 2,
              label: "Não espero que as coisas dêem certo pra mim",
              value: 2
            },
            {
              id: 3,
              label:
                "Sinto que não há esperança quanto ao meu futuro. Acho que só vai piorar",
              value: 3
            }
          ]
        },
        {
          id: "3",
          label: "Fracasso passado",
          answer: null,
          options: [
            { id: 0, label: "Não me sinto um(a) fracassado(a)", value: 0 },
            {
              id: 1,
              label: "Tenho fracassado mais do que deveria",
              value: 1
            },
            {
              id: 2,
              label: "Quando penso no passado, vejo muitos fracassos",
              value: 2
            },
            {
              id: 3,
              label: "Sinto que, como pessoa, sou um fracasso total",
              value: 3
            }
          ]
        },
        {
          id: "4",
          label: "Perda de prazer",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Continuo sentindo o mesmo prazer que sentia com as coisas de que eu gosto",
              value: 0
            },
            {
              id: 1,
              label:
                "Não sinto tanto prazer com as coisas como costumava sentir",
              value: 1
            },
            {
              id: 2,
              label:
                "Tenho muito pouco prazer nas coisas que eu costumava gostar",
              value: 2
            },
            {
              id: 3,
              label:
                "Não tenho mais nenhum prazer nas coisas que eu costumava gostar",
              value: 3
            }
          ]
        },
        {
          id: "5",
          label: "Sentimento de culpa",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não me sinto particularmente culpado(a)",
              value: 0
            },
            {
              id: 1,
              label:
                "Eu me sinto culpado(a) a respeito de várias coisas que fiz e/ou que deveria ter feito",
              value: 1
            },
            {
              id: 2,
              label: "Eu me sinto culpado(a) a maior parte do tempo",
              value: 2
            },
            { id: 3, label: "Eu me sinto culpado(a) o tempo todo", value: 3 }
          ]
        },
        {
          id: "6",
          label: "Sentimento de punição",
          answer: null,
          options: [
            { id: 0, label: "Não sinto que estou sendo punido(a)", value: 0 },
            { id: 1, label: "Sinto que posso ser punido(a)", value: 1 },
            { id: 2, label: "Eu acho que serei punido(a)", value: 2 },
            { id: 3, label: "Sinto que estou sendo punido(a)", value: 3 }
          ]
        },
        {
          id: "7",
          label: "Autoestima",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Eu me sinto como sempre me senti em releção a mim mesmo(a)",
              value: 0
            },
            { id: 1, label: "Perdi a confiança em mim mesmo(a)", value: 1 },
            { id: 2, label: "Estou desapontado(a) comigo mesmo(a)", value: 2 },
            { id: 3, label: "Não gosto de mim", value: 3 }
          ]
        },
        {
          id: "8",
          label: "Autocrítica",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não me critico nem me culpo mais do que o habitual",
              value: 0
            },
            {
              id: 1,
              label:
                "Estou sendo mais crítico(a) comigo mesmo(a) do que contumava ser",
              value: 1
            },
            { id: 2, label: "Eu me critico por todos os meus erros", value: 2 },
            {
              id: 3,
              label: "Eu me culpo por tudo de ruim que acontece",
              value: 3
            }
          ]
        },
        {
          id: "9",
          label: "Pensamentos ou desejos suicidas",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não tenho nenhum pensamento de me matar",
              value: 0
            },
            {
              id: 1,
              label:
                "Tenho pensamentos de me matar, mas não levaria isso adiante",
              value: 1
            },
            { id: 2, label: "Gostaria de me matar.", value: 2 },
            { id: 3, label: "Eu me mataria se tivesse oportunidade.", value: 3 }
          ]
        },
        {
          id: "10",
          label: "Choro",
          answer: null,
          options: [
            { id: 0, label: "Não choro mais do que chorava antes", value: 0 },
            {
              id: 1,
              label: "Choro mais agora do que costumava chorar",
              value: 1
            },
            { id: 2, label: "Choro por qualquer coisinha", value: 2 },
            {
              id: 3,
              label: "Sinto vontade de chorar, mas não consigo",
              value: 3
            }
          ]
        },
        {
          id: "11",
          label: "Agitação",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Não me sinto mais inquieto(a) ou agitado(a) do que me sentia antes",
              value: 0
            },
            {
              id: 1,
              label:
                "Eu me sinto mais inquieto(a) ou agitado(a) do que me sentia antes",
              value: 1
            },
            {
              id: 2,
              label:
                "Eu me sinto tão inquieto(a) ou agitado(a) que é difícil ficar parado(a)",
              value: 2
            },
            {
              id: 3,
              label:
                "Estou tão inquieto(a) ou agitado(a) que tenho que estar sempre me mexendo ou fazendo alguma coisa",
              value: 3
            }
          ]
        },
        {
          id: "12",
          label: "Perda de interesse",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Não perdi o interesse por outras pessoas ou por minhas atividades",
              value: 0
            },
            {
              id: 1,
              label:
                "Estou menos interessado pelas outras pessoas ou coisas do que costumava estar",
              value: 1
            },
            {
              id: 2,
              label:
                "Perdi quase todo o interesse por outras pessoas ou coisas",
              value: 2
            },
            {
              id: 3,
              label: "É difícil me interessar por alguma coisa",
              value: 3
            }
          ]
        },
        {
          id: "13",
          label: "Indecisão",
          answer: null,
          options: [
            {
              id: 0,
              label: "Tomo minhas decisões tão bem quanto antes",
              value: 0
            },
            {
              id: 1,
              label: "Acho mais difícil tomar decisões agora do que antes",
              value: 1
            },
            {
              id: 2,
              label:
                "Tenho muito mais dificuldade em tomar decisões agora do que antes",
              value: 2
            },
            {
              id: 3,
              label: "Tenho dificuldade para tomar qualquer decisão",
              value: 3
            }
          ]
        },
        {
          id: "14",
          label: "Desvalorização",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não me sinto sem valor",
              value: 0
            },
            {
              id: 1,
              label:
                "Não me considero hoje tão útil ou não me valorizo como antes",
              value: 1
            },
            {
              id: 2,
              label:
                "Eu me sinto com menos valor quando me comparo com outras pessoas",
              value: 2
            },
            { id: 3, label: "Eu me sinto completamente sem valor", value: 3 }
          ]
        },
        {
          id: "15",
          label: "Falta de energia",
          answer: null,
          options: [
            {
              id: 0,
              label: "Tenho tanta energia hoje como sempre tive",
              value: 0
            },
            {
              id: 1,
              label: "Tenho menos energia do que costumava ter",
              value: 1
            },
            {
              id: 2,
              label: "Não tenho energia suficiente para fazer muita coisa",
              value: 2
            },
            {
              id: 3,
              label: "Não tenho energia suficiente para nada",
              value: 3
            }
          ]
        },
        {
          id: "16",
          label: "Alteração no padrão de sono",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não percebi nenhuma mudança no meu sono",
              value: 0
            },
            { id: 1, label: "Durmo um pouco mais do que o habitual", value: 1 },
            {
              id: 2,
              label: "Durmo um pouco menos do que o habitual",
              value: 1
            },
            {
              id: 3,
              label: "Durmo muito mais do que o habitual.",
              value: 2
            },
            {
              id: 4,
              label: "Durmo muito menos do que o habitual.",
              value: 2
            },
            {
              id: 5,
              label: "Durmo a maior parte do dia",
              value: 3
            },
            {
              id: 6,
              label:
                "Acordo 1 ou 2 horas mais cedo e não consigo voltar a dormir",
              value: 3
            }
          ]
        },
        {
          id: "17",
          label: "Irritabilidade",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não estou mais irritado(a) do que o habitual",
              value: 0
            },
            {
              id: 1,
              label: "Estou mais irritado(a) do que o habitual",
              value: 1
            },
            {
              id: 2,
              label: "Estou muito mais irritado(a) do que o habitual",
              value: 2
            },
            {
              id: 3,
              label: "Fico irritado(a) o tempo todo",
              value: 3
            }
          ]
        },
        {
          id: "18",
          label: "Alteração de apetite",
          answer: null,
          options: [
            {
              id: 0,
              label: "Não percebi nenhuma mudança no meu apetite",
              value: 0
            },
            {
              id: 1,
              label: "Meu apetite está um pouco menor do que o habitual",
              value: 1
            },
            {
              id: 2,
              label: "Meu apetite está um pouco maior do que o habitual",
              value: 1
            },
            {
              id: 3,
              label: "Meu apetite está muito menor do que antes",
              value: 2
            },
            {
              id: 4,
              label: "Meu apetite está muito maior do que antes",
              value: 2
            },
            { id: 5, label: "Não tenho nenhum apetite", value: 3 },
            { id: 6, label: "Quero comer o tempo todo", value: 3 }
          ]
        },
        {
          id: "19",
          label: "Dificuldade de concentração",
          answer: null,
          options: [
            {
              id: 0,
              label: "Posso me concentrar tão bem quanto antes",
              value: 0
            },
            {
              id: 1,
              label: "Não posso me concentrar tão bem quanto habitualmente",
              value: 1
            },
            {
              id: 2,
              label:
                "É muito difícil manter a concentração em alguma coisa por muito tempo",
              value: 2
            },
            {
              id: 3,
              label: "Eu acho que não consigo me concentrar em nada",
              value: 3
            }
          ]
        },
        {
          id: "20",
          label: "Cansaço ou fadiga",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Não estou mais cansado(a) ou fadigado(a) do que o habitual",
              value: 0
            },
            {
              id: 1,
              label:
                "Fico cansado(a) ou fadigado(a) mais facilmente do que o habitual",
              value: 1
            },
            {
              id: 2,
              label:
                "Eu me sinto muito cansado(a) ou fadigado(a) para fazer muitas das coisas que costumava fazer",
              value: 2
            },
            {
              id: 3,
              label:
                "Eu me sinto muito cansado(a) ou fadigado(a) para fazer a maioria das coisas que costumava fazer",
              value: 3
            }
          ]
        },
        {
          id: "21",
          label: "Perda de interesse por sexo",
          answer: null,
          options: [
            {
              id: 0,
              label:
                "Não notei qualquer mudança recente no meu interesse por sexo",
              value: 0
            },
            {
              id: 1,
              label:
                "Estou menos interessado(a) em sexo do que costumava estar",
              value: 1
            },
            {
              id: 2,
              label: "Estou muito menos interessado(a) em sexo agora",
              value: 2
            },
            {
              id: 3,
              label: "Perdi completamente o interesse por sexo",
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
      this.submitting = true;
      const answers = this.questions.map(({ id, answer }) => ({
        [id]: answer
      }));
      setTimeout(() => {
        this.submitting = false;
        console.log(answers);
      }, 2000);
    }
  },
  components: { BdiQuestion }
};
</script>

<style lang="scss" scoped></style>
