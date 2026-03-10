//
const Bolos = ["Bolo de morango", "Bolo de chocolate", "Bolo de cenoura", "Bolo de baunilha", "Bolo de milho", "Bolo de laranja", "Bolo de banana", "Bolo de brigadeiro",]
const valores =      [       28        ,        16          ,        32        ,          31       ,        27      ,         18       ,        15       ,         30          ,]
function mostrarBolos(){
    let contador = 0
    console.log("-------- Lista de Bolos-------")
    while(contador < Bolos.length){
        console.log(Bolos[contador] + " - R$ " + valores[contador])
        contador = contador + 1
    }
    console.log("-------------")
}


// Adicionar novos elementos na lista
function novoBolo(bolo, valor){
    Bolos.push(bolo)
    valores.push(valor)
}

// Remover um elemento
function deletarBolo(indice){
    bolos.splice(indice, 1)
    valores.splice(indice, 1)
}

mostrarBolos()
novoBolo("Bolo de morango", 19)
mostrarBolos()
deletarBolo(2)
mostrarBolos()
