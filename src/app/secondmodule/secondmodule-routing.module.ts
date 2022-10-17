import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path: 'second', children: [
      { path: 'admin', component: AdminComponent },
      { path: 'edit', component: EditComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondmoduleRoutingModule { }
