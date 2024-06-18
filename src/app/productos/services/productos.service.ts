import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  getProductos(): Observable<Producto[]> {
    return this.firestore.collection('productos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        const idProducto = a.payload.doc.id;
        data.idCategoria = +data.idCategoria;
        return { idProducto , ...data };
      }))
    );
  }

  getProductoById(id: string): Observable<Producto | undefined> {
    return this.firestore.collection<Producto>('productos').doc(id).valueChanges();
  }

  addProducto(producto: Producto): void {
    this.firestore.collection<Producto>('productos').add(producto);
  }

  editarProducto(id: string, producto: Producto): void {
    this.firestore.collection<Producto>('productos').doc(id).update(producto);
  }
  eliminarProducto(id: string): void {
    this.firestore.collection<Producto>('productos').doc(id).delete();
  }
}
