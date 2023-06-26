import { Pelicula } from "./peliculas";
import { ProductoComestible } from "./productos";
export class Sala {
    constructor(
      public numero: number,
      public pelicula: Pelicula,
      public asientosDisponibles: number,
      public productosGratis: ProductoComestible[]
    ) {}
  }