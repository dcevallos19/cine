import { ProductoComestible } from "./productos";
export class Bebida extends ProductoComestible {
    constructor(nombre: string, public tamano: string) {
      super(nombre);
    }
  
    mostrarDetalle(): void {
      console.log("Bebida:", this.nombre);
      console.log("Tamaño:", this.tamano);
    }
  }