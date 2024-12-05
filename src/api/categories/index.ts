import { ICategory } from '../../types/Categories';
import { axiosInstance } from '../core';
import { unwrapResult } from '../utils/unwrapResult';

export interface CategoriesRequestParams {
  limit?: number;
  offset?: number;
  ordering?: 'id' | '-id';
  public: boolean;
}

export interface CategoryResponse {
  count: number;
  next: string;
  previous: string;
  results: ICategory[];
}

export const getCategories = (params: CategoriesRequestParams) => {
  return axiosInstance
    .get<CategoryResponse>('categories', {
      params,
    })
    .then(unwrapResult);
};
