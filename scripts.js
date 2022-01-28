// referente as carnes:
const empanado = document.querySelector(".empanado");
const grelhado = document.querySelector(".grelhado");
const steak = document.querySelector(".steak");

// referente as bebidas:
const lata = document.querySelector(".lata");
const garrafinha = document.querySelector(".garrafinha");
const litrao = document.querySelector(".litrao");

//referente as sobremesas:
const pudim = document.querySelector(".pudim");
const brigadeiro = document.querySelector(".brigadeiro");
const bolo = document.querySelector(".bolo");

function escolherEmpanado() {
    empanado.classList.add("borda-verde");
    grelhado.classList.remove("borda-verde");
    steak.classList.remove("borda-verde");
}

function escolherGrelhado() {
    empanado.classList.remove("borda-verde");
    grelhado.classList.add("borda-verde");
    steak.classList.remove("borda-verde");
}

function escolherSteak() {
    empanado.classList.remove("borda-verde");
    grelhado.classList.remove("borda-verde");
    steak.classList.add("borda-verde");
}

function escolherLata() {
    lata.classList.add("borda-verde");
    garrafinha.classList.remove("borda-verde");
    litrao.classList.remove("borda-verde");
}

function escolherGarrafinha() {
    lata.classList.remove("borda-verde");
    garrafinha.classList.add("borda-verde");
    litrao.classList.remove("borda-verde");
}

function escolherLitrao() {
    lata.classList.remove("borda-verde");
    garrafinha.classList.remove("borda-verde");
    litrao.classList.add("borda-verde");
}

function escolherPudim() {
    pudim.classList.add("borda-verde");
    brigadeiro.classList.remove("borda-verde");
    bolo.classList.remove("borda-verde");
}

function escolherBrigadeiro() {
    pudim.classList.remove("borda-verde");
    brigadeiro.classList.add("borda-verde");
    bolo.classList.remove("borda-verde");
}

function escolherBolo() {
    pudim.classList.remove("borda-verde");
    brigadeiro.classList.remove("borda-verde");
    bolo.classList.add("borda-verde");
}