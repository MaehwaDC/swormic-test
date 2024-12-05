import { FC } from 'react';
import { IArticle } from '../../types/Article';
import styles from './Article.module.css';
import classNames from 'classnames';

interface Props {
  article: IArticle;
  locale: string;
  className?: string;
  onClick?: () => void;
  viewed?: boolean;
}

export const Article: FC<Props> = ({ locale, article, className, viewed, onClick }) => {
  const { author, published_at, title } = article;
  return (
    <div className={classNames(styles.card, viewed && styles.viewed, className)} onClick={onClick}>
      <div className={styles.title}>{title[locale]}</div>
      <div className={styles.info}>
        <span>Автор: {author}</span> <span>{published_at}</span>
      </div>
    </div>
  );
};
