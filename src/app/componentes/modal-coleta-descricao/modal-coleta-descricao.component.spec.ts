import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalColetaDescricaoComponent } from './modal-coleta-descricao.component';

describe('ModalColetaDescricaoComponent', () => {
  let component: ModalColetaDescricaoComponent;
  let fixture: ComponentFixture<ModalColetaDescricaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalColetaDescricaoComponent]
    });
    fixture = TestBed.createComponent(ModalColetaDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
