                  //String

let nove = "nove";
console.log (`Dez é maior que ${nove}`);

                  //operador ternario 

console.log(10 >= 9 ? "Dez é maior" : "Dez é menor");

                  //ArrowFunction

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
                           
                  //splice

let lista;
lista.splice(1,2,"adicionar");

                  //concat

let lita1, lista2 = []
const lista3 = lista1.concat(lista2)

                  //map

const notas = [10, 9, 8, 7, 6];
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);
console.log(notasAtualizadas);

                  //hmmmm

const alunos = [];
const nota = [];

alunos.push('ana', 'bia', 'carlos', 'danial', 'eduardo', 'fabio');
nota.push(1, 2, 3, 4, 5, 6);

let alunosEnotas = [alunos, nota]

const nomeEnota = (nome) => {
    if (alunosEnotas[0].includes(nome)) {
        indice = alunosEnotas[0].indexOf(nome);
        return alunosEnotas[0][indice] + ', sua nota é ' + alunosEnotas[1][indice];
    } else {
        return 'Aluno não matriculado.';
    }
}

console.log(nomeEnota("ana"));