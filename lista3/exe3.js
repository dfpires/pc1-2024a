// faixas etárias
let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
// guarda as idades
let idade

for(let conta = 1; conta <= 8;conta++){
    idade = Number(prompt(`Informe a idade ${conta}`))
    if (idade >=0 && idade <= 15){
        f1++ // idade está na faixa 1
    }
    else if (idade > 15 && idade <= 30){
        f2++
    }
    else if (idade > 30 && idade <=45){
        f3++
    }
    else if (idade > 45 && idade <= 60){
        f4++
    }
    else if (idade > 60){
        f5++
    }
    else {
        console.log(`${idade} não está em nenhuma faixa`)
    }
} // fim do for
console.log(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5}`)
console.log(`% da F1: ${f1/8*100} e F5 ${f5/8*100}`)