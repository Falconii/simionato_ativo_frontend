
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsocketRoutingModule } from './websocket-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [TesteComponent],
  imports: [
    CommonModule,
    WebsocketRoutingModule,
    MaterialModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forChild()
  ]
})
export class WebsocketModule { }
