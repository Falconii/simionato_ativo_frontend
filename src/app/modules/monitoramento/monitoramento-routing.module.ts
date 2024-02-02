import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowMonitoramentoComponent } from './show-monitoramento/show-monitoramento.component';

const routes: Routes = [
  { path: '', redirectTo: 'monitoramento', pathMatch: 'full' },
  { path: 'monitoramento', component: ShowMonitoramentoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitoramentoRoutingModule {}
