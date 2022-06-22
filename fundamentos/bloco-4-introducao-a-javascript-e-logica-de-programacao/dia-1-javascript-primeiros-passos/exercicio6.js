// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais
let pieceInput = "";
piece = pieceInput.toLowerCase();

if (piece === "peao") {
console.log(pieceInput + " avança uma casa à frente ou duas se for o primeiro movimento. Captura na diagonal.");
} else if (piece === "cavalo") {
console.log(pieceInput + " se movimenta e captura em 'L'.");
} else if (piece === "bispo") {
console.log(pieceInput + " se movimenta e captura na diagonal correspondente quantas casas forem possível.");
} else if (piece === "torre") {
console.log(pieceInput + " se movimenta e captura na coluna ou linha quantas casas forem possivel.");
} else if (piece === "dama" || piece === "rainha") {
console.log(pieceInput + " se movimenta e captura em qualquer direção quantas casas forem possível.");
} else if (piece === "rei") {
    console.log(pieceInput + " se movimenta e captura em qualquer direção movendo-se apenas uma casa.")
} else {
    console.log("Opa! Você digitou " + pieceInput + ", que não é uma peça.");
}

