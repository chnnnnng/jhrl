import { LoginComponent } from './login/login.component';
import { MoveTodoComponent } from './move-todo/move-todo.component';
import { DayViewComponent } from '../components/day-view/day-view.component';
import { WeekViewComponent } from '../components/week-view/week-view.component';
import { DetailPopoverComponent } from './detail-popover/detail-popover.component';
import { CreateSceduleComponent } from './create-schedule/create-scedule.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ManageGroupComponent } from './manage-group/manage-group.component';

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

const coms : any[] = [
  DayViewComponent,
  WeekViewComponent,
  DetailPopoverComponent,
  CreateSceduleComponent,
  EditScheduleComponent,
  CreateTodoComponent,
  ManageGroupComponent,
  MoveTodoComponent,
  LoginComponent
];

@NgModule({
  declarations: coms,
  imports: [
    CommonModule, IonicModule, FormsModule
  ],
  exports: coms
})
export class ComponentsModule { }
