import styles from './styles.module.scss'

import Input, {InputProps} from '../../atoms/Input'

import {forwardRef} from 'react'
import {Span} from '../../atoms/Text'

type InputValidatedProps = InputProps & {
  error?: string
}

const InputValidated = forwardRef<HTMLInputElement, InputValidatedProps>(
  ({error, ...props}, ref) => {
    return (
      <div className={styles['container']}>
        <Input {...props} ref={ref} />
        {error && (
          <Span color='red' size='14'>
            {error}
          </Span>
        )}
      </div>
    )
  }
)

export default InputValidated
