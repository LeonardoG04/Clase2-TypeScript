import { Component } from '@angular/core';
import { UsuarioService } from './servicio/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  nombre = '';
  usuario = '';

  constructor(private usuarioService: UsuarioService){}

  guardar(){
    this.usuarioService.setUsuario(this.nombre);
    this.usuario = this.usuarioService.getUsuario();
  }
}
