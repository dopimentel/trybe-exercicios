// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const hiredPerson = (fullName) => {
    const name = fullName.split(' ')[0].toLowerCase();
    const lastName = fullName.split(' ')[fullName.split(' ').length - 1].toLowerCase();
    return {
        fullName,
        email: `${name}_${lastName}@trybe.com`
    };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const isEqual = (x, y) => x === y;
const prizeDraw = (number, callback) => {
  const randomNumber = Math.floor((Math.random() * 5) + 1);
  return callback(number, randomNumber) ? `Parabéns você ganhou` : `Tente novamente`;
};

console.log(prizeDraw(1, isEqual)); 


// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];


const matcher = (arrayR, arrayW) => {
    if (arrayR === arrayW) {
        return 1;
    }
    if ((arrayR !== arrayW && arrayW !== 'N.A')) {
        return - 0.5;
    }
    return 0;
}

const score = (array1, array2, callback) => {
    let counter = 0;
    for (let index = 0; index < array1.length; index +=1) {
        x = callback(array1[index], array2[index]);
        counter += x
    }
    return counter
};


console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, matcher));