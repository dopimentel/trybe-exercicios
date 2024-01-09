import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();
clube.adicionarQuadra(quadraFutebol);
const reservarQuadra = clube.buscarQuadra<QuadraFutebol>(0).reservar(new Date('2024-02-2'));
console.log(reservarQuadra);

const quadraTenis = new QuadraTenis();
clube.adicionarQuadra(quadraTenis);
const reservarQuadraTenis = clube.buscarQuadra<QuadraTenis>(1).reservar(new Date('2024-02-2'));
console.log(reservarQuadraTenis);
