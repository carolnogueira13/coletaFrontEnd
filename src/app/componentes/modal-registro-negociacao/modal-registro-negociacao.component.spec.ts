import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroNegociacaoComponent } from './modal-registro-negociacao.component';

describe('ModalRegistroNegociacaoComponent', () => {
  let component: ModalRegistroNegociacaoComponent;
  let fixture: ComponentFixture<ModalRegistroNegociacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRegistroNegociacaoComponent]
    });
    fixture = TestBed.createComponent(ModalRegistroNegociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
