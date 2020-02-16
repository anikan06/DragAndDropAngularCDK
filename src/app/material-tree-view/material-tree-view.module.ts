import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';

import { MaterialTreeViewRoutingModule } from './material-tree-view-routing.module';
import { MaterialTreeComponentComponent } from './material-tree-component/material-tree-component.component';


@NgModule({
  declarations: [MaterialTreeComponentComponent],
  imports: [
    CommonModule,
    MaterialTreeViewRoutingModule,
    MatTreeModule,
    MatIconModule,
  ]
})
export class MaterialTreeViewModule { }
