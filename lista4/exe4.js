let vetor = []
for(let i=0;i<5;i++){
    vetor.push(Number(prompt("Informe um número")))
}

for(let i=0;i<5;i++){
    if (vetor[i] == 30){
        alert(`Número 30 encontrado na posição ${i}`)
    }
}