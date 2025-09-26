import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usuario = 'Ariana';

  frutas: string[] = ['Manzana', 'Bananas', 'Peras'];

  color = 'rojo';

  esActivo = true;
  esActivo1 = true;
}
