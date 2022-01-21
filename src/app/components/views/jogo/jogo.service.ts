import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Jogo } from './jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategoria(id_cat: String):Observable<Jogo[]>{
    const url = `${this.baseUrl}/jogos?categoria=${id_cat}`
    return this.http.get<Jogo[]>(url)
  }

  findById(id: String): Observable<Jogo>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Jogo>(url)
  }

  create(categoria: Jogo): Observable<Jogo>{
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Jogo>(url, categoria)
  }

  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url) 
  }

  update(categoria: Jogo):Observable<void> {
    const url = `${this.baseUrl}/categorias/${categoria.id}`
    return this.http.put<void>(url, categoria) 
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
