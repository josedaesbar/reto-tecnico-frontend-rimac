import styles from './styles.module.scss'

import {ReactComponent as ICONCheck} from '../../../assets/icons/icon-check.svg'

import {Paragraph, Span} from '../../atoms/Text'
import Button from '../../atoms/Button'
import {useAppSelector} from '../../../redux'

import {memo} from 'react'

const CoveragesAmount = () => {
  const userCoverages = useAppSelector((v) => v.userCoverages)

  return (
    <div className={styles['container']}>
      <div className={styles['amount-text']}>
        <Paragraph font='lato' color='gray' size='12' weight='semi-bold' uppercase>
          Monto
        </Paragraph>

        <div>
          <Paragraph font='lato' color='gray' size='28' weight='semi-bold'>
            ${userCoverages.amount}.00
          </Paragraph>
          <Paragraph font='roboto' color='gray-2' size='12'>
            mensuales
          </Paragraph>
          <Paragraph font='roboto' color='gray-2' size='12' uppercase>
            Mensual
          </Paragraph>
        </div>
      </div>

      <div className={styles['line-separetor']}></div>

      <div className={styles['price-details']}>
        <Paragraph font='lato' color='gray' size='16' weight='semi-bold'>
          El precio incluye:
        </Paragraph>

        <ul className={styles['price-contains']}>
          <li className={styles['price-item']}>
            <ICONCheck />
            <Span color='gray-2' size='14'>
              Llanta de repuesto
            </Span>
          </li>
          <li className={styles['price-item']}>
            <ICONCheck />
            <Span color='gray-2' size='14'>
              Analisis de motor
            </Span>
          </li>
          <li className={styles['price-item']}>
            <ICONCheck />
            <Span color='gray-2' size='14'>
              Aros gratis
            </Span>
          </li>
        </ul>
      </div>

      <div className={styles['button-go']}>
        <Button color='red' text='Lo quiero' onClick={() => {}} />
      </div>
    </div>
  )
}

export default memo(CoveragesAmount)
