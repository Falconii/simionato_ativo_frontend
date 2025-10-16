import { Injectable } from '@angular/core';
import { loadGapiInsideDOM } from 'gapi-script';
@Injectable({
  providedIn: 'root'
})
export class GoogleFotosService {

 private authInstance: any;

  constructor() {
    this.initGapi();
  }

  private initGapi() {
    loadGapiInsideDOM().then(() => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: 'a2b8e4fd0e9e0919cba2ae1c7834584e5cffa60c',
          clientId: '570100647729-41fopn46qsu9t2carpmr2i9iggkmfbid.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
          scope: 'https://www.googleapis.com/auth/drive.readonly'
        }).then(() => {
          this.authInstance = gapi.auth2.getAuthInstance();
          return gapi.client.load('drive', 'v3');
        });
      });
    });
  }

  login() {
    return this.authInstance.signIn();
  }
/*
 getFiles() {

  if (gapi.client.drive) {
    return gapi.client.drive.files.list({
      q: "mimeType='image/jpeg'",
      fields: 'files(id, name, webViewLink, thumbnailLink)'
    });
  } else {
    console.error('Google Drive API não está carregada!');
    return Promise.reject('Google Drive API não inicializada.');
  }
}
  */

}
