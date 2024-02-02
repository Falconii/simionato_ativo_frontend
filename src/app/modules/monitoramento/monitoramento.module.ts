import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoramentoRoutingModule } from './monitoramento-routing.module';
import { ShowMonitoramentoComponent } from './show-monitoramento/show-monitoramento.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ShowMonitoramentoComponent],
  imports: [
    CommonModule,
    MonitoramentoRoutingModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild(),
  ],
})
export class MonitoramentoModule {}
