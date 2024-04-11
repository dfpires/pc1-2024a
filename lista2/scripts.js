function exe1(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcula média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    let mensagem
    if (media >= 0 && media < 3){
        mensagem = `Reprovado com média ${media}`
    }
    else if (media >= 3 && media < 7){
        mensagem = `Exame com média ${media}`
    }
    else if (media >= 7 && media <= 10){
        mensagem = `Exame com média ${media}`
    }
    // mostra o resultado
    document.getElementById("resultado").innerHTML = mensagem
}
function exe5(){
     // recupera os dados do usuário
     let numero1 = Number(document.getElementById("numero1").value)
     let numero2 = Number(document.getElementById("numero2").value)
     let escolha = Number(document.getElementById("escolha").value)
     // comando switch
     let resultado
     switch(escolha){
        case 1: let media = (numero1 + numero2) / 2
                resultado = `A média é ${media}`
                break
        case 2: let diferenca
                if (numero1 >= numero2){
                    diferenca = numero1 - numero2
                }
                else {
                    diferenca = numero2 - numero1
                }
                resultado = `A diferença é ${diferenca}`
                break
        case 3: let multiplicacao = numero1 * numero2
                resultado = `A multiplicação é ${multiplicacao}`
                break
        case 4: let divisao
                if (numero2 != 0){
                    divisao = numero1 / numero2
                }
                else {
                    divisao = "Impossível dividir"
                }
                resultado = `A divisão é ${divisao}`
                break
        default: resultado = "Opção escolhida inválida"
        }
        document.getElementById("resultado").innerHTML = resultado
}

function exe22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco
    if (idade >= 0 && idade < 20){
        if (peso > 0 && peso < 60){
            risco = 9
        }
        else if (peso >= 60 && peso <= 90){
            risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
        else {
            risco = "Peso inválido, risco não foi calculado"
        }
    }
    else if (idade >= 20 && idade <= 50){
        if (peso > 0 && peso < 60){
            risco = 6
        }
        else if (peso >= 60 && peso <= 90){
            risco = 5
        }
        else if (peso > 90){
            risco = 4
        }
        else {
            risco = "Peso inválido, risco não foi calculado"
        }
    }
    else if (idade > 50){
        if (peso > 0 && peso < 60){
            risco = 3
        }
        else if (peso >= 60 && peso <= 90){
            risco = 2
        }
        else if (peso > 90){
            risco = 1
        }
        else {
            risco = "Peso inválido, risco não foi calculado"
        }
    }
    else {
        risco = "Idade inválida, risco não foi calculado"
    }
    // resultado
    document.getElementById("resultado").innerHTML = risco
}

function exe23(){
    let codigo = Number(document.getElementById("codigo").value)
    let qtde = Number(document.getElementById("qtde").value)
    let resultado
    if (codigo <= 0 || codigo > 40 || qtde < 0){
        resultado = "Valores inválidos"
    }
    else {
        let precoUnitario
        if (codigo >= 1 && codigo <= 10){
            precoUnitario = 10
        }
        else if (codigo >= 11 && codigo <= 20){
            precoUnitario = 15
        }
        else if (codigo >= 21 && codigo <= 30){
            precoUnitario = 20
        }
        else { // 31 a 40
            precoUnitario = 30
        }
        let precoTotal = precoUnitario * qtde
        let desconto
        if (precoTotal < 250){
            desconto = precoTotal * 5.0/100
        }
        else if (precoTotal >= 250 && precoTotal <= 500){
            desconto = precoTotal * 10.0/100
        }
        else {
            desconto = precoTotal * 15.0/100
        }
        let precoFinal = precoTotal - desconto
        resultado = `Preço Unitário ${precoUnitario} Preço Total ${precoTotal} Desconto ${desconto} Preço Final ${precoFinal}`
    }
    document.getElementById("resultado").innerHTML = resultado
}
function exe24(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao = document.getElementById("situacao").value
    // cria as variáveis calculadas
    let aumento, imposto, novo, classificacao, resultado
    if (preco < 0){
        resultado = "Preço inválido"
    }
    else { // todos valores são válidos
        if (preco <= 25){
            switch(categoria){
                case 1: aumento = (preco * 5/100); break
                case 2: aumento = (preco * 8/100); break
                case 3: aumento = (preco * 10/100); break
            }
        }
        else { // preco > 25
            switch(categoria){
                case 1: aumento =  (preco * 12/100); break
                case 2: aumento =  (preco * 15/100); break
                case 3: aumento = (preco * 18/100); break
            }
        }
        // imposto
        if (categoria == 2 || situacao == 'R'){
            imposto = (preco * 5) / 100
        }
        else {
            imposto = (preco * 8) / 100
        }
        // novo preço
        novo = preco + aumento + imposto
        // classificação
        if (novo <= 50){
            classificacao = "Barato"
        }
        else if (novo > 50 && novo < 120){
            classificacao = "Normal"
        }
        else {
            classificacao = "Caro"
        }
        resultado = `Aumento ${aumento} Imposto ${imposto} Novo ${novo} Classificação ${classificacao}`
    }
    // exibe ao usuário
    document.getElementById("resultado").innerHTML = resultado
}