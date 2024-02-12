import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeysComponent } from './keys/keys.component';

const routes: Routes = [
  { path: '', redirectTo: 'keys', pathMatch: 'full' },
  { path: 'keys', component: KeysComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreRoutingModule {}
