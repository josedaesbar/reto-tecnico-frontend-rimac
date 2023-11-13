import styles from './styles.module.scss'

import IMG_Gracias from '../../../assets/images/gracias-image.png'
import IMG_Gracias_Man_Mobile from '../../../assets/images/gracias-mobile-man.png'

import PagesContainer from '../../templates/PagesContainer'
import {Paragraph} from '../../atoms/Text'
import {useAppSelector} from '../../../redux'
import Button from '../../atoms/Button'

const GraciasPage = () => {
  const userStore = useAppSelector((v) => v.user)

  return (
    <PagesContainer header_background>
      <div className={styles['left-container']}>
        <div className={styles['left-background-container']}>
          <div className={styles['left-background-color']}></div>
        </div>

        <div className={styles['central-image']}>
          <img src={IMG_Gracias} alt='' />
        </div>
      </div>

      <div className={styles['left-container-mobile']}>
        <img src={IMG_Gracias_Man_Mobile} alt='' />
      </div>

      <div className={styles['right-container']}>
        <div>
          <Paragraph font='lato' color='red' size='36' weight='semi-bold'>
            ¡Te damos la bienvenida!
          </Paragraph>
          <Paragraph font='lato' color='gray' size='36' weight='semi-bold'>
            Cuenta con nosotros para proteger tu vehículo
          </Paragraph>
        </div>
        <div>
          <Paragraph font='roboto' color='gray' size='16'>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
          </Paragraph>
          <Paragraph font='roboto' color='gray' size='16' weight='semi-bold'>
            {userStore.user?.email}
          </Paragraph>
        </div>

        <div className={styles['button-use-insurance']}>
          <Button color='red' text='Cómo usar mi seguro' onClick={() => {}} />
        </div>
      </div>
    </PagesContainer>
  )
}

export default GraciasPage
