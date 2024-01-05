//FUNÇÕES

//forma comum de escrever função
function multiplicacao(a, b){
    return a * b;
}
console.log(multiplicacao(2, 4))

//declarando function a uma var
const soma =  function (a, b){
    return a + b;
}
console.log(soma(1,1))

//armazenando uma Arrow function em uma variável (mesmo resultado da forma acima)
const subtracao = (a, b) => {
    return a - b;
}
console.log(subtracao(2, 2))

//forma implícita (quando se tem uma única sentença)
const divisao = (a, b) => a / b;
console.log(divisao(4,2))

const exibir = a => console.log(a)
exibir('legal!!')