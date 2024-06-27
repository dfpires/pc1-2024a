function exe6(){
    let codigo
    let valor
    let totalVista = 0; let totalPrazo = 0
    for(let i=1;i<=5;i++){
        codigo = prompt(`Informe V (Vista) ou P(Prazo) `).toUpperCase()
        valor = Number(prompt(`Informe valor`))
        if (codigo == 'V'){
            totalVista = totalVista + valor
        }
        else if (codigo == 'P'){
            totalPrazo = totalPrazo + valor
        }
        else {
            console.log(`Código inválido`)
        }
    }
}