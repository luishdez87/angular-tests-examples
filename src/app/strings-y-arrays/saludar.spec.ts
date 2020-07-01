import { saludar } from "./saludar";

describe('saludar', () => {
    it('should include the name in message', () => {

        //arrange
        let nombre = 'Luis';

        // act
        let saludo = saludar(nombre);

        // assert
        expect(saludo).toContain(nombre);
    });
});
