function prova(){
    let modelo = document.getElementById("modelo").value
    let ano = Number(document.getElementById("ano").value)
    let nota = Number(document.getElementById("nota").value)
    // trata as exceções
    if ((modelo != "LT" && modelo != "LTZ" && modelo != "Premium") || ano < 0 || ano > 2024 || nota < 0 || nota > 10){
        console.log('Valores informados incorretamente')
    }
    else {
        let preco
        switch(modelo){
            case "LT": preco = 82000; break;
            case "LTZ": preco = 88000; break;
            case "Premium": preco = 94000; break;
        }
        let precoDesconto
        if (ano == 2024){
            precoDesconto = preco
        }
        else if (ano == 2023 || ano == 2022){
            precoDesconto = preco * 0.90
        }
        else if (ano == 2021 || ano == 2020){
            precoDesconto = preco * 0.80
        }
        else {
            precoDesconto = preco * 0.70
        }
        let precoAcrescimo
        if (nota <=5 ){
            precoAcrescimo = precoDesconto
        }
        else if (nota <=7 ){
            precoAcrescimo = precoDesconto*1.05
        }
        else if (nota <= 9){
            precoAcrescimo = precoDesconto*1.10
        }
        else {
            precoAcrescimo = precoDesconto*1.15
        }
        console.log(`Preço ${preco}`)
        console.log(`Preço com desconto ${precoDesconto}`)
        console.log(`Preço com acréscimo ${precoAcrescimo}`)
    }

}
