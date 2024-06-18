import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Producto[] | undefined, category: number): Producto[] | undefined {
    if (!products || category === null || category === undefined || category === 0) {
      return products;
    }
    return products.filter(product => product.idCategoria === category);
  }

}
