import { CounterApp } from "../../step3/counter-app";

describe('jest.fn()', () => {
  
  test('toHaveBeenNthCalledWith', () => {
    
    const onSubmit = jest.fn();
    for (let i = 0; i < 5; i++) {
      onSubmit(`i^2 = ${i * i}`)
    }
    expect(onSubmit).toHaveBeenCalledTimes(5);
    expect(onSubmit).toHaveBeenNthCalledWith(1, `i^2 = 0`);
    // TODO: '?' を置き換える
    // expect(onSubmit).toHaveBeenNthCalledWith(5, `i^5 = ?`);
  })

  test('mockReturnValue', () => {
    const alwaysReturn3 = jest.fn().mockReturnValue(3);
  
    const results: number[] = [];
    for (let i = 0; i < 5; i++) {
      results.push(alwaysReturn3());
    }
    // 5回呼び出されていることを期待
    expect(alwaysReturn3).toHaveBeenCalledTimes(5);

    // TODO: ? を置き換える
    // expect(results).toEqual([?, ?, ?, ?, ?]);
  })
  
  test('mockReturnValueOnce', () => {
    const oneTwoAndThree = jest.fn()
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValue(3);
  
    const results: number[] = [];
    for (let i = 0; i < 5; i++) {
      results.push(oneTwoAndThree());
    }
    expect(oneTwoAndThree).toHaveBeenCalledTimes(5);
    // expect(results).toEqual([?, ?, ?, ?, ?]); 
  })
  
  test('mockImplementation', () => {
    const reverseModulo3 = jest.fn()
      .mockImplementation((n: number): number => {
        // TODO: 実装してみよう
        return 0;
      })
  
    const results: number[] = [];
    for (let i = 0; i < 5; i++) {
      results.push(reverseModulo3(i));
    }
    expect(results).toEqual([2, 1, 0, 2, 1]);  
  })
  
})
