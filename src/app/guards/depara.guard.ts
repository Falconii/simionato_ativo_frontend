import { GlobalService } from './../services/global.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppSnackbar } from '../shared/classes/app-snackbar';

@Injectable({
  providedIn: 'root',
})
export class DeparaGuard implements CanActivate, CanActivateChild {
  constructor(
    private globalService: GlobalService,
    private router: Router,
    private Snackbar: AppSnackbar,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (!this.globalService.getLogado()) return false;
    if (
      route.routeConfig?.path == 'de_para' &&
      this.globalService.getInventario().codigo == 0
    ) {
      this.Snackbar.openFailureSnackBar('Inventário Não Definido!', 'OK');
      return false;
    }
    if (
      this.globalService.getUsuario().id == 46 ||
      this.globalService.getUsuario().id == 99 ||
      this.globalService.getUsuario().id == 200 ||
      this.globalService.getUsuario().id == 201 ||
      this.globalService.getUsuario().id == 202
    ) {
      this.Snackbar.openFailureSnackBar('Usuário Não Autorizado!', 'OK');
      return false;
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    console.log('Estou na Child');
    return false;
  }
}
