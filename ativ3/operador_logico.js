function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2; //se eu trabalhar em um dos dois dias eu compro sorvete //operador binário
    const comprarTv58 = trabalho1 && trabalho2; //se eu trabalhar nos dois dias eu compro a tv58
    const comprarTv32 = trabalho1 != trabalho2; //se eu trabalhar em um dia apenas, eu compro a tv32

    const manterSaudavel = !comprarSorvete; //operador unário (matenho saudável se eu apenas comprar sorvete)
    return{comprarSorvete, comprarTv58, comprarTv32, manterSaudavel};
}

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))


//OPERADOR UNÁRIO

const passouDeAno = !false

const nota = 0
nota++
--nota

//OPERADOR TERNÁRIO (expressão (retorna true ou false), true, false)

const passouDeAno2 = nota => nota > 7 ? "Passou" : "Não passou"

console.log(passouDeAno2(8))