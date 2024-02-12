import { ImobilizadoinventarioModel } from './models/imobilizadoinventario-model';
import { ImoinventarioModule } from './modules/imoinventario/imoinventario.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiganaoGuard } from './guards/diganao.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'empresas',
    loadChildren: () =>
      import('./modules/empresa/empresa.module').then((m) => m.EmpresaModule),
    canActivate: [DiganaoGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/gru-user/gru-user.module').then((m) => m.GruUserModule),
    canActivate: [DiganaoGuard],
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule),
    canActivate: [DiganaoGuard],
  },
  {
    path: 'locais',
    loadChildren: () =>
      import('./modules/local/local.module').then((m) => m.LocalModule),
    canActivate: [],
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./modules/produto/produto.module').then((m) => m.ProdutoModule),
    canActivate: [],
  },
  {
    path: 'principais',
    loadChildren: () =>
      import('./modules/principal/principal.module').then(
        (m) => m.PrincipalModule
      ),
    canActivate: [],
  },
  {
    path: 'imobilizados',
    loadChildren: () =>
      import('./modules/imobilizado/imobilizado.module').then(
        (m) => m.ImobilizadoModule
      ),
    canActivate: [],
  },
  {
    path: 'nfes',
    loadChildren: () =>
      import('./modules/nfe/nfe.module').then((m) => m.NfeModule),
    canActivate: [],
  },
  {
    path: 'valores',
    loadChildren: () =>
      import('./modules/valor/valor.module').then((m) => m.ValorModule),
    canActivate: [],
  },

  {
    path: 'grupos',
    loadChildren: () =>
      import('./modules/grupo/grupo.module').then((m) => m.GrupoModule),
    canActivate: [],
  },

  {
    path: 'centroscustos',
    loadChildren: () =>
      import('./modules/centrocusto/centrocusto.module').then(
        (m) => m.CentrocustoModule
      ),
    canActivate: [],
  },

  {
    path: 'inventarios',
    loadChildren: () =>
      import('./modules/inventario/inventario.module').then(
        (m) => m.InventarioModule
      ),
    canActivate: [],
  },
  {
    path: 'imoinventarios',
    loadChildren: () =>
      import('./modules/imoinventario/imoinventario.module').then(
        (m) => m.ImoinventarioModule
      ),
    canActivate: [],
  },
  {
    path: 'monitoramento',
    loadChildren: () =>
      import('./modules/monitoramento/monitoramento.module').then(
        (m) => m.MonitoramentoModule
      ),
    canActivate: [],
  },
  {
    path: 'apontamentos',
    loadChildren: () =>
      import('./modules/apontamento/apontamento.module').then(
        (m) => m.ApontamentoModule
      ),
    canActivate: [],
  },

  {
    path: 'keys',
    loadChildren: () =>
      import('./modules/sobre/sobre.module').then((m) => m.SobreModule),
    canActivate: [],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
