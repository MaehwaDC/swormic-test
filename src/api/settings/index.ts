import { ISettings } from '../../types/Settings';
import { axiosInstance } from '../core';
import { unwrapResult } from '../utils/unwrapResult';

export const getSettings = () => {
  return axiosInstance.get<ISettings>('instance').then(unwrapResult);
};
