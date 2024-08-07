const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite o grau:"));
let fahrenheit = (celsius * (9/5));

console.log('A temperatura é '+fahrenheit+' em fahrenheit')