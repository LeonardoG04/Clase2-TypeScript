import { Component } from '@angular/core';
import { TareaService } from '../../servicio/tarea/tarea.service';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent {

  constructor(private tareaService: TareaService){}

  get tareas(){
    return this.tareaService.listarTareas();
  }

}
