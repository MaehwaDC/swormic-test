import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';
import { Block } from './Block';

interface Extended {
  Block: typeof Block;
}

export const Layout: FC<PropsWithChildren> & Extended = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

Layout.Block = Block;
