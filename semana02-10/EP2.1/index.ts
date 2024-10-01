import { MesesDoAno } from './MesesDoAno';
import { DiasDaSemana } from './DiasDaSemana';
import { fatorial } from './Fatorial';
import { Estudante } from './Estudante';

console.log(MesesDoAno.Janeiro); // Saída: 1
console.log(DiasDaSemana.Segunda); // Saída: 1

console.log(fatorial(5)); // Saída: 120

const estudante = new Estudante("João", 20, "20231234", 2023, 1);
console.log(estudante);