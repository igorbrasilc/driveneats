// referente as carnes:
const empanado = document.querySelector(".empanado");
const icone_empanado = empanado.querySelector(".escondido");
const grelhado = document.querySelector(".grelhado");
const icone_grelhado = grelhado.querySelector(".escondido");
const steak = document.querySelector(".steak");
const icone_steak = steak.querySelector(".escondido");

let carne_escolhida; // vai servir para guardar os valores
let preco_carne;
let contagem_carne = 0;

// referente as bebidas:
const lata = document.querySelector(".lata");
const icone_lata = lata.querySelector(".escondido");
const garrafinha = document.querySelector(".garrafinha");
const icone_garrafinha = garrafinha.querySelector(".escondido");
const litrao = document.querySelector(".litrao");
const icone_litrao = litrao.querySelector(".escondido");

let bebida_escolhida;
let preco_bebida;
let contagem_bebida = 0;

//referente as sobremesas:
const pudim = document.querySelector(".pudim");
const icone_pudim = pudim.querySelector(".escondido");
const brigadeiro = document.querySelector(".brigadeiro");
const icone_brigadeiro = brigadeiro.querySelector(".escondido");
const bolo = document.querySelector(".bolo");
const icone_bolo = bolo.querySelector(".escondido");

let sobremesa_escolhida;
let preco_sobremesa;
let contagem_sobremesa = 0;
//

let soma_pedido;


// funções de carne
function escolherEmpanado() {
    empanado.classList.add("borda-verde");
    grelhado.classList.remove("borda-verde");
    steak.classList.remove("borda-verde");

    carne_escolhida = "Frango empanado";
    preco_carne = "15,00";
    contagem_carne = 1;

    if (icone_grelhado.classList.contains("escondido")) {
        icone_empanado.classList.remove("escondido");
        icone_steak.classList.add("escondido");
    } else if (icone_steak.classList.contains("escondido")) {
        icone_empanado.classList.remove("escondido");
        icone_grelhado.classList.add("escondido");
    }

    selecionadosPedido();
}

function escolherGrelhado() {
    empanado.classList.remove("borda-verde");
    grelhado.classList.add("borda-verde");
    steak.classList.remove("borda-verde");

    carne_escolhida = "Frango grelhado";
    preco_carne = "15,50";
    contagem_carne = 1;

    if (icone_empanado.classList.contains("escondido")) {
        icone_grelhado.classList.remove("escondido");
        icone_steak.classList.add("escondido");
    } else if (icone_steak.classList.contains("escondido")) {
        icone_grelhado.classList.remove("escondido");
        icone_empanado.classList.add("escondido");
    }

    selecionadosPedido();
}

function escolherSteak() {
    empanado.classList.remove("borda-verde");
    grelhado.classList.remove("borda-verde");
    steak.classList.add("borda-verde");

    carne_escolhida = "Steak c/batata";
    preco_carne = "18,00";
    contagem_carne = 1;

    if (icone_empanado.classList.contains("escondido")) {
        icone_steak.classList.remove("escondido");
        icone_grelhado.classList.add("escondido");
    } else if (icone_grelhado.classList.contains("escondido")) {
        icone_steak.classList.remove("escondido");
        icone_empanado.classList.add("escondido");
    }

    selecionadosPedido();
}


//funções de bebida
function escolherLata() {
    lata.classList.add("borda-verde");
    garrafinha.classList.remove("borda-verde");
    litrao.classList.remove("borda-verde");

    bebida_escolhida = "Coquinha";
    preco_bebida = "4,00";
    contagem_bebida = 1;

    if (icone_garrafinha.classList.contains("escondido")) {
        icone_lata.classList.remove("escondido");
        icone_litrao.classList.add("escondido");
    } else if (icone_litrao.classList.contains("escondido")) {
        icone_lata.classList.remove("escondido");
        icone_garrafinha.classList.add("escondido");
    }

    selecionadosPedido();
}

function escolherGarrafinha() {
    lata.classList.remove("borda-verde");
    garrafinha.classList.add("borda-verde");
    litrao.classList.remove("borda-verde");

    bebida_escolhida = "Coca";
    preco_bebida = "5,50";
    contagem_bebida = 1;

    if (icone_lata.classList.contains("escondido")) {
        icone_garrafinha.classList.remove("escondido");
        icone_litrao.classList.add("escondido");
    } else if (icone_litrao.classList.contains("escondido")) {
        icone_garrafinha.classList.remove("escondido");
        icone_lata.classList.add("escondido");
    }

    selecionadosPedido();
}

function escolherLitrao() {
    lata.classList.remove("borda-verde");
    garrafinha.classList.remove("borda-verde");
    litrao.classList.add("borda-verde");

    bebida_escolhida = "Cocona";
    preco_bebida = "9,00";
    contagem_bebida = 1;

    if (icone_lata.classList.contains("escondido")) {
        icone_litrao.classList.remove("escondido");
        icone_garrafinha.classList.add("escondido");
    } else if (icone_garrafinha.classList.contains("escondido")) {
        icone_litrao.classList.remove("escondido");
        icone_lata.classList.add("escondido");
    }

    selecionadosPedido();
}

//funções de sobremesa
function escolherPudim() {
    pudim.classList.add("borda-verde");
    brigadeiro.classList.remove("borda-verde");
    bolo.classList.remove("borda-verde");

    sobremesa_escolhida = "Pudim";
    preco_sobremesa = "8,00";
    contagem_sobremesa = 1;

    if (icone_brigadeiro.classList.contains("escondido")) {
        icone_pudim.classList.remove("escondido");
        icone_bolo.classList.add("escondido");
    } else if (icone_bolo.classList.contains("escondido")) {
        icone_pudim.classList.remove("escondido");
        icone_brigadeiro.classList.add("escondido");
    }

    selecionadosPedido();
}

function escolherBrigadeiro() {
    pudim.classList.remove("borda-verde");
    brigadeiro.classList.add("borda-verde");
    bolo.classList.remove("borda-verde");

    sobremesa_escolhida = "Brigadeiros";
    preco_sobremesa = "9,00";
    contagem_sobremesa = 1;

    if (icone_pudim.classList.contains("escondido")) {
        icone_brigadeiro.classList.remove("escondido");
        icone_bolo.classList.add("escondido");
    } else if (icone_bolo.classList.contains("escondido")) {
        icone_brigadeiro.classList.remove("escondido");
        icone_pudim.classList.add("escondido");
    }

    selecionadosPedido();
}

function escolherBolo() {
    pudim.classList.remove("borda-verde");
    brigadeiro.classList.remove("borda-verde");
    bolo.classList.add("borda-verde");

    sobremesa_escolhida = "Bolo de pote";
    preco_sobremesa = "10,00";
    contagem_sobremesa = 1;

    if (icone_brigadeiro.classList.contains("escondido")) {
        icone_bolo.classList.remove("escondido");
        icone_pudim.classList.add("escondido");
    } else if (icone_pudim.classList.contains("escondido")) {
        icone_bolo.classList.remove("escondido");
        icone_brigadeiro.classList.add("escondido");
    }

    selecionadosPedido();
}

function selecionadosPedido() {
    if (contagem_carne != 0 && contagem_bebida != 0 && contagem_sobremesa != 0) {
        const caixa_footer = document.querySelector(".caixa-Floaterna-footer");
        const botao_footer = document.querySelector(".finalizar-pedido");

        botao_footer.classList.remove("escondido");
    } 
}


function botaoFinalizarPedido() {
    // mostrando tela de finalizar pedido
    const telaFinalizarPedido = document.querySelector("aside");
    const telaSemFinalizarPedido = document.querySelector(".tela-sem-finalizar-pedido");

    telaSemFinalizarPedido.style.opacity = 0.2;
    telaFinalizarPedido.classList.remove("escondido");

    // mostrando os preços e descrições corretas do pedido:
    const carneFinalizarPedido = telaFinalizarPedido.querySelector(".pedido-carne");
    const precoCarneFinalizarPedido = telaFinalizarPedido.querySelector(".preco-carne");
    const bebidaFinalizarPedido = telaFinalizarPedido.querySelector(".pedido-bebida");
    const precoBebidaFinalizarPedido = telaFinalizarPedido.querySelector(".preco-bebida");
    const sobremesaFinalizarPedido = telaFinalizarPedido.querySelector(".pedido-sobremesa");
    const precoSobremesaFinalizarPedido = telaFinalizarPedido.querySelector(".preco-sobremesa");

    carneFinalizarPedido.innerHTML = carne_escolhida;
    precoCarneFinalizarPedido.innerHTML = preco_carne;
    bebidaFinalizarPedido.innerHTML = bebida_escolhida;
    precoBebidaFinalizarPedido.innerHTML = preco_bebida;
    sobremesaFinalizarPedido.innerHTML = sobremesa_escolhida;
    precoSobremesaFinalizarPedido.innerHTML = preco_sobremesa;

    const somaPrecoPedido = telaFinalizarPedido.querySelector(".preco-total .total");
    soma_pedido = parseFloat(preco_sobremesa.replace(",", ".")) + parseFloat(preco_bebida.replace(",", ".")) + parseFloat(preco_carne.replace(",", "."));
    somaPrecoPedido.innerHTML = soma_pedido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'});

}