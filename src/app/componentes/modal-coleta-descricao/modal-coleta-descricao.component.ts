import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalRegistroNegociacaoComponent } from '../modal-registro-negociacao/modal-registro-negociacao.component';

@Component({
  selector: 'app-modal-coleta-descricao',
  templateUrl: './modal-coleta-descricao.component.html',
  styleUrls: ['./modal-coleta-descricao.component.css']
})
export class ModalColetaDescricaoComponent {

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(ModalRegistroNegociacaoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(){
    console.log("Funcionou");
  //   this.service.save(this.form.value).subscribe(
  //     result => this.onSucess(),
  //     error => this.onError());
  // }
    this.snackBar.open('Coleta confirmada com sucesso', '', {duration: 2000})
  }

  // private onSucess(){
  //   this.snackBar.open('Coleta confirmada com sucesso'', '', {duration: 3000})
  //   this.onCancel();
  // }

  // private onError(){
  //   this.snackBar.open('Erro ao confirmar coleta', '', {duration: 3000})
  // }

}
