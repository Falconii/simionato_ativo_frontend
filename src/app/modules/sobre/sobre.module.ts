import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { KeysComponent } from './keys/keys.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [KeysComponent],
  imports: [
    CommonModule,
    SobreRoutingModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class SobreModule {}
