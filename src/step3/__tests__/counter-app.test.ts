import { CounterApp } from "../counter-app";

describe('CounterApp', () => {
  
  it('hiddenActionが呼び出されたことを確認する', () => {
    
    const instnace = new CounterApp();
    const hiddenActionMock = jest.spyOn(instnace as any, 'hiddenAction');
    for (let i = 0; i < 20; i++) {
      instnace.click();
    }
    expect(hiddenActionMock).toHaveBeenCalled();
  })
})

test('jest.fn()', () => {
  const reverseModulo3 = jest.fn()
    .mockImplementation((n: number): number => {
      return 2 - n % 3;
    })

  const results: number[] = [];
  for (let i = 0; i < 5; i++) {
    results.push(reverseModulo3(i));
  }
  expect(reverseModulo3).toHaveBeenCalledTimes(5);
  expect(results).toEqual([2, 1, 0, 2, 1]);
})

