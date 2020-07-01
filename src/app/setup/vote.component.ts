export class VoteComponent {
  votosTotales = 0;

  sumarVoto() {
    this.votosTotales++;
  }

  restarVoto() {
    this.votosTotales--;
  }
}
