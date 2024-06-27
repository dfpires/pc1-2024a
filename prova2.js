function exe1(){
    let opcao
    let teams = 0; let papel = 0; let email = 0; let tantoFaz = 0;
    do {
        opcao = Number(prompt(`Digite \n T. Teams \n P. Papel \n E. Email \n F. Tanto Faz \n X.  Sair`))
        switch(opcao){
            case 'T': teams++; break;
            case 'P': papel++; break;
            case 'E': email++; break;
            case 'F': tantoFaz++; break;
            case 'X': console.log(`Programa será encerrado`); break;
            default: console.log(`Opção inválida`);
        } // switch
    } // while
    while (opcao != 'X');

    // exibe os valores
    console.log(`Teams: ${teams}`);
    console.log(`Papel: ${papel}`);
    console.log(`Email: ${email}`);
    console.log(`Tanto Faz: ${tantoFaz}`);
    
    let votos = teams + papel + email + tantoFaz
    console.log(`% de Votos Tanto Faz ${(tantoFaz/votos*100).round()}`)
}

// alternativa correta a) 30

function exe3(){
    // cria vetor que recebe os códigos
    let nomes = []
    // cria vetor que recebe o estoque
    let pontos = []
    // entrada de dados do usuário
    for(let i=0;i<3;i++){
        nomes.push(prompt(`Informe nome do time ${i+1}`))
        pontos.push(Number(prompt(`Informe pontos do time ${i+1}`)))
    }
    let nomeTime = prompt("Informe nome do time")
    while (nomeTime != "parar"){
        // pede para usuário informar código e qtde para compra
        let opcao = prompt(`Informe se vai aumentar (A) ou diminuir (D)`)
        let qtde = Number(prompt(`Informe qtde para alterar`))
        // vamos usar a função indexOf que retorna a posição no vetor do 
        // elemento procurado. Retorna -1 caso não encontre
        let posicao = nomes.indexOf(nomeTime)
        if (posicao == -1){
            alert("Time não existe")
        }
        else {
            if (opcao == 'D') {
                if (pontos[posicao] >= qtde){
                    pontos[posicao] = pontos[posicao] - qtde
                    alert("Pontuação diminuida com sucesso")
                }
                else {
                    alert("Não pode diminuir")
                }
            }
            else if (opcao == 'A'){
                pontos[posicao] = pontos[posicao] + qtde
                    alert("Pontuação aumentada com sucesso")
            }
        }
        nomeTime = prompt("Informe nome do time. Digite parar para encerrar")
    }
    alert(`Pontuação atualizado ${pontos}`)
}