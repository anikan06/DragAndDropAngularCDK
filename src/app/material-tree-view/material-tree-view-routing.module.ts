import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialTreeComponentComponent } from './material-tree-component/material-tree-component.component';


const routes: Routes = [
  {
    path: '',
    component: MaterialTreeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialTreeViewRoutingModule { }
