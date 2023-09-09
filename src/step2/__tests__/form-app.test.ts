import axios, { AxiosStatic } from 'axios';
import { FormApp } from '../form-app';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<AxiosStatic>;

mockedAxios.post.mockImplementation(async () => {
  return { status : 'OK' };
});

describe('FormApp', () => {
  const app = new FormApp();

  test('successが返ってくるケース', async () => {
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