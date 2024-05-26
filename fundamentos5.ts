//genericos
//los genericos permiten crear componentes reutilizables
//funcionan con varios tipos de datos

function identidad<T>(arg: T): T{
    return arg
}

let salida1 = identidad<string>("Keneth");
let salida2 = identidad<number>(21);

console.log(salida1);
console.log(salida2);