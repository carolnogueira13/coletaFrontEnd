import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalRegistroNegociacaoComponent } from '../modal-registro-negociacao/modal-registro-negociacao.component';
import { DescarteMaterialService } from 'src/app/servicos/descarte-material.service';
import { DescarteMaterial } from 'src/app/model/descarteMaterial';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcordoColeta } from 'src/app/model/acordoColeta';

@Component({
  selector: 'app-modal-coleta-descricao',
  templateUrl: './modal-coleta-descricao.component.html',
  styleUrls: ['./modal-coleta-descricao.component.css']
})
export class ModalColetaDescricaoComponent {

  descarteMaterial : DescarteMaterial = null;
  id : number = 1;
  acordoId = 121;
  acordoColeta : AcordoColeta = {
    acordo_coleta_id : 121,
    acordo_coleta_data_solicitacao : "25/11/2023",
    acordo_coleta_data_coleta : "23/11/2023",
    acordo_coleta_status : 1,
    coletor_id : 45
  }

  updateDescarteMaterialForm: FormGroup;

  constructor(private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private descarteMaterialservico : DescarteMaterialService,
    public fb: FormBuilder){

      this.descarteMaterialservico.getDescarteMaterial(this.id).subscribe((data)=>
    this.updateDescarteMaterialForm = this.fb.group({
      id : [data.id],
      material_quantidade: [data.material_quantidade],
      material_status_coleta : [data.material_status_coleta],
      material_status : [data.material_status],
      material_preco : [data.material_preco],
      material_coleta_id : [data.material_coleta_id],
      material_imposto : [data.material_imposto],
      descarte_id : [data.descarte_id],
      descarte : [data.descarte],
      acordo_coleta_id : [data.acordo_coleta_id],
      acordo_coleta : [data.acordo_coleta]
    }))

    }

  openDialog() {
    const dialogRef = this.dialog.open(ModalRegistroNegociacaoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(){
    this.carregaDescarteMaterial(this.id);
  }

  carregaDescarteMaterial(id){
    this.descarteMaterialservico.getDescarteMaterial(id).subscribe((data)=>
    this.descarteMaterial = data)
  }


  onSubmit(){

    this.descarteMaterialservico.adicionarColetor(this.id, this.acordoId, this.acordoColeta).subscribe({
      next: () => this.onSucess(),
      error: () => this.onError()
    })

  }

  private onSucess(){
    this.snackBar.open('Coleta confirmada com sucesso', '', {duration: 3000});
  }

  private onError(){
    this.snackBar.open('Erro ao confirmar coleta', '', {duration: 3000})
  }

}
