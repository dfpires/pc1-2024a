function exe2(){
    let preco = 5
    let qtde = 120
    const despesa = 200 // constante
    let maiorLucro = 0
    let precoMaiorLucro = 0
    let qtdeMaiorLucro = 0
    while ( preco >= 1){
        let lucro = (preco * qtde) - despesa
        if (lucro > maiorLucro){
            maiorLucro = lucro
            precoMaiorLucro = preco
            qtdeMaiorLucro = qtde
        }
        console.log(`Preco ${preco} Qtde ${qtde} Lucro ${lucro}`)
        preco = preco - 0.50
        qtde = qtde + 26
    }
    console.log(`Maior lucro ${maiorLucro} Qtde ${qtdeMaiorLucro} Preço ${precoMaiorLucro}`)
}