import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstmoduleRoutingModule } from './firstmodule-routing.module';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    EditComponent, 
  ],
  imports: [
    CommonModule,
    FirstmoduleRoutingModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    SharedModule,ReactiveFormsModule
  ],
  exports:[HomeComponent]
})
export class FirstmoduleModule { }
