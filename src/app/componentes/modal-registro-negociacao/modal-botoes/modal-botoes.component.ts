import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BotaoInputService } from 'src/app/servicos/botao-input-service.service';

// Componente para manipular os modais que abrem ao clicar nos botões da negociação
@Component({
  selector: 'app-modal-botoes',
  templateUrl: './modal-botoes.component.html',
  styleUrls: ['./modal-botoes.component.css']
})
export class ModalBotoesComponent {
  inputValue: string = '';
  // diasDaSemana : string[] = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  diasDaSemana: string[] = [];
  inicio: number = 8;
  final: number = 22;

  constructor(private inputServico : BotaoInputService, @Inject(MAT_DIALOG_DATA) public data: any){
  }

  mudancaNoInputValor(){
    this.inputServico.mudarInputValor(this.inputValue);
  }

  limpar(){
    this.inputServico.mudarInputValor("");
  }

  limpar2(){
    this.inputServico.mudarDataSelecionada([]);
  }

  limpar3(){
    this.inputServico.mudarHorarioSelecionado([]);
  }

  enviarDatasSelecionadas(){
    this.inputServico.mudarDataSelecionada(this.diasDaSemana);
  }

  enviarHorarioSelecionado(){
    this.inputServico.mudarHorarioSelecionado([this.inicio, this.final]);
    console.log(this.inicio, this.final);
  }



}
