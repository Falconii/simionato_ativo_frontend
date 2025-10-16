import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglefotosRoutingModule } from './googlefotos-routing.module';
import { ShowFotosGoogleComponent } from './show-fotos-google/show-fotos-google.component';

@NgModule({
  declarations: [ShowFotosGoogleComponent],
  imports: [
    CommonModule,
    GooglefotosRoutingModule
  ]
})
export class GooglefotosModule { }
