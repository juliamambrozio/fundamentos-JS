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

