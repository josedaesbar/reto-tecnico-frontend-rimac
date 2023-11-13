import styles from './styles.module.scss'

import {ReactComponent as ICONArrowLeft} from '../../../assets/icons/arrow_left.svg'

import {Paragraph, Span} from '../../atoms/Text'
import {useNavigate} from 'react-router-dom'
import {useAppDispatch} from '../../../redux'
import {A_SET_USER} from '../../../redux/user/actions'
import {A_RESET_USER_COVERAGES} from '../../../redux/userCoverages/actions'

const EstarBienSteps = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClickBack = () => {
    dispatch(A_RESET_USER_COVERAGES())
    dispatch(A_SET_USER(null))
    navigate('/')
  }

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

      <div className={styles['left-content-mobile']}>
        <div className={styles['icon-back']} onClick={onClickBack}>
          <ICONArrowLeft />
        </div>
        <Paragraph font='lato' size='12' color='gray-2' weight='bold' uppercase>
          Paso 2 de 2
        </Paragraph>

        <div className={styles['right-bar']}></div>
      </div>
    </div>
  )
}

export default EstarBienSteps
