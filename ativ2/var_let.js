//VAR (substitui o valor, porque tem acesso a todos os blocos)
var num = 2
{
    var num = 1
    console.log(num)
}
console.log(num)


//LET (não substitui, pois ele só verifica a var fora do bloco se caso não existir em sua camada)
let num1 = 3
{
    let num1 = 4
    console.log(num1)
}
console.log(num1)


//VAR E LET COM LOOPING

for(var i = 0; i < 10; i++){
    console.log(i)
}

console.log("O valor da var é:" + i) //Como o var não tem o escopo de bloco, ela consegue ter acesso ao resultado final do looping

for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log("O valor da var é:" + i) //Não tem acesso ao let, pois ele respeita o escopo do bloco
