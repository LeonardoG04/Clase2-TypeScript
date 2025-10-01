import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TareaFormComponent } from './tarea/tarea-form/tarea-form.component';
import { TareaListComponent } from './tarea/tarea-list/tarea-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaFormComponent,
    TareaListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
