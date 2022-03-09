const alunos = [];
const notas = [];

alunos.push('ana', 'bia', 'carlos', 'danial', 'eduardo', 'fabio');
notas.push(1, 2, 3, 4, 5, 6);

let alunosEnotas = [alunos, notas]

const nomeEnota = (nome) => {
    if(alunosEnotas[0].includes(nome)){
        indice = alunosEnotas[0].indexOf(nome);
        return alunosEnotas[0][indice] + ', sua média é ' + alunosEnotas[1][indice];
    }else{
        return 'Aluno não matriculado.';
    }
}

console.log(nomeEnota("ana"));