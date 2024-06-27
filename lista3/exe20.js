function exe20(){
    let opcao
    let n1, n2
    do{
        opcao = Number(prompt(`Informe \n 1. Média aritmética \n 2. Média ponderada \n 3. Sair`))
        switch(opcao){
            case 1: do {
                        n1 = Number(prompt("Informe nota 1"))
                    }
                    while (n1 < 0)
                    do {
                        n2 = Number(prompt("Informe nota 1"))
                    }
                    while (n2 < 0)
                    let mediaAritmetica = (n1 + n2) / 2
                    alert(`A média aritmética é de ${mediaAritmetica}`)
                break
            case 2: n1 = Number(prompt("Informe nota 1"))
                    let p1 = Number(prompt("Informe peso 1"))
                    n2 = Number(prompt("Informe nota 2"))
                    let p2 = Number(prompt("Informe peso 2"))
                    let n3 = Number(prompt("Informe nota 3"))
                    let p3 = Number(prompt("Informe peso 3"))
                    let mediaPonderada = (n1*p1 + n2*p2 + n3*p3)/(p1+p2+p3)
                    alert(`A média ponderada é de ${mediaPonderada}`)
                break
            case 3: alert("Programa será encerrado") 
                break
            default: alert("Opção inválida")
        }
    }
    while (opcao != 3)
}