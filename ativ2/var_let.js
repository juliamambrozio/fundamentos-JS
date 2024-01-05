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


//OUTRO EXEMPLO

const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[8](); //retorna o último valor do laço
funcs[2]();

const funcs2 = []

for(let i = 0; i < 10; i++){
    funcs2.push(function(){
        console.log(i)
    })
}

funcs2[8](); //let tem uma espécia de memória que recupera o valor contido nesse intervalo
funcs2[2]();


//VAR E LET COM HOISTING

console.log(a)//não exibe um erro, pois a var ela recebe um hoisting, ou seja, sua declaração é "criada" no começo do código
var a = 2
console.log(a) 


console.log(a) //dá um erro, pois a var a não existe quando esse console foi declarado
let a = 2
console.log(a) 







console.log("O valor da var é:" + i) //Não tem acesso ao let, pois ele respeita o escopo do bloco
