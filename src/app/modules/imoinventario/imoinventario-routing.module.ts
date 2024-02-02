import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudImoinventarioComponent } from './crud-imoinventario/crud-imoinventario.component';

const routes: Routes = [
  { path: '', redirectTo: 'imoinventarios', pathMatch: 'full' },
  { path: 'imoinventarios', component: CrudImoinventarioComponent },
  { path: 'imoinventarios/:retorno', component: CrudImoinventarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImoinventarioRoutingModule {}
