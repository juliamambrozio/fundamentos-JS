let valor //undefined, não foi inicializada, não é recomendável
console.log(valor)
//console.log(valor2) //is not defined

valor = null //ausência de valor ou endereço, quando quiser zerar uma var, use null

const produto = {}
console.log(produto.preco) //não é is not defined, porque o produto ele é um valor vázio, só o preço não foi definido nele

produto.preco = null //sem preço

//is not defined = não existe
//vázio = o valor é vázio ('', {}, [])
//null = não existe nenhum valor, nem vázio, zera a var
//undefined = não foi definido nenhum valor e nem null
