import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { GoogleServiceService } from 'src/app/services/google-service.service';
import { AppSnackbar } from 'src/app/shared/classes/app-snackbar';

@Component({
  selector: 'app-googleoauth2',
  templateUrl: './googleoauth2.component.html',
  styleUrls: ['./googleoauth2.component.css']
})
export class Googleoauth2Component implements OnInit {

  inscricaoOauth!: Subscription;

  constructor(
    private appSnackBar: AppSnackbar,
    private globalService: GlobalService,
  private googleService : GoogleServiceService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.inscricaoOauth?.unsubscribe();
  }



  onSubmit(){
      window.location.href = 'http://localhost:3000/auth/google'
  }

  onCancel(){


  }

  getOAuth2() {
    this.globalService.setSpin(true);
    this.inscricaoOauth = this.googleService
      .getoauth2()
      .subscribe(
        (data: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Deu Certo `,
            'OK'
          );
        },
        (error: any) => {
          this.globalService.setSpin(false);
          this.appSnackBar.openFailureSnackBar(
            `Deu Erro ${error.error.tabela} - ${error.error.erro} - ${error.error.message}`,
            'OK'
          );
        }
      );
  }

}
