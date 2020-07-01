import {EventEmitter} from "@angular/core";

export class EventVotesComponent {
  votosTotales = 0;
  cambioDeVotos = new EventEmitter();

  sumarVoto() {
    this.votosTotales++;
    this.cambioDeVotos.emit(this.votosTotales);
  }

  restarVoto() {
    this.votosTotales--;
    this.cambioDeVotos.emit(this.votosTotales);
  }
}
