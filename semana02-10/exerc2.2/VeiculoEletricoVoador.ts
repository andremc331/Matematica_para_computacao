import { VeiculoEletrico } from './VeiculoEletrico';

export class VeiculoEletricoVoador extends VeiculoEletrico {
  altitude: number;

  constructor(longitude: number, latitude: number, capacidadeBateria: number, altitude: number) {
    super(longitude, latitude, capacidadeBateria);
    this.altitude = altitude;
  }

  moverVertical(deltaAltitude: number): void {
    this.altitude += deltaAltitude;
  }
}