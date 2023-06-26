import { Cliente } from "./cliente";
import { Pelicula } from "./peliculas";
export class Cine {
    private static instancia: Cine;
    private peliculas: Pelicula[];
  
    private constructor(public nombre: string) {
      this.peliculas = [];
    }
  
    public static obtenerInstancia(nombre: string): Cine {
      if (!Cine.instancia) {
        Cine.instancia = new Cine(nombre);
      }
      return Cine.instancia;
    }
  
    public agregarPelicula(pelicula: Pelicula): void {
      this.peliculas.push(pelicula);
    }
  
    public mostrarDetalleCliente(cliente: Cliente): void {
      console.log("Nombre del cliente:", cliente.nombre);
      console.log("Película escogida:", cliente.pelicula.nombre);
      console.log("Sala de cine:", cliente.sala.numero);
      console.log("Asiento donde se encuentra ubicado:", cliente.asiento);
      console.log("Aperitivos o accesorios suministrados en la sala de forma gratuita:");
      cliente.sala.productosGratis.forEach((producto) => {
        producto.mostrarDetalle();
      });
      console.log("Productos comestibles que consumirá el cliente mientras ve la cinta:");
      cliente.productosConsumidos.forEach((producto) => {
        producto.mostrarDetalle();
      });
    }
  }