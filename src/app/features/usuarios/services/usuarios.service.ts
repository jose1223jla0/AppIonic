import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  private http = inject(HttpClient);
  private URLbase: string = environment.apiURL + '/Usuario';

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.URLbase);
  }

  getUsuario(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(this.URLbase + '/' + id);
  }

  updateUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(this.URLbase + '/' + usuario.idUsuario, usuario);
  }
}
