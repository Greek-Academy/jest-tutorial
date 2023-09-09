import { isInteger } from "../isInteger"

describe('isInteger', () => {
  test('trueになるはず', () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(+0)).toBe(true);
    expect(isInteger(0.0)).toBe(true);
    expect(isInteger(1000)).toBe(true);
  });
  test('falseになるはず', () => {
    expect(isInteger(.2)).toBe(false);
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(Number.NaN)).toBe(false);
    expect(isInteger(-1.1)).toBe(false);
  });
})