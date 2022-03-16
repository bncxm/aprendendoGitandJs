
var readlineSync = require('readline-sync');
let lista = [];
let aux;
let op;


aux = parseInt(readlineSync.question("Digite a quantidade de elementos que você deseja adicionar à lista:"));
populandoLista(aux, lista);


while (op != 0) {

    console.log("MENU DE OPÇÕES\n"
        + "1: Imprimir lista.\n"
        + "2: Imprimir lista como 'índice - elemento'.\n"
        + "3: Calcular média.\n"
        + "4: Excluir valores.\n"
        + "5: Adicionar um valor.\n"
        + "0: Sair.\n");

    op = parseInt(readlineSync.question("Escolha o número referente a ação desejada dentre as opções do MENU: "));

    executarMenu(op);
}

//FUNÇÕES//

function populandoLista(aux,lista){
    for (let i = 0; i<aux; i++){
        lista.push(parseInt(readlineSync.question("Digite o " + parseInt(i+1) +"° valor para ser adicionado: ")));
    }
}

function executarMenu() {
    switch (op) {
        case 1:
            console.log(lista);
            break;
        case 2:
            listarElementos();
            break;
        case 3:
            calcularMedia(lista);
            break;
        case 4:
            excluirElementos();
            break;
        case 5:
            adicionarElementos();
            break;
        case 0:
            op = 0;
            break;
        default:
            console.log("Digite uma opção válida.");
            break;
    }
}

function listarElementos() {

    console.log("Segue os elementos da lista com seus respectivos índices:")
    for (let i = 0; i < lista.length; i++) {

        console.log("Índice " + i + ": " + lista[i]);
    }
    console.log("\n");
}

function calcularMedia(lista) {
    let media = 0;

    //callback
    lista.forEach(valor => {
        media += valor / lista.length
    });

    console.log("A média é: " + media + "\n");
}

function excluirElementos() {

    const elemento = parseInt(readlineSync.question("Informe o valor que deseja remover:"));
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            lista.splice(i, 1);
        }
    }
}

function adicionarElementos() {

    const elemento = parseInt(readlineSync.question("Informe um valor para ser adicionada ao fim da lista: "));
    lista.push(elemento);

}