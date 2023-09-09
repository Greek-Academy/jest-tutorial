import { InvalidArgumentError, calcFactorial } from "../calcFactorial";

describe('calFactorial', () => {
  test('正しい答えが返ってくるケース', () => {
    const result = calcFactorial(3);
    expect(result).toBe(6);
  });

  test('不正な値を入力したとき', () => {
    expect(() => {
      calcFactorial(-3);
    }).toThrowError(InvalidArgumentError);
  })
})