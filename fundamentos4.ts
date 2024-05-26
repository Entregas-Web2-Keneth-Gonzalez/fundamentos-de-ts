//clases

class Animal{
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    hacerSonido(): void{
        console.log("El animal hace un sonido");
    }

    mostarNombre():void{
        console.log(`El perro se llama ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre: string){
        super(nombre);
    }

    hacerSonido(): void {
        console.log("El perro ladra")
    }
}

let miPerro = new Perro("Negro");
miPerro.hacerSonido();
miPerro.mostarNombre();