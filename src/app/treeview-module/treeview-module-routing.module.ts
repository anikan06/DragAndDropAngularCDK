import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeViewComponentComponent } from './tree-view-component/tree-view-component.component';


const routes: Routes = [
  {
    path: '',
    component: TreeViewComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeviewModuleRoutingModule { }
