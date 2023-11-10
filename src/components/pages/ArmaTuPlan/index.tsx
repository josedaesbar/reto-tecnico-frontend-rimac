import styles from './styles.module.scss'

import {ReactComponent as ICONArrowLeft} from '../../../assets/icons/arrow_left.svg'

import PagesContainer from '../../templates/PagesContainer'
import HeaderContact from '../../templates/HeaderContact'
import {Paragraph, Span} from '../../atoms/Text'
import {useAppSelector} from '../../../redux'

const ArmaTuPlanPage = () => {
  const userStore = useAppSelector((v) => v.user)

  return (
    <PagesContainer>
      <HeaderContact />

      <div className={styles['content']}>
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
        <div className={styles['right-container']}>
          <div className={styles['cobertures-container']}>
            <div className={styles['back-button']}>
              <div className={styles['back-icon']}>
                <ICONArrowLeft />
              </div>
              <Span color='skyblue-light' size='14' uppercase>
                Volver
              </Span>
            </div>

            <div className={styles['greetings-user']}>
              <div>
                <Paragraph color='black' size='36' weight='semi-bold' inline>
                  ¡Hola,{' '}
                </Paragraph>
                <Paragraph color='red' size='36' weight='semi-bold' inline>
                  {userStore.user?.name}!
                </Paragraph>
              </div>

              <Paragraph color='gray' size='16'>
                Conoce las coberturas para tu plan
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </PagesContainer>
  )
}

export default ArmaTuPlanPage
