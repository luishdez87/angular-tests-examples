import {VoteComponent} from "./vote.component";

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();

  });

  it('should increment votosTotales on sumarVoto',  () => {
    // Arrange
    // Act
    component.sumarVoto();

    // Assert
    expect(component.votosTotales).toBe(1);
  });

  it('should decrement votosTotales on restarVoto',  () => {
    // Arrange

    // Act
    component.restarVoto();

    // Assert
    expect(component.votosTotales).toBe(-1);
  });
});
