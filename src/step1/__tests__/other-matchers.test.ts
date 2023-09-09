import { setTimeout } from 'timers-promises';

describe('other matchers', () => {
  test('.toBeNull', () => {
    expect(null).toBeNull()
  })
  test('.toBeUndefined', () => {
    expect(undefined).toBeUndefined()
  })
  test('.toBeNaN', () => {
    expect(Number.NaN).toBeNaN()
  })
  test('.toContain', () => {
    expect([5,5,2,6,4,2,3,7]).toContain(6);
  });

  test('.toContainEqual', () => {
    const results : { [key: string]: string }[] = [];
    results.push({
      a: '123',
      b: '456'
    });

    results.push({
      a: '123',
    });

    expect(results).toContainEqual({
      a: '123',
    });
  })
  test('.toMatchObject', () => {
    const result = {
      a: '123',
      b: '456'
    };

    expect(result).toMatchObject({
      a: '123',
    });
  })
})
// test('other', async () => {
//   const targetPromise = new Promise((resolve: (number) => void) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 10);
//   })
//   .then((prev: number): number => {
//     return prev ** 2;
//   });
//   expect(targetPromise).resolves.toBe(100);
// })