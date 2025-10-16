import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WsServiceService {
 private socket!: WebSocket;
 private apiWS: string = environment.wsURL;
 public mensagemRecebidaEmitter = new EventEmitter<any>();

  connect(): void {
    this.socket = new WebSocket(`${this.apiWS}?iduser=16`);

    this.socket.onopen = () => {
      console.log('Conectado ao servidor WebSocket');
    };

    this.socket.onmessage = (event) => {
      const mensagem = JSON.parse(event.data);
      this.mensagemRecebidaEmitter.emit(mensagem);
      console.log('Gerado Evento..:', mensagem);
    };

    this.socket.onclose = () => {
      console.log('Conexão fechada');
    };
  }

  sendMessage(message: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
      console.log('Mensagem enviada:', message);
    } else {
      alert('Conexão não está aberta. Não é possível enviar a mensagem.');
    }
  }

  closeConnection(): void {
    if (this.socket) {
      this.socket.close();
    }
  }

}
