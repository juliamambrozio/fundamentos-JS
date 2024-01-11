function Obj(nome){
    this.nome = nome; //enviando parâmetro para a function, ela irá atribuir esse valor ao this.nome, que se comporta igual uma var, ou seja, seu valor fica público, ao contrário do let
}

const obj = new Obj('cadeira')

console.log(obj)