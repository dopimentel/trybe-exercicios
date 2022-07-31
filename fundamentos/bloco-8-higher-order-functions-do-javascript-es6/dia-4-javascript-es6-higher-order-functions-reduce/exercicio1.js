// Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.
// 
// 1 - Dada uma matriz, transforme em um array (sem spread operator).

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flatten = (array) => {
    return array.reduce((acc, curr) => {
    return acc.concat(curr);
    }, []);
}

console.log(flatten(arrays))