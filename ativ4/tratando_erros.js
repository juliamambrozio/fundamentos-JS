function TratarErroELancar(erro){
    //throw new Error("...")
    throw "Erro"
}

function FalarGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+"!!!!")
    }catch (e) {
        //e = recebe erro
        TratarErroELancar(e)
    }finally{
        console.log('Final')
    }
    
}

const obj = {name: 'Júlia'}
FalarGritando(obj)