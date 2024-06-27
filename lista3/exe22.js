

function exe22(){
    let idade, altura
    idade = prompt("Informe a idade")
    altura = prompt("Informe a altura")
    let qtde = 0
    let somaAltura = 0
    while (idade >= 0) {
        if (idade > 50){
            qtde++
            somaAltura = somaAltura + altura
        }
        idade = prompt("Informe a idade")
        altura = prompt("Informe a altura")
    }
    console.log(`${somaAltura/qtde}`)
}