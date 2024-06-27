function exe21(){
    let opcao
    let cand1 = 0; let cand2 = 0; let cand3 = 0; let cand4 = 0;
    let nulo = 0; let branco = 0;
    do {
        opcao = Number(prompt(`Digite \n 1. Cand. 1 \n 2. Cand. 2 \n 3. Cand. 3 \n 4. Cand 4 \n 5. Voto Nulo \n 6. Voto Branco \n 0. Sair`))
        switch(opcao){
            case 1: cand1++; break;
            case 2: cand2++; break;
            case 3: cand3++; break;
            case 4: cand4++; break;
            case 5: nulo++; break;
            case 6: branco++; break;
            case 0: console.log(`Programa será encerrado`); break;
            default: console.log(`Opção inválida`);
        } // switch
    } // while
    while (opcao != 0);

    console.log(`Cand 1: ${cand1} Cand 2: ${cand2} Cand 3: ${cand3} Cand 4: ${cand4}`)
    console.log(`Nulos: ${nulo} Brancos: ${branco}`)
    let votos = cand1 + cand2 + cand3 + cand4 + branco + nulo
    console.log(`% de Votos nulos ${(nulo/votos*100).round()}`)
    console.log(`% de Votos brancos ${(branco/votos*100).round()}`)
}