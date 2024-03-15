const nomeAluno = "Ricardo"

const nota1 = 4
const nota2 = 3
const nota3 = 3

/*Processamento dos dados*/
const mediaFinal = (nota1+nota2+nota3)/3

if(mediaFinal >=7 ){
    console.log(`O aluno ${nomeAluno} foi aprovado com media ${mediaFinal}`);
}else if(mediaFinal < 5){
    console.log(`O aluno ${nomeAluno} foi reprovado com media ${mediaFinal}`);
}else {
    console.log(`O aluno ${nomeAluno} ficou em recuperacao com media ${mediaFinal}`);
}