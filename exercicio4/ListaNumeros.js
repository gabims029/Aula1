const prompt = require('prompt-sync')();
let array = [];
let tamanho = parseFloat(prompt("Qual o tamanho da sua lista?: "));
let lista = 0

for(let i = 0; i < tamanho; i++){
    lista = parseFloat(prompt("Digite o número:"));
    array.push(lista);
}
console.log('Sua lista é', array);



