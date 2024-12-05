import { IArticle, STATUS } from '../../types/Article';
import { axiosInstance } from '../core';
import { unwrapResult } from '../utils/unwrapResult';

export interface ArticlesRequestParams {
  search: string;
  category?: number[];
  status?: STATUS;
  cursor?: string;
}

export interface ArticleResponse {
  next: string | null;
  previous: string | null;
  results: IArticle[];
}

export const getArticles = (params: ArticlesRequestParams) => {
  return axiosInstance
    .get<ArticleResponse>('search/articles', {
      params,
    })
    .then(unwrapResult);
};
