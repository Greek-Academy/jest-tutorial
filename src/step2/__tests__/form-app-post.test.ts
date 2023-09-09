import axios, { AxiosStatic } from 'axios';
import { FormApp } from '../form-app';

const mockedPost = jest.spyOn(axios, 'post')

describe('FormApp', () => {
  const app = new FormApp();

  test('successが返ってくるケース', async () => {
    // TODO: mockResolvedValue() を使って、モックを実装する
    
    const result = await app.submitForm({
      message: 'test',
      value: 123
    });
    expect(result).toBe(true);
  })
  test('errorが返ってくるケース', async () => {
    
    // TODO: エラーになるテストケースを書く
  })
})
