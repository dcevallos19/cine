import { Cine } from "./cine";
import { Pelicula } from "./peliculas";
import { Sala } from "./sala";
import { Aperitivo } from "./aperitivo";
import { Bebida } from "./bebidas";
import { Cliente } from "./cliente";
// Ejemplo de uso
  
  // Crear cine
  const cine = Cine.obtenerInstancia("Mi Cine");
  
  // Crear películas
  const johnWick = new Pelicula("John Wick");
  const Pikachu = new Pelicula("Pikachu");
  
  // Agregar películas al cine
  cine.agregarPelicula(johnWick);
  cine.agregarPelicula(Pikachu);
  
  // Crear salas
  const sala1 = new Sala(1, johnWick, 100, [new Aperitivo("Canguil", "Salado"), new Bebida("Refresco", "Grande")]);
  const sala2 = new Sala(2, Pikachu, 150, [new Aperitivo("Hot-dog", "Clásico"), new Bebida("Agua", "Pequeño")]);
  
  // Crear cliente
  const cliente1 = new Cliente("Juan", johnWick, sala1, 10, [new Aperitivo("Galletas", "Dulces")]);
  const cliente2 = new Cliente("María", Pikachu, sala2, 5, [new Bebida("Refresco", "Mediano"), new Bebida("Café", "Grande")]);
  
  // Mostrar detalle del cliente
  cine.mostrarDetalleCliente(cliente1);
  console.log("-----------------------");
  cine.mostrarDetalleCliente(cliente2);