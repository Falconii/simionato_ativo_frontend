import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFotosRoutingModule } from './upload-fotos-routing.module';
import { UploadPastaComponent } from './upload-pasta/upload-pasta.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    UploadPastaComponent
  ],
  imports: [
    CommonModule,
    UploadFotosRoutingModule,
        MaterialModule,
        ScrollingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxMaskModule.forChild(),
  ]
})
export class UploadFotosModule { }
