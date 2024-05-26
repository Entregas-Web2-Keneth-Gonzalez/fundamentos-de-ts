//interfaces
interface Persona{
    nombre: string;
    edad: number;
}

function saludar(persona: Persona){
    console.log(`Hola, ${persona.nombre}`); //alt + 96 para estas comillas
}

let keneth: Persona = {nombre: "Keneth", edad: 21}
saludar(keneth);