import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragComponentComponent } from './drag-component/drag-component.component';


const routes: Routes = [
  {
    path: '',
    component: DragComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragModuleRoutingModule { }
