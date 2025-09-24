import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css'
})
export class CicloComponent  implements OnInit, OnChanges, OnDestroy{

  @Input() nombre: string = '';

  constructor(){
    console.log('Constructor -> el componente fue creado')
  }

  ngOnInit(): void {
    console.log('ngOnInit -> inicializo el componente')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges -> hubo un cambio en @Input', changes)
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy -> el componente sera destruido')
  }

}
