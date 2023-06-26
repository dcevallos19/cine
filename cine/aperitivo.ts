import { ProductoComestible } from "./productos";
export class Aperitivo extends ProductoComestible {
    constructor(nombre: string, public tipo: string) {
      super(nombre);
    }
  
    mostrarDetalle(): void {
      console.log("Aperitivo:", this.nombre);
      console.log("Tipo:", this.tipo);
    }
  }