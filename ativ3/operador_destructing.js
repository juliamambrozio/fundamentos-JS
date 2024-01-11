//DESTRUCTING = extraí, cria váriveis

//COM OBJETO

const pessoa = {
    nome: 'Júlia',
    idade: 18,
    endereco: {
        logradouro:'Rua ABC',
        numero: 100
    }
}
console.log(pessoa.nome, pessoa.idade) //ao invés de fazer assim
//experimente fazer na forma destructing
const {nome, idade } = pessoa //estou extraindo os atributos e atribuindo a própria variável
console.log(pessoa)

const {nome: n, idade: i } = pessoa //adicionaodo um apelido
console.log(n, i)

const {endereco: {logradouro: l, numero: num, cep: c = 40000}} = pessoa
console.log(l, num, c)


const {endereco: {logradouro: lo, numero, complemento: com}} = pessoa //apenas o último complemento pode ser indefinido, mas se o caminho não for, ele dará um erro
console.log(lo, numero, com)

//COM ARRAY

const [a] = [10]
console.log(a)

const [g, b, h, d, e] = [2, 5, 6, 8, ]
console.log(g, b, h)

const [m, [p, o]] = [8, [5, 0]] //array dentro de array
console.log(m, p, o)

//PASSANDO COMO PARÂMETRO

//OBJETO

function rand({min = 0, max = 1000}){ //valor padrão
    const valor = Math.random() * (max - min) + min //não precisa usar o ponto para acessar o objeto graças ao destructing
    return Math.floor(valor)
}

const obj = {min: 40, max: 60}
console.log(rand(obj))
console.log(rand({min: 10})) //não passei o max, então ele pega o padrão que foi definido como mil

//ARRAY

function rand([min = 0, max = 1000]){ //valor padrão
    if(min > max) [min, max] = [max, min] //minímo vira máximo e máximo vira mínimo
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

console.log(rand([10,5]))


//PASSANDO COMO PARÂMETRO

//OBJETO

function rand({min = 0, max = 1000}){ //valor padrão
    const valor = Math.random() * (max - min) + min //não precisa usar o ponto para acessar o objeto graças ao destructing
    return Math.floor(valor)
}

const objeto = {min: 40, max: 60}
console.log(rand(objeto))
console.log(rand({min: 10})) //não passei o max, então ele pega o padrão que foi definido como mil

//ARRAY

function rand([min = 0, max = 1000]){ //valor padrão
    if(min > max) [min, max] = [max, min] //minímo vira máximo e máximo vira mínimo
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

console.log(rand([10,5]))



