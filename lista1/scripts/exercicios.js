function exe1(){
    // converte texto em número
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let resultado = nro1 - nro2
    //alert("A subtração é " + resultado)
    // utilizando template string
    alert(`A subtração é ${resultado}`)
}
function exe2(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let result = nro1 * nro2 * nro3
    alert(`A multiplicação é ${result}`)
}
function exe3(){
    // converte texto em número
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let resultado = nro1 / nro2
    //alert("A subtração é " + resultado)
    // utilizando template string
    alert(`A Divisão é ${resultado}`)
}
function exe4(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let media = ((n1*2) + (n2*3)) / 5
    alert(`Média ponderada ${media}`)
}
function exe5(){
    let preco = Number(document.getElementById("preco").value)
    // desconto de 10%
    let novo = preco - (preco * 10) / 100
    alert(`Novo preço ${novo}`)
}