import { Component } from '@angular/core';
import { TareaService } from '../../servicio/tarea/tarea.service';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrl: './tarea-form.component.css',
})
export class TareaFormComponent {
  nuevaTarea: string = '';

  constructor(private tareaService: TareaService) {}

  agregar() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareaService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }
}
