import { VeiculoEletricoVoador } from './VeiculoEletricoVoador';

// Criando uma instância de Veículo Elétrico e Voador
const veiculoVoador = new VeiculoEletricoVoador(10, 20, 100, 500); // Iniciando com longitude 10, latitude 20, capacidade de bateria 100 Ah, altitude 500

console.log('Posição inicial:', veiculoVoador);

// Movendo o veículo horizontalmente (alteração na longitude e latitude)
veiculoVoador.moverHorizontal(5, -3);
console.log('Após mover horizontalmente:', veiculoVoador);

// Movendo o veículo verticalmente (alteração na altitude)
veiculoVoador.moverVertical(200);
console.log('Após mover verticalmente:', veiculoVoador);