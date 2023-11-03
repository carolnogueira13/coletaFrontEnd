import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BotaoInputServiceService } from 'src/app/servicos/botao-input-service.service';

@Component({
  selector: 'app-modal-botoes',
  templateUrl: './modal-botoes.component.html',
  styleUrls: ['./modal-botoes.component.css']
})
export class ModalBotoesComponent {
  inputValue: string = '';
  // diasDaSemana : string[] = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  diasDaSemana: string[] = [];
  valorSelecionado: number = 8;
  valorSelecionado2: number = 22;

  constructor(private inputServico : BotaoInputServiceService, @Inject(MAT_DIALOG_DATA) public data: any){
  }

  onInputChange(){
    this.inputServico.mudarInputValor(this.inputValue);
  }

  limpar(){
    this.inputServico.mudarInputValor("");
  }

  enviarDatasSelecionadas(){
    this.inputServico.mudarDataSelecionada(this.diasDaSemana);
  }


  // enviarValorParaBotao() {
  //   this.inputServico.setInputValue(this.inputValue);
  // }
}
