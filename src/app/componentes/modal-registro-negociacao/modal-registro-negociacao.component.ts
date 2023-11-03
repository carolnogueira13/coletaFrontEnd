import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalBotoesComponent } from './modal-botoes/modal-botoes.component';
import { BotaoInputServiceService } from 'src/app/servicos/botao-input-service.service';

@Component({
  selector: 'app-modal-registro-negociacao',
  templateUrl: './modal-registro-negociacao.component.html',
  styleUrls: ['./modal-registro-negociacao.component.css']
})
export class ModalRegistroNegociacaoComponent {

  inputValue$ = this.inputServico.inputValor$;
  diasDaSemana$ = this.inputServico.inputData$;
  showModalVersion: 'version1' | 'version2' | 'version3' = 'version1';

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog, private inputServico: BotaoInputServiceService){}

  onClickVersion1() {
    this.showModalVersion = 'version1';
    this.openDialog();
  }

  onClickVersion2() {
    this.showModalVersion = 'version2';
    this.openDialog();
  }

  onClickVersion3() {
    this.showModalVersion = 'version3';
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalBotoesComponent, {
      data: { showModalVersion: this.showModalVersion }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit(){
    console.log("Funcionou");
    this.snackBar.open('Sua mensagem foi enviada ao descartador, espere o retorno', '', {duration: 2000})
  }

  limpar(){
    this.inputServico.mudarInputValor("");
    this.inputServico.mudarDataSelecionada([]);
  }

}
