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

// | | | | | | | | splice

const lista;
lista.splica(1,2,"adicionar");