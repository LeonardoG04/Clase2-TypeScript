import { Component, OnInit } from '@angular/core';

export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

class GestorTareas {
  private tareas: Tarea[] = [];

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  listarTareas(): Tarea[] {
    return this.tareas;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lista: Tarea[] = [];
  gestor = new GestorTareas();

  ngOnInit(): void {
    // Agregamos algunas tareas de prueba
    this.gestor.agregarTarea({
      id: 1,
      titulo: 'Estudiar Angular',
      completada: false,
    });
    this.gestor.agregarTarea({
      id: 2,
      titulo: 'Practicar TypeScript',
      completada: true,
    });

    // Cargamos la lista
    this.lista = this.gestor.listarTareas();
  }
}
