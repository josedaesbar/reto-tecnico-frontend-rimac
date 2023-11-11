import styles from './styles.module.scss'

import {useGetClassnames} from '../../../hooks/useGetClassnames'
import {Span} from '../Text'
import {memo} from 'react'

type ButtonProps = {
  onClick(): void
  text: string
  color: 'red'
}

const Button = ({color, onClick, text}: ButtonProps) => {
  return (
    <button
      className={useGetClassnames([styles['button'], styles['button-' + color]])}
      onClick={onClick}
    >
      <Span color='white' size='16' uppercase>
        {text}
      </Span>
    </button>
  )
}

export default memo(Button)
