import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import{TasksService} from './tasks.service';
import { AddDesComponent } from './add-des/add-des.component'

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddDesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
