import {EventVotesComponent} from "./event-votes.component";

describe('EventVotesComponent', () => {
  let component: EventVotesComponent;

  beforeEach(() => {
    component = new EventVotesComponent();
  });

  it('should raise cambioDeVotos on sumarVoto', function () {
    let votosTotales = null;
    component.cambioDeVotos.subscribe(votos => votosTotales = votos);

    component.sumarVoto();

    expect(votosTotales).not.toBeNull();
  });
});
