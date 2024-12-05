import classNames from 'classnames';
import { AllHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const Block: FC<PropsWithChildren<AllHTMLAttributes<HTMLDivElement>>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={classNames(styles.block, className)} {...props}>
      {children}
    </div>
  );
};
