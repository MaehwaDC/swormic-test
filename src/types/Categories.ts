import { Locale } from './Settings';

export interface ICategory {
  id: number;
  name: Record<Locale, string>;
  public: boolean;
  image_path: string;
}
