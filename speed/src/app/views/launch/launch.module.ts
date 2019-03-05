import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch.component';

@NgModule({
  imports: [
    CommonModule,
    LaunchRoutingModule
  ],
  declarations: [
    LaunchComponent
  ]
})
export class LaunchModule { }
