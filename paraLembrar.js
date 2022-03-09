// | | | | | | | | String

let nove = "nove";
console.log (`Dez é maior que ${nove}`);

// | | | | | | | | operador ternario 

console.log(10 >= 9 ? "Dez é maior" : "Dez é menor");

// | | | | | | | | ArrowFunction

const funcaoArrow = nove => `Dez é maior que ${nove}`;
console.log(funcaoArrow(9))

const funcaoArrow2 = (dez, nove) => {
    if (dez > nove) { return `${dez} é maior que ${nove}`}
    else {return `${dez} é menor que ${nove}`}
}
console.log(funcaoArrow2(10,9))

/* | | | | | | | | High order functions (funções que recebem uma
                                         ou  mais  funções  como 
                                         argumento ,  retornando
                                         outra      função    )*/
                           
// | | | | | | | | splice

const lista;
lista.splice(1,2,"adicionar");

// | | | | | | | | concat

const lita1, lista2 = []
const lista3 = lista1.concat(lista2)