import { Pelicula } from "./peliculas";
import { Sala } from "./sala";
import { ProductoComestible } from "./productos";
export class Cliente {
    constructor(
      public nombre: string,
      public pelicula: Pelicula,
      public sala: Sala,
      public asiento: number,
      public productosConsumidos: ProductoComestible[]
    ) {}
  }