import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeParaRoutingModule } from './de-para-routing.module';
import { CrudDeParaComponent } from './crud-de-para/crud-de-para.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CrudDeParaComponent],
  imports: [
    CommonModule,
    DeParaRoutingModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class DeParaModule {}
