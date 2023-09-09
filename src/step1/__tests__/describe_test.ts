import { setTimeout } from 'timers-promises';

describe('テスト全体に関する説明', () => {
  
  beforeAll(async () => {
    // TODO: console.logを書く
    await setTimeout(100);
    // TODO: console.logを書く
  })
  test('テスト1', () => { 
    // TODO: console.logを書く
  });

  describe('テスト2', () => {
    test('テスト2-1', () => { 
      // TODO: console.logを書く
    });
    test('テスト2-2', async () => {
      // TODO: console.logを書く
    });

    describe('テスト2-3', () => {
      test('テスト2-3-1', () => {
        // TODO: console.logを書く
      });
      test.only('テスト2-3-2', () => {
        // TODO: console.logを書く
      });
    });
  });

  afterEach(() => {
    // TODO: console.logを書く
  })
});
