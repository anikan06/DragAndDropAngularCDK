import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponentComponent } from './nav-component/nav-component.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'treeView',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavComponentComponent,
    children: [
      {
    path: 'treeView',
    loadChildren: 'src/app/treeview-module/treeview-module.module#TreeviewModuleModule'
  },
  {
    path: 'drag',
    loadChildren: 'src/app/drag-module/drag-module.module#DragModuleModule'
  },
  {
    path: 'material-tree',
    loadChildren: 'src/app/material-tree-view/material-tree-view.module#MaterialTreeViewModule'
  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavModuleRoutingModule { }
