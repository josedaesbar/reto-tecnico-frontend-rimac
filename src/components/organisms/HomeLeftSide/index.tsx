import styles from './styles.module.scss'

import IMG_BackgroundLeft from '../../../assets/images/background.png'
import IMG_Left_Desktop from '../../../assets/images/home_left_desktop.png'
import {Paragraph} from '../../atoms/Text'

const HomeLeftSide = () => {
  return (
    <div className={styles['left-container']}>
      <div className={styles['left-background']}>
        <img className={styles['left-background-image']} src={IMG_BackgroundLeft} alt='' />
        <img className={styles['left-desktop']} src={IMG_Left_Desktop} alt='' />
      </div>

      <div className={styles['left-text-content']}>
        <Paragraph color='gray' size='16' weight='semi-bold'>
          ¡NUEVO!
        </Paragraph>
        <div>
          <Paragraph color='gray' size='36' weight='semi-bold' inline>
            Seguro{' '}
          </Paragraph>
          <Paragraph color='red' size='36' weight='semi-bold' inline>
            Vehicular
          </Paragraph>
          <Paragraph color='red' size='36' weight='semi-bold'>
            Tracking
          </Paragraph>
        </div>

        <div className={styles['left-description']}>
          <Paragraph color='gray' size='14' weight='regular'>
            Cuentanos donde le haras seguimiento a tu seguro
          </Paragraph>
        </div>
      </div>
      <div className={styles['left-copyright']}>
        <Paragraph color='gray' size='12' weight='regular'>
          © 2021 RIMAC Seguros y Reaseguros.
        </Paragraph>
      </div>
    </div>
  )
}

export default HomeLeftSide
