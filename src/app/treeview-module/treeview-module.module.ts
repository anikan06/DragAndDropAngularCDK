import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TreeviewModule } from 'ngx-treeview';
import { FormsModule } from '@angular/forms';

import { TreeviewModuleRoutingModule } from './treeview-module-routing.module';
import { TreeViewComponentComponent } from './tree-view-component/tree-view-component.component';


@NgModule({
  declarations: [TreeViewComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    TreeviewModuleRoutingModule,
    AngularFontAwesomeModule,
    TreeviewModule.forRoot()
  ]
})
export class TreeviewModuleModule { }
