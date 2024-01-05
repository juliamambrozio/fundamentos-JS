const valores = [7.7, 8.9, 6.2, 9.2]
console.log(valores[0], valores[1])

valores[4] = 10 //criando valor do array
console.log(valores)
console.log(valores.length) //contando quantos valores tem no array

valores.push({id: 3}, false, null, 'teste') //adicionaodo valores ({id: 3} = objeto)
console.log(valores)

console.log(valores.pop()) //remove o último elemento do array

delete valores[0] //deletando o índice 0
console.log(valores)

console.log(typeof valores)//do tipo objeto