import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './common/shared/shared.component';
import { FormDirective } from '../shared/validators/form.directive';


@NgModule({
  declarations: [
    SharedComponent,FormDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[SharedComponent,FormDirective]
})
export class SharedModule { }
