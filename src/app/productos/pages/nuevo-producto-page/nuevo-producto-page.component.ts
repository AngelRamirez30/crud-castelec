import { Component, OnInit } from '@angular/core';
import { ProductosService} from '../../services/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './nuevo-producto-page.component.html',
  styleUrl: './nuevo-producto-page.component.css'
})
export class NuevoProductoPageComponent implements OnInit{

  public isDeleting: boolean = false;

  constructor(
    private productosService: ProductosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    if (!this.isEditing) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.productosService.getProductoById(id)))
      .subscribe((producto) => {
        if (!producto) {
          return this.router.navigateByUrl('/');
        }
        this.productoForm.reset(producto);
        return;
      });
  }

  public productoForm: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    descripcion: [ '', [Validators.required]],
    precio:     [ 0, [Validators.required]],
    idCategoria:  [ 1 , [Validators.required]],
  });

  public agregarProducto(): void {
    if (this.productoForm.invalid) {
      return;
    }
    if(this.isEditing){
      this.productosService.editarProducto(this.getIdProducto() ,this.productoForm.value);
    }
    else{
      this.productoForm.value.precio = +this.productoForm.value.precio;
      this.productoForm.value.idCategoria = +this.productoForm.value.idCategoria;
      this.productosService.addProducto(this.productoForm.value);
    }
    this.router.navigate(['/productos']);
  }

  get isEditing(): boolean {
    return this.router.url.includes('editar');
  }

  getIdProducto(): string {
    const {id} = this.activatedRoute.snapshot.params;
    return id;
  }

  tryDelete(): void {
    this.isDeleting = true;
  }
  confirm(): void {
    if (!this.isEditing) {
      return;
    }
    this.productosService.eliminarProducto(this.getIdProducto());
    this.router.navigate(['/productos']);
  }

  cancel(): void {
    this.isDeleting = false;
  }
}
