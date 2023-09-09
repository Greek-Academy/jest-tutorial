import { setTimeout } from 'timers-promises';

describe('section', () => {
  
  test.todo('あとで書く');

  test.only('ここだけ実行', () => {
    // console.log('ここだけ実行');
  });

  test.skip('スキップ', () => {
    // console.log('スキップ');
  });
  test.failing('失敗?', () => {
    expect(5).toBe(6);
  });
});

describe('another section', () => {
  test('async test', async () => {
    // console.log('async test - start');
    await setTimeout(200);
    // console.log('async test - end');
  });

  test.only('callback style', (done) => {
    // console.log('callback style - start');
    setTimeout(() => {
      // console.log('callback style - end');
      done();
    }, 200);
  });
})
test.each([
  [1, 2, 3],
  [2, 3, 5],
  [3, 5, 8]
])('.add(%i, %i)', (a, b, expected) => {
  // console.log(`a=${a}, b=${b} -> ${a + b} === ${expected}`);
  expect(a + b).toBe(expected);
});
