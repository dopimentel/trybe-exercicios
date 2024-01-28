export interface IDriver {
  drive(): void;
}
export interface IFlyer {
  fly(): void;
}
export interface IVehicle extends IDriver, IFlyer {}

