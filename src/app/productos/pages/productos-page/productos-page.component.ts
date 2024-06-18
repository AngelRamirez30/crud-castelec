import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './productos-page.component.html',
  styleUrl: './productos-page.component.css'
})
export class ProductosPageComponent implements OnInit{
  formGroup: FormGroup = new FormGroup({
    selectedCategory: new FormControl(0)
  });

  public selectedCategory: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService
  ) {
    this.formGroup = this.formBuilder.group({
      selectedCategory: [0]
    });
  }

  public productos?: Producto[];

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }

  public changeCategory(newCategory: string): void {
    this.selectedCategory = +newCategory;
  }

}
