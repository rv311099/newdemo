import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddDesComponent}from './add-des/add-des.component'
import{TasksComponent}from './tasks/tasks.component'


const routes: Routes = [
  {
    component:AddDesComponent,
    path:'add/:id'
  },
  {
    component:TasksComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
