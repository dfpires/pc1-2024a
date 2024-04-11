function imc(){
    // JS é não tipado
    // JS é tipagem dinâmica
    // como obter aqui os dados do usuário?
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    // calcula o imc
    let imc = peso / (altura * altura)
    alert(imc.toFixed(2))
}