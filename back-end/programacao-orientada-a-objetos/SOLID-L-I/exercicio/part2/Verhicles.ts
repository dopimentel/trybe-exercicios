// ./FuturisticCar.ts
import { IDriver, IFlyer, IVehicle } from './interfaces';

export class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

export class Car implements IDriver {
  drive(): void { console.log('Drive a car'); }
}

export class Airplane implements IFlyer {
  fly(): void { console.log('Flying an airplane'); }
}
