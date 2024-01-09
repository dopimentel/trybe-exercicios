import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();
clube.adicionarQuadra(quadraFutebol);
const reservarQuadra = clube.buscarQuadra<QuadraFutebol>(0).reservar(new Date('2024-02-2'));
console.log(reservarQuadra);
