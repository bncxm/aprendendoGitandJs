
var readlineSync = require('readline-sync');

let lista = [];

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
//console.log(listarElementos);

function calcularArea(lista) {

    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma = soma + lista[i];
    }
    media = soma / lista.length;

    return media
}
//console.log(calcularArea(lista));

 function excluirElementos(){
    
    const elemento = parseInt(readlineSync.question("Informe o valor que deseja remover "));
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento){
            lista.splice(i,1);
        }
    }
 }
//   excluirElementos();
//   console.log(lista);

function adicionarElementos(){

    const elemento = parseInt(readlineSync.question("Informe um valor para ser adicionada ao fim da lista: "));
    lista.push(elemento);

}
//  adicionarElementos();
//  console.log(lista);