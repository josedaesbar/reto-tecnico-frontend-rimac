import {getClassnames} from '../../../utils/getClassnames'
import styles from './styles.module.scss'

// import classNames from "classnames";
import {FC, PropsWithChildren} from 'react'

type TextPropTypes = {
  font?: 'lato' | 'opensans' | 'roboto'
  size: '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26' | '28' | '30' | '36'
  color: 'black' | 'white' | 'red' | 'gray' | 'blue' | 'skyblue-light' | 'gray-2'
  weight?: 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold'
  align?: 'left' | 'center' | 'right'
  uppercase?: boolean
  inline?: boolean
  underline?: boolean
}

export const Paragraph: FC<PropsWithChildren<TextPropTypes>> = ({
  size = '12',
  color = 'black',
  uppercase = false,
  weight = 'regular',
  align = 'left',
  inline,
  underline,
  font,
  children,
}) => {
  const classnames = getClassnames([
    styles.text,
    styles['text-size-' + size],
    styles['text-color-' + color],
    styles['text-weight-' + weight],
    styles['text-align-' + align],
    uppercase && styles['text-uppercase'],
    underline && styles['text-underline'],
    inline && styles['text-inline'],
    font && styles['font-' + font],
  ])

  return <p className={classnames}>{children}</p>
}

export const H1: FC<PropsWithChildren<TextPropTypes>> = ({
  size = '12',
  color = 'black',
  uppercase = false,
  weight = 'regular',
  align = 'left',
  inline,
  underline,
  font,
  children,
}) => {
  const classnames = getClassnames([
    styles.text,
    styles['text-size-' + size],
    styles['text-color-' + color],
    styles['text-weight-' + weight],
    styles['text-align-' + align],
    uppercase && styles['text-uppercase'],
    underline && styles['text-underline'],
    inline && styles['text-inline'],
    font && styles['font-' + font],
  ])

  return <h1 className={classnames}>{children}</h1>
}

export const Span: FC<PropsWithChildren<TextPropTypes>> = ({
  size = '12',
  color = 'black',
  uppercase = false,
  weight = 'regular',
  align = 'left',
  inline,
  underline,
  font,
  children,
}) => {
  const classnames = getClassnames([
    styles.text,
    styles['text-size-' + size],
    styles['text-color-' + color],
    styles['text-weight-' + weight],
    styles['text-align-' + align],
    uppercase && styles['text-uppercase'],
    underline && styles['text-underline'],
    inline && styles['text-inline'],
    font && styles['font-' + font],
  ])

  return <span className={classnames}>{children}</span>
}

export const Label: FC<PropsWithChildren<TextPropTypes>> = ({
  size = '12',
  color = 'black',
  uppercase = false,
  weight = 'regular',
  align = 'left',
  inline,
  underline,
  font,
  children,
}) => {
  const classnames = getClassnames([
    styles.text,
    styles['text-size-' + size],
    styles['text-color-' + color],
    styles['text-weight-' + weight],
    styles['text-align-' + align],
    uppercase && styles['text-uppercase'],
    underline && styles['text-underline'],
    inline && styles['text-inline'],
    font && styles['font-' + font],
  ])

  return <label className={classnames}>{children}</label>
}

type AnchorPropTypes = TextPropTypes & {
  href: string
}

export const Anchor: FC<PropsWithChildren<AnchorPropTypes>> = ({
  size = '12',
  color = 'black',
  uppercase = false,
  weight = 'regular',
  align = 'left',
  inline,
  underline,
  font,
  href,
  children,
}) => {
  const classnames = getClassnames([
    styles.text,
    styles['text-size-' + size],
    styles['text-color-' + color],
    styles['text-weight-' + weight],
    styles['text-align-' + align],
    uppercase && styles['text-uppercase'],
    underline && styles['text-underline'],
    inline && styles['text-inline'],
    font && styles['font-' + font],
  ])

  return (
    <a className={classnames} href={href}>
      {children}
    </a>
  )
}
