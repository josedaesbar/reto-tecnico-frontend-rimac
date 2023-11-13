import styles from './styles.module.scss'

import IMG_Plate from '../../../assets/images/plateImage.png'

import {Paragraph, Span} from '../../atoms/Text'
import {useAppSelector} from '../../../redux'
import {memo} from 'react'

const EstarBienGreetings = () => {
  const userStore = useAppSelector((v) => v.user)

  return (
    <div className={styles['greetings-user']}>
      <div>
        <div>
          <Paragraph font='lato' color='black' size='36' weight='semi-bold' inline>
            ¡Hola,{' '}
          </Paragraph>
          <Paragraph font='lato' color='red' size='36' weight='semi-bold' inline>
            {userStore.user?.name}!
          </Paragraph>
        </div>
        <Paragraph font='lato' color='black' size='28' weight='semi-bold' inline>
          Mira las coberturas
        </Paragraph>
      </div>

      <Paragraph color='gray' size='16'>
        Conoce las coberturas para tu plan
      </Paragraph>

      <div className={styles['plate-container']}>
        <div className={styles['plate-content']}>
          <div className={styles['plate-text']}>
            <Paragraph color='skyblue-light' size='12'>
              Placa: {userStore.user?.plate}
            </Paragraph>
            <Paragraph color='black' size='20'>
              {userStore.user?.carName}
            </Paragraph>
          </div>
        </div>
        <div className={styles['plate-image']}>
          <img src={IMG_Plate} alt='' />
        </div>
      </div>
    </div>
  )
}

export default memo(EstarBienGreetings)
