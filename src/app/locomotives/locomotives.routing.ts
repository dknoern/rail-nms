import { Routes } from '@angular/router';

import { FirmwareComponent } from './firmware/firmware.component';
import { LocomotiveComponent } from './locomotive/locomotive.component';
import { MapComponent } from './map/map.component';



export const LocomotivesRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'firmware',
        component: FirmwareComponent
    }]},
    {
    path: '',
    children: [ {
      path: 'map',
      component: MapComponent
    }]
    },
    {
    path: '',
    children: [ {
      path: 'locomotive',
      component: LocomotiveComponent
    }]
    }
];
