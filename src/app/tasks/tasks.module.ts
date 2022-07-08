import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { CounterComponent } from './counter/counter.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { ForloopComponent } from './forloop/forloop.component';
import { BasicformComponent } from './basicform/basicform.component';



@NgModule({
  declarations: [
    EventsComponent,
    CounterComponent,
    IfelseComponent,
    ForloopComponent,
    BasicformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EventsComponent,
    CounterComponent,
    IfelseComponent,
    ForloopComponent,
    BasicformComponent
  ]
})
export class TasksModule { }
