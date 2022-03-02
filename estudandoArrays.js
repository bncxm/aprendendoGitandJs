
let readlineSync = require('readline-syn');

const lista = [];

lista.push(10, 20, 30, 40);

console.log(lista);

function listarElementos() {

    console.log('Esta lista possui os elementos "')
    for (let i = 0; i < lista.length; i++) {
        if (i != lista.length - 1) {

            if (i != lista.length-2){
                console.log(lista[i] + ", ");
            }else{
                console.log(lista[i] + " ");
            }
        } else {
            console.log("e " + lista[i] + '".');
        }
    }
}
function calcularArea(lista) {

    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma = soma + lista[i];
    }
    media = soma / lista.length;

    return media
}
function excluirElementos(){

    lista.pop();
}
function adicionarElementos(){

    let elemento = num(readlineSync.question("Informe um valor para ser adicionada ao fim da lista: "));
    lista.push(elemento);

}



console.log(listarElementos());