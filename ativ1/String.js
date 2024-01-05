const escola = 'Cod3r';

console.log(escola.charAt(4)); //retorna o quarto caracter da string

console.log(escola.indexOf('3')); //retorna o lugar onde está o caracter

console.log(escola.substring(1)); //retorna o valor do intervalo

console.log(escola.substring(0, 3)); //não inclui o 3

console.log('Escola'.concat(escola).concat('!')); //concatenação

console.log(escola.replace(3, 'e')); //substitui o caracter do local escolhido

console.log('Gui, Júlia'.split(',')); //transforma em array

//TEMPLATE STRING

const nome = 'Rebeca';
const template = `Olá ${nome}`;
console.log(template);

console.log(`1 + 1 = ${1+1}`)

//arrow function, var up recebe função, template string passa o valor para o parâmetro texto

const up = texto => texto.toUpperCase();

console.log(`Ei! ${up('cuidado')}`)

let nome2 = ''

console.log(nome2 || 'Desconhecido') //caso o nome2 não seja informado, ele usará o outro valor "desconhecido"
