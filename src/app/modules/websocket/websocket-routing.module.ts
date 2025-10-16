import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  { path: '', redirectTo: 'websocket', pathMatch: 'full' },
  { path: 'websocket', component: TesteComponent}
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsocketRoutingModule { }
