import { Component, OnInit } from '@angular/core';
import { GoogleFotosService } from 'src/app/services/google-fotos.service';

@Component({
  selector: 'app-show-fotos-google',
  templateUrl: './show-fotos-google.component.html',
  styleUrls: ['./show-fotos-google.component.css']
})
export class ShowFotosGoogleComponent implements OnInit {
  constructor(private googleService:GoogleFotosService) { }

  ngOnInit() {
    this.googleService.login().then(() => {
      //this.googleService.getFiles().then(response => {
      //  const files = response.result.files;
      // console.log('Arquivos obtidos:', files);
      //});
    });
  }


}
