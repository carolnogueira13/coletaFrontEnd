import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-registro-negociacao',
  templateUrl: './modal-registro-negociacao.component.html',
  styleUrls: ['./modal-registro-negociacao.component.css']
})
export class ModalRegistroNegociacaoComponent {

  constructor(private snackBar: MatSnackBar){}

  onSubmit(){
    console.log("Funcionou");
    this.snackBar.open('Sua mensagem foi enviada ao descartador, espere o retorno', '', {duration: 3000})
  }

}
