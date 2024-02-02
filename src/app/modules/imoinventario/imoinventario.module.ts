import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImoinventarioRoutingModule } from './imoinventario-routing.module';
import { CrudImoinventarioComponent } from './crud-imoinventario/crud-imoinventario.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [CrudImoinventarioComponent],
  imports: [
    CommonModule,
    ImoinventarioRoutingModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class ImoinventarioModule {}
