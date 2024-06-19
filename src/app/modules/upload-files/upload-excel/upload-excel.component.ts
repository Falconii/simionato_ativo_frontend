import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { LocalModel } from 'src/app/models/local-model';
import { EmpresaModel } from 'src/app/models/empresa-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css'],
})
export class UploadExcelComponent implements OnInit {
  empresa: EmpresaModel = new EmpresaModel();
  local: LocalModel = new LocalModel();
  constructor(private globalService: GlobalService, private router: Router) {
    this.empresa = this.globalService.getEmpresa();
    this.local = this.globalService.getLocal();
  }

  ngOnInit(): void {}

  onHome() {
    this.router.navigate(['']);
  }
}
