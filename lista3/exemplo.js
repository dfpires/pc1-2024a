
let n = prompt("Informe qtde de notas")
let conta = 1
let acumula = 0
while (conta <= n){
    let nota = Number(prompt("Informe uma nota "))
    acumula = acumula + nota
    conta = conta + 1
}
console.log(`A média é ${acumula/(conta-1)}`)