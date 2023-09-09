import { setTimeout } from 'timers-promises';

test('async test', async () => {
  const targetPromise = new Promise((resolve: (number) => void) => {
    setTimeout(() => {
      resolve(10);
    }, 10);
  })
  .then((prev: number): number => {
    return prev ** 2;
  });
  expect(targetPromise).resolves.toBe(100);
})