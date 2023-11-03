import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalBotoesComponent } from './modal-botoes/modal-botoes.component';
import { BotaoInputService } from 'src/app/servicos/botao-input-service.service';

@Component({
  selector: 'app-modal-registro-negociacao',
  templateUrl: './modal-registro-negociacao.component.html',
  styleUrls: ['./modal-registro-negociacao.component.css']
})
export class ModalRegistroNegociacaoComponent {

  inputValue$ = this.inputServico.inputValor$;
  diasDaSemana$ = this.inputServico.inputData$;
  horario$ = this.inputServico.inputHorario$;
  versaoModal: 'valor' | 'data' | 'horario' = 'valor';

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog, private inputServico: BotaoInputService){}

  modalValor() {
    this.versaoModal = 'valor';
    this.openDialog();
  }

  modalData() {
    this.versaoModal = 'data';
    this.openDialog();
  }

  modalHorario() {
    this.versaoModal = 'horario';
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalBotoesComponent, {
      data: { versaoModal: this.versaoModal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  enviar(){
    console.log("Funcionou");
    this.snackBar.open('Sua mensagem foi enviada ao descartador, espere o retorno', '', {duration: 2000})
    const subscription = this.diasDaSemana$.subscribe((value: string[]) => {
      console.log('Novo valor:', value);
    });
  }

  limpar(){
    this.inputServico.mudarInputValor("");
    this.inputServico.mudarDataSelecionada([]);
  }

}
