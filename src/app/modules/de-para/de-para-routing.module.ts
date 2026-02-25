import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDeParaComponent } from './crud-de-para/crud-de-para.component';

const routes: Routes = [
  { path: '', redirectTo: 'de_para', pathMatch: 'full' },
  { path: 'de_para', component: CrudDeParaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeParaRoutingModule {}
