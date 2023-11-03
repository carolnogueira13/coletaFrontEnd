import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalColetaDescricaoComponent } from './componentes/modal-coleta-descricao/modal-coleta-descricao.component';
import { ModalRegistroNegociacaoComponent } from './componentes/modal-registro-negociacao/modal-registro-negociacao.component';
import { ModalBotoesComponent } from './componentes/modal-registro-negociacao/modal-botoes/modal-botoes.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalColetaDescricaoComponent,
    ModalRegistroNegociacaoComponent,
    ModalBotoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatButtonToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
