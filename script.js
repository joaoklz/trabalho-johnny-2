const caixa_Principal = document.querySelector(".caixa-principal");
const caixa_Perguntas = document.querySelector(".caixa-perguntas");
const caixa_Alternativas = document.querySelector(".caixa-alternativas");
const caixa_Resultados = document.querySelector(".caixa-resultados");
const texto_Resultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você acha que Fallout 4 te dá algum conhecimento?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Explica ao jogador como funciona a ciência física nuclear",
            },

            {

                texto: "Com certeza não!",
                afirmação: "Além de ter muitas besteiras e mortes, faz o jogador ser agressivo",

            },
        ]
    },

    {
        enunciado: "Você conhece o personagem Arthur Maxson?",
        alternativas: [
            {
                texto: "Não e nem quero conhecer",
                afirmacao: "chamam ele de tirano e ditador"
            },

            {
                texto: "Sim, claro",
                afirmacao: "Ele é o comandante supremo da irmandade de aço"
            }
        ]
    },

    {
        enunciado: "Você acha que alguma facção está correta no seu jeito de agir?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Acho que os Minutemen estão corretos na sua maneira de agir por querer o bem para todos"
            },

            {
                texto: "Não.",
                afirmacao: "Ambas as facções só agem por si só e não se importam em devastar oque estiver em seu caminho"
            }
        ]
    }
];

let perg_atual = 0;
let pergunta_atual;
let historia_final = "";

function mostra_pergunta() {
    if (perg_atual >= perguntas.length) {
        mostra_resultado();
        return;
    };
    pergunta_atual = perguntas[perg_atual]
    caixa_Perguntas.textContent = perguntas[0].enunciado
    caixa_Alternativas.textContent = "";
    texto_Resultado.textContent = "";
    mostra_alternativas();
};

mostra_pergunta();


function mostra_alternativas() {
    for (const alternativa of pergunta_atual.alternativas) {
        const botao_alternativas = document.createElement("button")
        botao_alternativas.textContent = alternativa.texto;
        botao_alternativas.addEventListener("click", () => resposta_selecionada(alternativa));
        caixa_Alternativas.appendChild(botao_alternativas);

    };
};

function resposta_selecionada(opcao_selecionada) {
    const afirmacao = opcao_selecionada.afirmacao;
    historia_final += afirmacao + " ";
    perg_atual++;
    mostra_pergunta();
};

function mostra_resultado() {
    caixa_Perguntas.textContent = "em 2049...";
    texto_Resultado.textContent = historia_final;
    caixa_Alternativas.textContent = "";
};
