import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { NuevoProductoPageComponent } from './pages/nuevo-producto-page/nuevo-producto-page.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ProductosPageComponent,
    NuevoProductoPageComponent,
    CardProductoComponent,
    CategoriaPipe,
    CategoryFilterPipe
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductosModule { }
