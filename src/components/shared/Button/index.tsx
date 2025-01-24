import clsx from 'clsx'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

export type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'icon' | 'ghost'
}

export const Button = ({ className, variant, children, ...props }: TButtonProps) => {
  return (
    <button className={clsx(styles.button,  variant && styles[variant],className)} {...props}>
      {children}
    </button>
  )
}
