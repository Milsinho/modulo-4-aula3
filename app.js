let teste = 0
let vetorTemp = [20, 23, 30, 18, 25, 35]

function adicionaTemp(temp) {
    let tamanhoDoVetor = vetorTemp.length
    vetorTemp[tamanhoDoVetor] = temp
}
adicionaTemp(50)
adicionaTemp(28)
calor()
idade()
console.log(vetorTemp.length)
console.log(vetorTemp)

function calor() {

    for (let index = 0; index < vetorTemp.length; index++) {

        if (vetorTemp[index] >= 28) {
            console.log(vetorTemp[index] + ">=28. Está Calor")
        }
        else (
            console.log(vetorTemp[index] + "<28. Frio")
        )

    }
}
function idade() {
    for (let index = 0; index < vetorTemp.length; index++) {

        if (vetorTemp[index] == 10) {
            console.log("Tem")
            return true
        }
        //else if (vetorTemp[index] < 10) {
        //  console.log(vetorTemp[index] + "Menor")
        //return false
        //}
    }
    console.log("Não Tem")
    return false
}


function reverteVetor(paramVetor) {
    let vetorResposta

    for (let i = paramVetor.length - 1;i>= 0; i--) {
        vetorResposta.push(paramVetor[i]);
        
    }
    resposta.vetorResposta;
}
function incluirnaPrimeiraPosicao(valor, vetor) {
    return [];

    for (let x = 0; x = 0 >.length) {
        vetorResposta.push = (incluirnaPrimeiraPosicao)[i];

    }
}
vetor = incluirnaPrimeiraPosicao(10, vetor);
console.log(vetor);
//meuvetor.push




