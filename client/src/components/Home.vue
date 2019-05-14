<template>
    <div class="main-grid">
        <div class="welcome">
            <p>
                Este questionário é um convite para você participar do projeto de pesquisa xxx 
                a ser realizado pelo Programa de Pós-Graduação em Engenharia  Elétrica e pelo Programa de Pós-Graduação em Teoria e Pesquisa do Comportamento,
                ambos da Universidade Federal do Pará.  Inicialmente preencha algumas informações muito importantes para esta pesquisa. 
                Por favor, leia cuidadosamente cada uma das 21  assertivas (ou afirmações). A seguir escolha uma frase de cada grupo (questão),
                que melhor descreve o modo como você tem se sentido nas duas últimas semanas, incluindo o dia de hoje.
                Clique na alternativa de número (0, 1, 2 ou 3) que correspondem à afirmação que melhor expressa o seu ponto de vista sobre a assertiva.
                Se mais de uma afirmação em um grupo lhe parecer igualmente apropriada, escolha a de número mais alto neste grupo.
                Marque apenas uma afirmação por grupo, incluindo o item 16 (alteração no padrão de sono) e o item 18 (alterações de apetite).
            </p>
        </div>
        <div class="login-button">
            <p>
                Para começar, faça login, clicando no botão abaixo:
            </p>
                <router-link to='/login'>
                    <b-button variant='primary'>Login</b-button>
                </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}

    }
}
</script>


style.<style lang="scss" scoped>

    .main-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    .welcome {
        margin: 10px;
    }

    .login-button {
        margin: 10px;
    }

    p {
        text-align: justify;
    }

</style>

