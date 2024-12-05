import { FC } from 'react';
import { IArticle } from '../../types/Article';
import { Article } from './Article';
import styles from './styles.module.css';

interface Props {
  articles: IArticle[];
  locale: string;
  onArticleClick?: (id: IArticle['id']) => void;
  viewed?: IArticle['id'][];
}

export const Articles: FC<Props> = ({ articles, locale, onArticleClick, viewed }) => {
  return (
    <div>
      {articles.map((article) => (
        <Article
          article={article}
          locale={locale}
          key={article.id}
          className={styles.article}
          viewed={viewed?.includes(article.id)}
          onClick={() => onArticleClick?.(article.id)}
        />
      ))}
    </div>
  );
};
