import axios, { AxiosStatic } from 'axios';
import { FormApp } from '../FormApp';

// jest.mock('axios');

// const mockedAxios = axios as jest.Mocked<AxiosStatic>;

const mockedPost = jest.spyOn(axios, 'post')

describe('FormApp', () => {
  const app = new FormApp();

  test('successが返ってくるケース', async () => {
    mockedPost.mockResolvedValue({
      status: 'OK'
    });
    const result = await app.submitForm({
      message: 'test',
      value: 123
    });
    expect(result).toBe(true);
  })
  test('errorが返ってくるケース', async () => {
    mockedPost.mockImplementation(async () => {
      return { status : 'ERROR' };
    });
    const result = await app.submitForm({
      message: 'test',
      value: 456
    });
    expect(result).toBe(false);
  })
})
