import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  private categorias = [
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Moda' },
    { id: 3, nombre: 'Hogar y Cocina' }
  ];

  transform(id: number): string {
    const categoria = this.categorias.find(cat => cat.id === id);
    return categoria ? categoria.nombre : 'Categoría no encontrada';
  }
}
