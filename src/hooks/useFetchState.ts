import { useCallback, useState } from 'react';

export const useFetchState = <P extends Array<any> = Array<any>, D = Record<string, any>>(
  fn: (...params: P) => Promise<D>,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetch = useCallback(
    (...args: P) => {
      setIsLoading(true);
      return fn(...args)
        .then((data) => {
          setIsLoading(false);
          return data;
        })
        .catch((err) => {
          setError(true);
          throw err;
        });
    },
    [fn],
  );

  return [fetch, isLoading, error] as const;
};
