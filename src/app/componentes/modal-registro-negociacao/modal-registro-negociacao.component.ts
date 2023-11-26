import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalBotoesComponent } from './modal-botoes/modal-botoes.component';
import { BotaoInputService } from 'src/app/servicos/botao-input-service.service';
import { DescarteMaterialService } from 'src/app/servicos/descarte-material.service';
import { map, mergeMap } from 'rxjs';
import { FormGroup } from '@angular/forms';

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
  id : number = 1;

  registroNegociacaoForm: FormGroup;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog, private inputServico: BotaoInputService, @Inject(MAT_DIALOG_DATA) public data: any,  private descarteMaterialservico : DescarteMaterialService){}

  ngOnInit(){
    console.log(this.data.descarteMaterial);
  }

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

    const numberObservable$ = this.inputValue$.pipe(
    map((inputValue: string) => Number(inputValue)),
    mergeMap((numValue: number) => {
      return this.descarteMaterialservico.mudarValor(this.id, numValue);
    })
  );

  numberObservable$.subscribe({
    next: () => this.onSucess(),
    error: () => this.onError(),
    complete: () => {
      // Executa após a conclusão de todas as operações
      this.limpar();
    }
  });
  }

  limpar(){
    this.inputServico.mudarInputValor("");
    this.inputServico.mudarDataSelecionada([]);
  }

  private onSucess(){
    this.snackBar.open('Coleta confirmada com sucesso', '', {duration: 3000});
  }

  private onError(){
    this.snackBar.open('Erro ao confirmar coleta', '', {duration: 3000})
  }

}
