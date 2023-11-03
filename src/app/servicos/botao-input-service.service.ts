import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotaoInputServiceService {
  private inputValueSubject = new BehaviorSubject<string>('');
  inputValor$: Observable<string> = this.inputValueSubject.asObservable();

  private inputDataSubject = new BehaviorSubject<string[]>([]);
  inputData$ = this.inputDataSubject.asObservable();

  mudarInputValor(value: string) {
    this.inputValueSubject.next(value);
  }

  mudarDataSelecionada(value: string[]) {
    this.inputDataSubject.next(value);
  }
}

