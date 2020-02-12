import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importing angular cdk
import { DragDropModule} from '@angular/cdk/drag-drop';

import { DragModuleRoutingModule } from './drag-module-routing.module';
import { DragComponentComponent } from './drag-component/drag-component.component';


@NgModule({
  declarations: [
    DragComponentComponent
  ],
  imports: [
    CommonModule,
    DragModuleRoutingModule,
    DragDropModule
  ]
})
export class DragModuleModule { }
