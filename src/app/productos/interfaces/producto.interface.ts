//productos: idProducto, nombre, descripción, precio y idCategoria.

export interface Producto {
    idProducto?: string;
    nombre: string;
    descripcion: string;
    precio: number;
    idCategoria: number;
}
