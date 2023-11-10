import styles from './styles.module.scss'

import {forwardRef} from 'react'

export type InputProps = {
  type: 'text' | 'number' | 'password'
  placeholder?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({type = 'text', placeholder = ''}, ref) => {
  return <input className={styles['container']} placeholder={placeholder} type={type} ref={ref} />
})

export default Input
