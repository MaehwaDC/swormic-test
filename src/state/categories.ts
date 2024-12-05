import { getCategories } from '../api/categories';
import { useEffect, useState } from 'react';
import { ICategory } from '../types/Categories';
import { useFetchState } from '../hooks/useFetchState';

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [fetch, isLoading, error] = useFetchState(getCategories);

  useEffect(() => {
    fetch({ public: true }).then((data) => setCategories(data.results));
  }, []);

  return { categories, isLoading, error };
};
