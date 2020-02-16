import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    loadChildren: './nav-module/nav-module.module#NavModuleModule'
  }
  // {
  //   path: 'treeView',
  //   loadChildren: './treeview-module/treeview-module.module#TreeviewModuleModule'
  // },
  // {
  //   path: 'drag',
  //   loadChildren: './drag-module/drag-module.module#DragModuleModule'
  // },
  // {
  //   path: 'material-tree',
  //   loadChildren: './material-tree-view/material-tree-view.module#MaterialTreeViewModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
