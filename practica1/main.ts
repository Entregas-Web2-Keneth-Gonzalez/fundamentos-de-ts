//gestor de productos
//agregar y ver productos
import { Inventario } from "./inventario";
import { Producto } from "./producto";

let inventario = new Inventario();

function agregarProducto(nombre: string, precio: number, cantidad: number){
    let nuevoProducto: Producto = {nombre, precio, cantidad};
    inventario.agregarProducto(nuevoProducto);
}

agregarProducto("LLanta29", 20000, 10);
agregarProducto("LLanta26", 15000, 8);
agregarProducto("LLanta20", 10000, 5);

inventario.mostrarProductos();