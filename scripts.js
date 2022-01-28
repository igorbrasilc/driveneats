// referente as carnes:
const empanado = document.querySelector(".empanado");
const icone_empanado = empanado.querySelector(".escondido");
const grelhado = document.querySelector(".grelhado");
const icone_grelhado = grelhado.querySelector(".escondido");
const steak = document.querySelector(".steak");
const icone_steak = steak.querySelector(".escondido");

// referente as bebidas:
const lata = document.querySelector(".lata");
const icone_lata = lata.querySelector(".escondido");
const garrafinha = document.querySelector(".garrafinha");
const icone_garrafinha = garrafinha.querySelector(".escondido");
const litrao = document.querySelector(".litrao");
const icone_litrao = litrao.querySelector(".escondido");

//referente as sobremesas:
const pudim = document.querySelector(".pudim");
const icone_pudim = pudim.querySelector(".escondido");
const brigadeiro = document.querySelector(".brigadeiro");
const icone_brigadeiro = brigadeiro.querySelector(".escondido");
const bolo = document.querySelector(".bolo");
const icone_bolo = bolo.querySelector(".escondido");



// funções de carne
function escolherEmpanado() {
    empanado.classList.add("borda-verde");
    grelhado.classList.remove("borda-verde");
    steak.classList.remove("borda-verde");

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

    if (icone_brigadeiro.classList.contains("escondido")) {
        icone_bolo.classList.remove("escondido");
        icone_pudim.classList.add("escondido");
    } else if (icone_pudim.classList.contains("escondido")) {
        icone_bolo.classList.remove("escondido");
        icone_brigadeiro.classList.add("escondido");
    }
}