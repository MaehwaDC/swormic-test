import { FC } from 'react';
import { ICategory } from '../../types/Categories';
import styles from './styles.module.css';
import classNames from 'classnames';

interface Props {
  categories: ICategory[];
  onChange?: (id: ICategory['id']) => void;
  selected?: ICategory['id'];
  locale: string;
}

export const Categories: FC<Props> = ({ categories, onChange, selected, locale }) => {
  return (
    <div className={styles.content}>
      {categories.map((category) => (
        <button
          className={classNames(styles.item, selected === category.id && styles.selected)}
          key={category.id}
          onClick={() => onChange?.(category.id)}
        >
          {category.name[locale]}
        </button>
      ))}
    </div>
  );
};
