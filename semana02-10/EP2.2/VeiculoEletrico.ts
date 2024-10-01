import { Veiculo } from './veiculo';

export class VeiculoEletrico extends Veiculo {
  capacidadeBateria: number; // Em Ampere-hora (Ah)

  constructor(longitude: number, latitude: number, capacidadeBateria: number) {
    super(longitude, latitude);
    this.capacidadeBateria = capacidadeBateria;
  }
}