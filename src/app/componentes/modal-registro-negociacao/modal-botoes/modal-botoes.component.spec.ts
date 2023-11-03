import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBotoesComponent } from './modal-botoes.component';

describe('ModalBotoesComponent', () => {
  let component: ModalBotoesComponent;
  let fixture: ComponentFixture<ModalBotoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBotoesComponent]
    });
    fixture = TestBed.createComponent(ModalBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
