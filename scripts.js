// referente as carnes:
const empanado = document.querySelector(".empanado");
const icone_empanado = empanado.querySelector(".escondido");
const grelhado = document.querySelector(".grelhado");
const icone_grelhado = grelhado.querySelector(".escondido");
const steak = document.querySelector(".steak");
const icone_steak = steak.querySelector(".escondido");

let carne_escolhida; // vai servir para guardar os valores
let contagem_carne = 0;

// referente as bebidas:
const lata = document.querySelector(".lata");
const icone_lata = lata.querySelector(".escondido");
const garrafinha = document.querySelector(".garrafinha");
const icone_garrafinha = garrafinha.querySelector(".escondido");
const litrao = document.querySelector(".litrao");
const icone_litrao = litrao.querySelector(".escondido");

let bebida_escolhida;
let contagem_bebida = 0;

//referente as sobremesas:
const pudim = document.querySelector(".pudim");
const icone_pudim = pudim.querySelector(".escondido");
const brigadeiro = document.querySelector(".brigadeiro");
const icone_brigadeiro = brigadeiro.querySelector(".escondido");
const bolo = document.querySelector(".bolo");
const icone_bolo = bolo.querySelector(".escondido");

let sobremesa_escolhida;
let contagem_sobremesa = 0;

// referente ao footer:
const caixa_footer = document.querySelector(".caixa-interna-footer");
const texto_caixa_footer = caixa_footer.querySelectorAll("p");
let texto_footer = texto_caixa_footer.innerHTML;

// funções de carne
function escolherEmpanado() {
    empanado.classList.add("borda-verde");
    grelhado.classList.remove("borda-verde");
    steak.classList.remove("borda-verde");

    carne_escolhida = "Franguinho empanado";
    contagem_carne = 1;

    if (icone_grelhado.classList.contains("escondido")) {
        icone_empanado.classList.remove("escondido");
        icone_steak.classList.add("escondido");
    } else if (icone_steak.classList.contains("escondido")) {
        icone_empanado.classList.remove("escondido");
        icone_grelhado.classList.add("escondido");
    }
}

function escolherGrelhado() {
    empanado.classList.remove("borda-verde");
    grelhado.classList.add("borda-verde");
    steak.classList.remove("borda-verde");

    carne_escolhida = "Franguinho grelhado";
    contagem_carne = 1;

    if (icone_empanado.classList.contains("escondido")) {
        icone_grelhado.classList.remove("escondido");
        icone_steak.classList.add("escondido");
    } else if (icone_steak.classList.contains("escondido")) {
        icone_grelhado.classList.remove("escondido");
        icone_empanado.classList.add("escondido");
    }
}

function escolherSteak() {
    empanado.classList.remove("borda-verde");
    grelhado.classList.remove("borda-verde");
    steak.classList.add("borda-verde");

    carne_escolhida = "Steak c/batata";
    contagem_carne = 1;

    if (icone_empanado.classList.contains("escondido")) {
        icone_steak.classList.remove("escondido");
        icone_grelhado.classList.add("escondido");
    } else if (icone_grelhado.classList.contains("escondido")) {
        icone_steak.classList.remove("escondido");
        icone_empanado.classList.add("escondido");
    }
}

//funções de bebida
function escolherLata() {
    lata.classList.add("borda-verde");
    garrafinha.classList.remove("borda-verde");
    litrao.classList.remove("borda-verde");

    bebida_escolhida = "Coquinha";
    contagem_bebida = 1;

    if (icone_garrafinha.classList.contains("escondido")) {
        icone_lata.classList.remove("escondido");
        icone_litrao.classList.add("escondido");
    } else if (icone_litrao.classList.contains("escondido")) {
        icone_lata.classList.remove("escondido");
        icone_garrafinha.classList.add("escondido");
    }
}

function escolherGarrafinha() {
    lata.classList.remove("borda-verde");
    garrafinha.classList.add("borda-verde");
    litrao.classList.remove("borda-verde");

    bebida_escolhida = "Coca";
    contagem_bebida = 1;

    if (icone_lata.classList.contains("escondido")) {
        icone_garrafinha.classList.remove("escondido");
        icone_litrao.classList.add("escondido");
    } else if (icone_litrao.classList.contains("escondido")) {
        icone_garrafinha.classList.remove("escondido");
        icone_lata.classList.add("escondido");
    }
}

function escolherLitrao() {
    lata.classList.remove("borda-verde");
    garrafinha.classList.remove("borda-verde");
    litrao.classList.add("borda-verde");

    bebida_escolhida = "Cocona";
    contagem_bebida = 1;

    if (icone_empanado.classList.contains("escondido")) {
        icone_grelhado.classList.remove("escondido");
        icone_steak.classList.add("escondido");
    } else if (icone_steak.classList.contains("escondido")) {
        icone_grelhado.classList.remove("escondido");
        icone_empanado.classList.add("escondido");
    }
}

//funções de sobremesa
function escolherPudim() {
    pudim.classList.add("borda-verde");
    brigadeiro.classList.remove("borda-verde");
    bolo.classList.remove("borda-verde");

    sobremesa_escolhida = "Pudim";
    contagem_sobremesa = 1;

    if (icone_brigadeiro.classList.contains("escondido")) {
        icone_pudim.classList.remove("escondido");
        icone_bolo.classList.add("escondido");
    } else if (icone_bolo.classList.contains("escondido")) {
        icone_pudim.classList.remove("escondido");
        icone_brigadeiro.classList.add("escondido");
    }
}

function escolherBrigadeiro() {
    pudim.classList.remove("borda-verde");
    brigadeiro.classList.add("borda-verde");
    bolo.classList.remove("borda-verde");

    sobremesa_escolhida = "Brigadeiros";
    contagem_sobremesa = 1;

    if (icone_pudim.classList.contains("escondido")) {
        icone_brigadeiro.classList.remove("escondido");
        icone_bolo.classList.add("escondido");
    } else if (icone_bolo.classList.contains("escondido")) {
        icone_brigadeiro.classList.remove("escondido");
        icone_pudim.classList.add("escondido");
    }
}

function escolherBolo() {
    pudim.classList.remove("borda-verde");
    brigadeiro.classList.remove("borda-verde");
    bolo.classList.add("borda-verde");

    sobremesa_escolhida = "Bolo de pote";
    contagem_sobremesa = 1;

    if (icone_brigadeiro.classList.contains("escondido")) {
        icone_bolo.classList.remove("escondido");
        icone_pudim.classList.add("escondido");
    } else if (icone_pudim.classList.contains("escondido")) {
        icone_bolo.classList.remove("escondido");
        icone_brigadeiro.classList.add("escondido");
    }
}

function finalizarPedido() {
    if (contagem_carne != 0 && contagem_bebida != 0 && contagem_sobremesa != 0) {
        texto_footer.innerHTML = "Fechar pedido";
    } 
}