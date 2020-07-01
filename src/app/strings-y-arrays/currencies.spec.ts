import {currencies} from "./currencies";

describe('currencies', () => {
  it('should return the USD',  () => {
    // arrange y  act
    const result = currencies();

    expect(result).toContain('USD');
  });

  it ('should return a non empty array', () => {

    const result = currencies();

    expect(result.length).toBeGreaterThan(0);
  })
})
