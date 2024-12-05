import { FC } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

interface Props {
  className?: string;
}

export const Fallback: FC<Props> = ({ className }) => {
  return <div className={classNames(className, styles.loader)} />;
};
