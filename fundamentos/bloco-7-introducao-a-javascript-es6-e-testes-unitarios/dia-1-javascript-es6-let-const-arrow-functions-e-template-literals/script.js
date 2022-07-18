const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
}

testingScope(true);

// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.



const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderedArray = (param) => {
    param.sort(function(a,b){
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
        return 0;
    })
    return param
}
console.log (`Os números ${orderedArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);



// 🚀 Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".



const fatorial = (n) => {
    let resultado = 1;
    for ( let counter = 2; counter <= n; counter += 1) {
        resultado = resultado * counter
    } 
    
    return resultado
    
}
console.log(fatorial(6))

