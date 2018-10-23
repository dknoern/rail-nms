import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { FirmwareComponent } from './firmware/firmware.component';
import { LocomotivesRoutes } from './locomotives.routing';
import { MapComponent } from './map/map.component';
import { LocomotiveComponent } from './locomotive/locomotive.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LocomotivesRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
      FirmwareComponent,
      MapComponent,
      LocomotiveComponent
  ]
})

export class LocomotivesModule {}
