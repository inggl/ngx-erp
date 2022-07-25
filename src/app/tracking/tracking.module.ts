import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './components/tracking/tracking.component';
import {TrackingRoutingModule} from "./tracking-routing.module";



@NgModule({
  declarations: [
    TrackingComponent,
  ],
  imports: [
    CommonModule,
    TrackingRoutingModule
  ]
})
export class TrackingModule { }
