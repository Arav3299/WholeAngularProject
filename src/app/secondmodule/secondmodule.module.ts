import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondmoduleRoutingModule } from './secondmodule-routing.module';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { FirstmoduleModule } from '../firstmodule/firstmodule.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    EditComponent,
    AdminComponent
  ],
  imports: [
    SecondmoduleRoutingModule,
    FirstmoduleModule,CommonModule,FormsModule,SharedModule,ReactiveFormsModule
  ]
})
export class SecondmoduleModule { }
