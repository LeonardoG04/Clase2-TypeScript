import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario: string = '';

  constructor() {}

  setUsuario(nombre: string) {
    this.usuario = nombre;
  }

  getUsuario(): string {
    return this.usuario;
  }
}
