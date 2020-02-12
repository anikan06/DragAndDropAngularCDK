import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponentComponent } from './nav-component/nav-component.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home/drag',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: NavComponentComponent,
    children: [
      {
        path: 'drag',
        loadChildren: 'src/app/drag-module/drag-module.module#DragModuleModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavModuleRoutingModule { }
