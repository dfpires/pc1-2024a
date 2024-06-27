let logica = []
let linguagem = []
let interseccao = []
for(let i=0;i<10;i++){
    logica.push(Number(prompt(`Informe código do aluno de lógica`)))
}
for(let i=0;i<5;i++){
    linguagem.push(Number(prompt(`Informe código do aluno de linguagem`)))
}
// calcular e montar a intersecção
for(let i=0;i<10;i++){ // para cada elemento de lógica
    // verifica se o elemento de lógica está em linguagem
    let posicao = linguagem.indexOf(logica[i])
    if (posicao != -1){ // está presente
        interseccao.push(linguagem[i])
    }
}
alert(`Resultado da intersecção ${interseccao}`)