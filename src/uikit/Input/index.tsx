import React, { AllHTMLAttributes, FC } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

export const Input: FC<AllHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
