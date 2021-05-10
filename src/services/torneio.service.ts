import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Lutador } from '../models/lutador';

@Injectable({
  providedIn: 'root'
})
export class TorneioService {

  url = 'https://localhost:44394/'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getLutadores(): Observable<Lutador[]> {
    return this.httpClient.get<Lutador[]>(this.url + "GetLutadores")
      .pipe(
      retry(2),
      catchError(this.handleError))
  }

  iniciarTorneio(): Observable<Lutador[]> {
    return this.httpClient.get<Lutador[]>(this.url + "IniciarTorneio")
      .pipe(
      retry(2),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };  

}
