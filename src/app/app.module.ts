import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterModule } from '@angular/router';
import { CategoryFilterPipe } from './productos/pipes/category-filter.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp({
      projectId: 'crud-castelec',
      appId: '1:189187059721:web:9823bb0e447d0a928008d8',
      storageBucket: 'crud-castelec.appspot.com',
      apiKey: 'AIzaSyBlo0wYRTcuim02NK4EWcFEAOCf3Ze-ytc',
      authDomain: 'crud-castelec.firebaseapp.com',
      messagingSenderId: '189187059721',
    }),
  ],
  providers: [
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'crud-castelec',
        appId: '1:189187059721:web:9823bb0e447d0a928008d8',
        storageBucket: 'crud-castelec.appspot.com',
        apiKey: 'AIzaSyBlo0wYRTcuim02NK4EWcFEAOCf3Ze-ytc',
        authDomain: 'crud-castelec.firebaseapp.com',
        messagingSenderId: '189187059721',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
