import { Biblioteca } from "./biblioteca";
import { Libro } from "./libro";

let biblioteca = new Biblioteca();

function agregarLibro(titulo: string, autor: string, paginas: number){
    let nuevoLibro: Libro = {titulo, autor, paginas};
        biblioteca.agregarLibro(nuevoLibro);  
}

agregarLibro("Cien años de soledad", "Gabriel Garcia Marquez", 417);
agregarLibro("Don Quijote de la mancha", "Miguel de Cervantes", 863);
agregarLibro("El Principito", "Antoine de Saint-Exupery", 96);

biblioteca.mostarLibros();