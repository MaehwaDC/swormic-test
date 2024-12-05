import { AxiosResponse } from 'axios';

export const unwrapResult = <T = any>(response: AxiosResponse<T>) => {
  return response.data as T;
};
