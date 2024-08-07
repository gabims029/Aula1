const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let media = ((nota1 + nota2) /2);


if (media >= 6){
    console.log("O aluno está aprovado")
}
else if (media >= 4 && media <6){
    console.log("O aluno está de recuperação")
}
else{
    console.log("O aluno está reprovado")
}