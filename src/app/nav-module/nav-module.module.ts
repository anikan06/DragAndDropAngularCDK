import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavModuleRoutingModule } from './nav-module-routing.module';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavComponentComponent, NavbarComponent],
  imports: [
    CommonModule,
    NavModuleRoutingModule
  ]
})
export class NavModuleModule { }
