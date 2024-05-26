import { Libro } from "./libro";

export class Biblioteca{
    private libros: Libro[] = [];

    agregarLibro(libro: Libro): void{
        this.libros.push(libro);
    }

    mostarLibros(): void{
        console.log("Lista de libros");
        this.libros.forEach(libro =>{
            console.log(`Titulo: ${libro.titulo}, Autor ${libro.autor}, Paginas: ${libro.paginas}`);
        });
    }
}