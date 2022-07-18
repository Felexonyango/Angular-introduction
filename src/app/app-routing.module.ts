import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsComponent } from './components/forms/forms.component';
import { TodosComponent } from './components/todos/todos.component';
import { DataFetchComponent } from './components/data-fetch/data-fetch.component';

const routes: Routes = [
  {path:'todos',   component:TodosComponent},
  {path:'about',   component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'forms', component:FormsComponent},
  {path:'data', component:DataFetchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents=[
   TodosComponent,
   AboutComponent,
   ContactComponent,
   FormsComponent
]
