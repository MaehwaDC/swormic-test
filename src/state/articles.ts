import { ArticlesRequestParams, getArticles } from '../api/article';
import { useMemo, useState, useTransition } from 'react';
import { IArticle } from '../types/Article';
import debounce from 'lodash.debounce';
import { localStorageService } from '../services/StorageService';
import { STORAGE_KEY } from '../constants/Storage';

export const useArticlesSearch = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isPadding, startTransition] = useTransition();

  const fetchArticles = (params: ArticlesRequestParams) => {
    startTransition(() => {
      getArticles(params)
        .then(({ results }) => {
          setArticles(results);
          setLoading(false);
        })
        .catch(() => setError(true));
    });
  };

  const debouncedFetch = useMemo(() => debounce(fetchArticles, 500), []);

  const fetch = (params: ArticlesRequestParams) => {
    if (!params.search) {
      setArticles([]);
      return;
    }
    setLoading(true);
    debouncedFetch(params);
  };

  return { articles: articles, isPadding: isPadding || isLoading, fetchArticles: fetch, error };
};

export const useViewedArticles = () => {
  const [viewedArticles, setViewedArticles] = useState<number[]>(() => {
    return localStorageService.get(STORAGE_KEY.VIEWED_ARTICLES) ?? [];
  });

  const saveViewedArticle = (id: IArticle['id']) => {
    console.log('id', id);
    if (!viewedArticles.includes(id)) {
      const newArr = [...viewedArticles, id];
      setViewedArticles(newArr);
      localStorageService.set(STORAGE_KEY.VIEWED_ARTICLES, newArr);
    }
  };

  return { viewedArticles: [...viewedArticles], setViewedArticle: saveViewedArticle };
};
