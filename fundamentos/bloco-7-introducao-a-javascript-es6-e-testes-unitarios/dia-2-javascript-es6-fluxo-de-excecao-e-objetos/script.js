const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
};

console.log(customerInfo(order));



// 2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
//      - Modifique o nome da pessoa compradora.
//      - Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.payment.total = 50;

    return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
};

console.log(orderModifier(order));



// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};


// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// console.log(lesson2);
// lesson2.turno = 'noite'
// console.log(lesson2);


const keyCreator = (object, key, value) => {
    object[key] = value;
}
keyCreator(lesson2, 'turno', 'noite');

console.log(lesson2);

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.


const keySList = (object) => {
    let list = '';
    const keys = Object.keys(object);
    for (const key of keys) {
        list += `${key}\n`;
    }
    return list;
} 
console.log(keySList(lesson1))

// 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const objectSize = (object) => Object.keys(object).length

console.log(objectSize(lesson1));


// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valuesSList = (object) => {
  let list = "";
  const values = Object.values(object);
  for (const value of values) {
    list += `${value}\n`;
  }
  return list;
};
console.log(valuesSList(lesson1));


// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/



const allLessons = {};
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);
console.log(allLessons);




// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.


const studentTotal = (object) => {
    let resul = 0
    for (let index = 0; index < Object.keys(object).length; index += 1) {
        resul += object[Object.keys(object)[index]].numeroEstudantes;
    }
    return resul
}

console.log(studentTotal(allLessons));




// 7 - Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'




const getValueByNumber = (param1, param2) => {
    console.log(Object.values(param1)[param2])
}
getValueByNumber(lesson1, 1)
