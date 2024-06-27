// cria vetor que recebe os códigos
let codigos = []
// cria vetor que recebe o estoque
let estoque = []
// entrada de dados do usuário
for(let i=0;i<5;i++){
    codigos.push(prompt(`Informe código do produto ${i+1}`))
    estoque.push(Number(prompt(`Informe estoque do produto ${i+1}`)))
}
let codCliente = Number(prompt("Informe código do cliente"))
while (codCliente != 0){
    // pede para usuário informar código e qtde para compra
    let codigoUsr = prompt(`Informe código para compra`)
    let qtdeUsr = Number(prompt(`Informe qtde da compra`))
    // vamos usar a função indexOf que retorna a posição no vetor do 
    // elemento procurado. Retorna -1 caso não encontre
    let posicao = codigos.indexOf(codigoUsr)
    if (posicao == -1){
        alert("Produto não existe")
    }
    else {
        if (estoque[posicao] >= qtdeUsr){
            estoque[posicao] = estoque[posicao] - qtdeUsr
            alert("Compra realizada com sucesso")
        }
        else {
            alert("Estoque insuficiente")
        }
    }
    codCliente = Number(prompt("Informe código do cliente. Digite 0 para encerrar"))
}
alert(`Estoque atualizado ${estoque}`)