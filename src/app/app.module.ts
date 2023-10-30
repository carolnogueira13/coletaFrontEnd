import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalColetaDescricaoComponent } from './componentes/modal-coleta-descricao/modal-coleta-descricao.component';
import { ModalRegistroNegociacaoComponent } from './componentes/modal-registro-negociacao/modal-registro-negociacao.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalColetaDescricaoComponent,
    ModalRegistroNegociacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
