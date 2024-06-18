import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';
import { NuevoProductoPageComponent } from './pages/nuevo-producto-page/nuevo-producto-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'lista',
        component: ProductosPageComponent,
      },
      {
        path: 'nuevo',
        component: NuevoProductoPageComponent,
      },
      {
        path: 'editar/:id',
        component: NuevoProductoPageComponent,
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      },{
        path: '**',
        redirectTo: 'lista'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
