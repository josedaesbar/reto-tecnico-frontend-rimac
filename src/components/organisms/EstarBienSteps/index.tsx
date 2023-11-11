import styles from './styles.module.scss'

import {Span} from '../../atoms/Text'

const EstarBienSteps = () => {
  return (
    <div className={styles['left-container']}>
      <div className={styles['left-background']}>
        <div className={styles['left-background-color']}></div>
      </div>

      <div className={styles['left-content-desktop']}>
        <div className={styles['step-container'] + ' ' + styles['step-inactive']}>
          <div className={styles['step-number']}>
            <Span color='gray' size='12' weight='semi-bold'>
              1
            </Span>
          </div>
          <Span color='gray' size='16'>
            Datos
          </Span>
        </div>

        <div className={styles['step-container'] + ' ' + styles['step-active']}>
          <div className={styles['step-number']}>
            <Span color='gray' size='12' weight='semi-bold'>
              2
            </Span>
          </div>
          <Span color='gray' size='16'>
            Arma tu plan
          </Span>
        </div>
      </div>
    </div>
  )
}

export default EstarBienSteps
