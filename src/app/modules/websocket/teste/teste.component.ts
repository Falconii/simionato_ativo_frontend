import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WsServiceService } from 'src/app/services/ws-service.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
     private wsService: WsServiceService,
     private formBuilder: FormBuilder)
   {
        this.formulario = formBuilder.group({
          mensagem_enviada: [''],
          mensagem_recebida: ['']
        });
    }

 ngOnInit(): void {
    this.wsService.mensagemRecebidaEmitter.subscribe((mensagem:any) => {
    this.formulario.patchValue({
            mensagem_recebida: mensagem.message
        });
      });
      this.wsService.connect();
      this.setValues();
  }

  ngOnDestroy(): void {
    this.wsService.closeConnection();
  }

  sendMessage(): void {
    const mensagem:string = this.formulario.get('mensagem_enviada')?.value;
    const men =
    this.wsService.sendMessage(mensagem);

  }

  disconnect(): void {
    this.wsService.closeConnection();
  }

  onHome(): void {}

  setValues() {
      this.formulario.setValue({
        mensagem_enviada: "",
        mensagem_recebida: "",
      });
    }

}
