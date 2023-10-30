import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalColetaDescricaoComponent } from './componentes/modal-coleta-descricao/modal-coleta-descricao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coletaFrontEndAngular';

  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(ModalColetaDescricaoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
