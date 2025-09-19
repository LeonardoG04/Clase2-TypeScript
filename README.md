# ClaseAngular

🔵 Parte 1 – Tipado de variables

Explicación:
•	El tipado sirve para decir qué tipo de dato debe tener una variable.
•	Esto evita errores como sumar un número con un texto.

@Component({
  selector: 'app-root',
  template: `
    <h1>Clase 2: TypeScript en Angular</h1>
    <p>Nombre: {{ nombre }}</p>
    <p>Edad: {{ edad }}</p>
    <p>Activo: {{ activo ? 'Sí' : 'No' }}</p>
  `
})
export class AppComponent {
  nombre: string = 'Ana';
  edad: number = 25;
  activo: boolean = true;
}


•	“Si cambio edad a un texto, TypeScript me dará error incluso antes de ejecutar.”
•	“Eso nos da seguridad."

________________________________________
🔵 Parte 2 – Interfaces
Explicación:
•	Una interfaz es como un contrato.
•	Define cómo debe lucir un objeto.
•	Si falta algo o hay un tipo distinto, TypeScript avisa.

interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Usuario</h2>
    <p>{{ usuario.nombre }} ({{ usuario.edad }} años) - Activo: {{ usuario.activo }}</p>
  `
})
export class AppComponent {
  usuario: Usuario = {
    nombre: 'Carlos',
    edad: 30,
    activo: true
  };
}

•	“Las interfaces ayudan a que nuestros objetos sean consistentes.”
•	“En Angular se usan mucho para tipar datos de una API.”

________________________________________
🔵 Parte 3 – Clases y objetos
Explicación:
•	Una clase es un molde para crear objetos.
•	Sirve para organizar código y aplicar POO (Programación Orientada a Objetos).

class Persona {
  constructor(public nombre: string, public edad: number) {}

  presentarse(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Persona</h2>
    <p>{{ persona.presentarse() }}</p>
  `
})
export class AppComponent {
  persona = new Persona('María', 22);
}


•	“Una clase tiene atributos y métodos.”
•	“Podemos crear varias personas con el mismo molde.”

________________________________________
🔵 Parte 4 – Arrow functions
Explicación:
•	Son funciones más cortas y modernas.
•	No cambian el contexto de this.

@Component({
  selector: 'app-root',
  template: `
    <h2>Arrow Function</h2>
    <p>5 + 3 = {{ sumar(5,3) }}</p>
  `
})
export class AppComponent {
  sumar = (a: number, b: number): number => a + b;
}


•	“Noten que es más compacta que una función normal.”
•	“Son muy usadas en Angular, sobre todo en observables.”

________________________________________
🔵 Parte 5 – Funciones asíncronas
Explicación inicial:
•	En programación, a veces algo tarda (ejemplo: pedir datos a un servidor).
•	Si no usamos funciones asíncronas, la aplicación se queda congelada.
•	Con async/await o promesas, podemos esperar sin bloquear la app.

👉 Analogía:
•	“Imaginen que piden una pizza. No esperan en la cocina con los brazos cruzados, siguen haciendo cosas.
•	Cuando la pizza llega, reciben la notificación. Eso es asincronía.”

@Component({
  selector: 'app-root',
  template: `
    <h2>Async Function</h2>
    <p>{{ mensaje }}</p>
    <button (click)="cargarDatos()">Cargar datos</button>
  `
})
export class AppComponent {
  mensaje: string = 'Esperando...';

  async cargarDatos() {
    this.mensaje = await this.obtenerDatos();
  }

  obtenerDatos(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => resolve('Datos cargados correctamente ✅'), 2000);
    });
  }
}

•	“El botón simula pedir datos al servidor.”
•	“Esperamos 2 segundos y recibimos la respuesta.”

________________________________________
🔵 Parte 6 – Decoradores
Explicación:
•	Son funciones especiales que agregan metadatos a clases o métodos.
•	Angular usa decoradores para todo: @Component, @Injectable, @NgModule.

function log(constructor: Function) {
  console.log('Clase creada:', constructor.name);
}

@log
class Demo {
  constructor() {}
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Decoradores</h2>
    <p>Revisa la consola para ver el decorador en acción</p>
  `
})
export class AppComponent {
  demo = new Demo();
}


•	“Decorador = etiqueta que modifica el comportamiento de una clase.”
•	“Por ejemplo, @Component le dice a Angular que esta clase es un componente.”
