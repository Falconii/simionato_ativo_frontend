import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPastaComponent } from './upload-pasta/upload-pasta.component';


const routes: Routes = [
  { path: '', redirectTo: 'upload_pasta', pathMatch: 'full' },
  { path: 'upload_pasta', component: UploadPastaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFotosRoutingModule { }
