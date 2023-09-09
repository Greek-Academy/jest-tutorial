import { setTimeout } from 'timers-promises';

const TIMEOUT = 6000; // default: 5000ms
describe('concurrent', () => {
    
  test.concurrent('test1', async() => {
    // console.log(`test1 start`);
    await setTimeout(Math.random() * 300);
    // console.log(`test1 done`);
  }, TIMEOUT);
  test.concurrent('test1', async() => {
    // console.log(`test2 start`);
    await setTimeout(Math.random() * 500);
    // console.log(`test2 done`);
  }, TIMEOUT);
  test.concurrent.each([
    ['hello', 'world', 'HELLO WORLD'],
    ['alpha', 'project', 'ALPHA PROJECT'],
    ['beTa', 'project', 'BETA PROJECT'],
  ])('.concat(%s, %s)', async (a, b, expected) => {
    await setTimeout(Math.random() * 200 + 100);
    // console.log(`${a.toUpperCase()} ${b.toUpperCase()} = ${expected}`);
    expect(`${a.toUpperCase()} ${b.toUpperCase()}`).toBe(expected);
  });
});
