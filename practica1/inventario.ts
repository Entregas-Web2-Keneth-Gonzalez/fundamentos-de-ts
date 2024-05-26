import { Producto } from "./producto";

export class Inventario{
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void{
        this.productos.push(producto);
    }

    mostrarProductos():void{
        console.log("Lista de productos");
            this.productos.forEach(producto =>{
                console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
            });      
    }
}