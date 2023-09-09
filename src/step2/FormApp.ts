import axios from 'axios';

export type ServerResponse = {
  status: 'OK' | 'ERROR';
};

export type SubmitFormParams = {
  message: string;
  value: number;
};

export class FormApp {
  async submitForm(data: SubmitFormParams): Promise<boolean> {
    const result = await axios.post(
      'https://somewhere.com/api/',
      data,
    ) as ServerResponse;

    return result.status === 'OK';
  }
}