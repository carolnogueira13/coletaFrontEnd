import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { DescarteMaterial } from '../model/descarteMaterial';
import { AcordoColeta } from '../model/acordoColeta';

@Injectable({
  providedIn: 'root'
})
export class DescarteMaterialService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  getDescartesMaterial(): Observable<DescarteMaterial>{
    return this.http
    .get<DescarteMaterial>(this.baseurl + '/descartes_material/')
    .pipe(retry(1),catchError(this.errorHandl))
  }

  // GET BY ID
  getDescarteMaterial(id): Observable<DescarteMaterial> {
    return this.http
      .get<DescarteMaterial>(this.baseurl + '/descartes_material/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Adicionar acordo_coleta (ao clicar em aceitar)
  adicionarColetor(id, acordoId : number, acordoColeta : AcordoColeta) : Observable<DescarteMaterial>{
    return this.http
    .patch<DescarteMaterial>(this.baseurl+ '/descartes_material/' + id, {acordo_coleta_id: acordoId, acordo_coleta: acordoColeta}, this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

  // Mudar o preço
  mudarValor(id, preco : number) : Observable<DescarteMaterial>{
    return this.http
    .patch<DescarteMaterial>(this.baseurl + '/descartes_material/' + id, {material_preco : preco}, this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandl));
  }

   // POST
   createDescarteMaterial(data):Observable<DescarteMaterial>{
    return this.http
      .post<DescarteMaterial>(this.baseurl + '/descartes_material/', JSON.stringify(data),this.httpOptions)
      .pipe(retry(1),catchError(this.errorHandl));
  }

  // UPDATE
  updateDescarteMaterial(id, data): Observable<DescarteMaterial> {
    return this.http
      .put<DescarteMaterial>(this.baseurl + '/descartes_material/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  deleteDescarteMaterial(id) : Observable<DescarteMaterial>{
    return this.http
    .delete<DescarteMaterial>(this.baseurl + "/products/" + id)
    .pipe(retry(1), catchError(this.errorHandl))
  }


  errorHandl(error:any){
    let errorMessage = ''
    // o erro está vindo do front
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      // erro que veio da API
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage
    })
  }

}
