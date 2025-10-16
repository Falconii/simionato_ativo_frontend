import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFotosGoogleComponent } from './show-fotos-google/show-fotos-google.component';

const routes: Routes = [
  { path: '', redirectTo: 'googlefotos', pathMatch: 'full' },
  { path: 'googlefotos', component: ShowFotosGoogleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglefotosRoutingModule { }
