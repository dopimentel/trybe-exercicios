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



// Crie uma função que receba uma frase e retorne a maior palavra.

let longestWord = (phrase) => {
    let longest = phrase.split(' ')[0].length;
    let lWord = phrase.split(' ')[0];
    for (const word of phrase.split(' ')) {
        if (word.length >   longest) {
            largest = word.length;
            lWord = word
        }
    }
    return lWord
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))


let longestWord2 = (phrase) => {
    return phrase.split(' ').sort((a, b) => a.length > b.length ? 1 : -1)[phrase.split(' ').length -1]
}

console.log(longestWord2('Antônio foi no banheiro e não sabemos o que aconteceu'));


// Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS



const replace = (nome) => {
    const frase = "Tryber x aqui!";
    let novaFrase = '';
    for (const letter of frase) {
        letter === 'x' ? novaFrase = `${novaFrase}${nome}` : novaFrase = `${novaFrase}${letter}`;
    }
    return novaFrase;
}

console.log(replace ('Joao'))


const newString = (replace) => {
    const skills = ['javascript', 'HTML', 'CSS'];
    let resultado = `
    ${replace}
    Minhas três principais habilidades são:`
    for (const skill of skills) {
        resultado += `
    - ${skill}`
    }
    return resultado
}

console.log(newString(replace('Marcos')))