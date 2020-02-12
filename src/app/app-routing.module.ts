import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'testApp',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: './nav-module/nav-module.module#NavModuleModule'
  },
  // {
  //   path: 'drag',
  //   loadChildren: './drag-module/drag-module.module#DragModuleModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
