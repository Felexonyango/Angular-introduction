import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './components/forms/forms.component';
import { TodosComponent } from './components/todos/todos.component';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  {path:'todos',   component:TodosComponent},
  {path:'forms',   component:FormsComponent},
  {path:'tasks',   component:TasksComponent}

];

@NgModule({
  declarations: [
     AppComponent,
    TodosComponent,
    FormsComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent 
  ],
     
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
