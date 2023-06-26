export abstract class ProductoComestible {
    constructor(public nombre: string) {}
  
    abstract mostrarDetalle(): void;
  }