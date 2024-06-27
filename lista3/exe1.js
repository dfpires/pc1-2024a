function exe1(){
    let conta2 = 1
    while (conta2 <= 5){
        let a = Number(prompt("Informe um número "))
        let b = Number(prompt("Informe um número "))
        let c = Number(prompt("Informe um número "))
        let d = Number(prompt("Informe um número "))
        let conta = 1
        let aux
        while (conta <= 3){
            if (a > b){ // se a for maior que b, troca
                aux = a; a = b; b = aux;
            }
            if (b > c){ // se b for maior que c, troca
                aux = b; b = c; c = aux;
            }
            if (c > d){ // se c for maior que d, troca
                aux = c; c = d; d = aux;
            }
            conta++ // conta = conta + 1
        }
        console.log(`Ordem crescente ${a} ${b} ${c} ${d}`)
        console.log(`Ordem decrescente ${d} ${c} ${b} ${a}`)
        conta2++
    }
}