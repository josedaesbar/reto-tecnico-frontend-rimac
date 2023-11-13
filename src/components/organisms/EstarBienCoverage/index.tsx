import styles from './styles.module.scss'

import {ReactComponent as ICONArrowLeft} from '../../../assets/icons/arrow_left.svg'
import {Span} from '../../atoms/Text'
import {useAppDispatch} from '../../../redux'
import CoverageController from '../CoverageController'
import {useNavigate} from 'react-router-dom'
import {A_SET_USER} from '../../../redux/user/actions'

import {A_RESET_USER_COVERAGES} from '../../../redux/userCoverages/actions'

import CoveragesAmount from '../../molecules/CoveragesAmount'
import EstarBienGreetings from '../../molecules/EstarBienGreetings'
import AmountController from '../../molecules/AmountController'

const EstarBienCoverage = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const onClickBack = () => {
    dispatch(A_RESET_USER_COVERAGES())
    dispatch(A_SET_USER(null))

    navigate('/')
  }

  return (
    <div className={styles['right-container']}>
      <div className={styles['coverage-container']}>
        <div className={styles['back-button']} onClick={onClickBack}>
          <div className={styles['back-icon']}>
            <ICONArrowLeft />
          </div>
          <Span color='skyblue-light' size='14' uppercase>
            Volver
          </Span>
        </div>

        <EstarBienGreetings />

        <AmountController />

        <div className={styles['line-separetor-desktop']}></div>

        <CoverageController />
      </div>

      <div className={styles['coverages-container']}>
        <CoveragesAmount />
      </div>
    </div>
  )
}

export default EstarBienCoverage
