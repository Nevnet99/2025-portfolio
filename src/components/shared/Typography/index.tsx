
import clsx from 'clsx';
import React from 'react'
import styles from './Typography.module.css';

export type TTypography = {
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'button';
  size?: 'sm' | 'md' | 'lg' | 'xl' | "copy";
  bold?: boolean;
}

export const Typography = ({children, size = 'copy', as = 'p', className, bold}: TTypography) => {
  const Component = as;
  
  return (
    <Component className={clsx(
      className,
      styles.typography,
      styles[size],
      bold && styles.bold
    )}>{children}</Component>
  )
}
