import styles from './styles.module.scss'

import {ReactComponent as ICONPLus} from '../../../assets/icons/plus-icon.svg'
import {ReactComponent as ICONSusbtract} from '../../../assets/icons/substract-icon.svg'

import {ReactComponent as ICONArrowLeft} from '../../../assets/icons/arrow_left.svg'
import {Paragraph, Span} from '../../atoms/Text'
import {useAppDispatch, useAppSelector} from '../../../redux'
import CoverageController from '../CoverageController'
import {useNavigate} from 'react-router-dom'
import {A_SET_USER} from '../../../redux/user/actions'
import {
  AMOUNT_CHANGE,
  ID_CHOQUE_LUZ_ROJA,
  MAX_AMOUNT_INSURED,
  MIN_AMOUNT_INSURED,
} from '../../../application/utils/constants'
import {A_REMOVE_COVERAGES, A_SET_TOTAL_INSURED} from '../../../redux/userCoverages/actions'
import {useFormatNumber} from '../../../hooks/useFormatNumber'
import {CoverageList} from '../../../application/utils/coverageList'
import CoveragesAmount from '../../molecules/CoveragesAmount'
import EstarBienGreetings from '../../molecules/EstarBienGreetings'

const EstarBienCoverage = () => {
  const userStore = useAppSelector((v) => v.user)
  const userCoverages = useAppSelector((v) => v.userCoverages)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const onClickBack = () => {
    dispatch(A_SET_USER(null))

    navigate('/')
  }

  const onClickSubstract = () => {
    const newInsured = userCoverages.totalInsured - AMOUNT_CHANGE

    if (newInsured < MIN_AMOUNT_INSURED) return

    dispatch(A_SET_TOTAL_INSURED(newInsured))
  }

  const onClickPlus = () => {
    const newInsured = userCoverages.totalInsured + AMOUNT_CHANGE

    if (newInsured >= 16000) {
      const currentCoverage = userCoverages.coveragesSelected.filter(
        (v) => v === ID_CHOQUE_LUZ_ROJA
      )

      if (currentCoverage.length > 0) {
        const tempCoverage = CoverageList[0].items.filter((v) => v._id === ID_CHOQUE_LUZ_ROJA)

        dispatch(A_REMOVE_COVERAGES(tempCoverage[0]))
      }
    }

    if (newInsured > MAX_AMOUNT_INSURED) return

    dispatch(A_SET_TOTAL_INSURED(newInsured))
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

        <div className={styles['amount-selected-container']}>
          <div className={styles['amount-texts']}>
            <Paragraph color='black' size='16'>
              Indica la suma segurada
            </Paragraph>
            <div className={styles['amount-min-max']}>
              <Span color='gray-2' size='16'>
                MIN ${useFormatNumber(MIN_AMOUNT_INSURED)}
              </Span>
              <div></div>
              <Span color='gray-2' size='16'>
                MAX ${useFormatNumber(MAX_AMOUNT_INSURED)}
              </Span>
            </div>
          </div>

          <div className={styles['amount-controllers']}>
            <div className={styles['amount-controller-icon']} onClick={onClickSubstract}>
              <ICONSusbtract />
            </div>
            <Span color='gray' size='16'>
              ${useFormatNumber(userCoverages.totalInsured)}
            </Span>
            <div className={styles['amount-controller-icon']} onClick={onClickPlus}>
              <ICONPLus />
            </div>
          </div>
        </div>

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
