//modulos
//al igual que en java y python se puede utilizar clases desde otros archivos

export function sumar(a: number, b: number){
    return a + b;
}

export function restar(a: number, b: number){
    return a - b;
}

export function multiplicar(a: number, b: number){
    return a * b;
}

export function dividir(a: number, b: number){
    if(b != 0){
        return a / b;
    } else {
        console.log("No se pude dividir por 0")
        return 0;
    }
}