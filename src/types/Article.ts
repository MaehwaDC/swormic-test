import { Locale } from './Settings';

export enum STATUS {
  DRAFT = 'DRAFT',
}

export interface IArticle {
  id: number;
  ext_id: number;
  rank: number;
  status: STATUS;
  highlight: {
    title: string;
    body: string;
  };
  public_urls: {
    url: string;
  };
  created_at: string; //'1970-01-01T00:00:00.000Z'
  updated_at: string; //'1970-01-01T00:00:00.000Z'
  published_at: string; //'1970-01-01T00:00:00.000Z'
  author: string;
  title: Record<Locale, string>;
}
