import styles from './styles.module.scss'

import {ReactComponent as ICONPLus} from '../../../assets/icons/plus-icon.svg'
import {ReactComponent as ICONSusbtract} from '../../../assets/icons/substract-icon.svg'

import {Paragraph, Span} from '../../atoms/Text'
import {useAppDispatch, useAppSelector} from '../../../redux'

import {
  AMOUNT_CHANGE,
  ID_CHOQUE_LUZ_ROJA,
  MAX_AMOUNT_INSURED,
  MIN_AMOUNT_INSURED,
} from '../../../application/utils/constants'
import {A_REMOVE_COVERAGES, A_SET_TOTAL_INSURED} from '../../../redux/userCoverages/actions'
import {formatNumber} from '../../../utils/formatNumber'
import {CoverageList} from '../../../application/utils/coverageList'

const AmountController = () => {
  const userCoverages = useAppSelector((v) => v.userCoverages)
  const dispatch = useAppDispatch()

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
    <div className={styles['amount-selected-container']}>
      <div className={styles['amount-texts']}>
        <Paragraph color='black' size='16'>
          Indica la suma segurada
        </Paragraph>
        <div className={styles['amount-min-max']}>
          <Span color='gray-2' size='16'>
            MIN ${formatNumber(MIN_AMOUNT_INSURED)}
          </Span>
          <div></div>
          <Span color='gray-2' size='16'>
            MAX ${formatNumber(MAX_AMOUNT_INSURED)}
          </Span>
        </div>
      </div>

      <div className={styles['amount-controllers']}>
        <div className={styles['amount-controller-icon']} onClick={onClickSubstract}>
          <ICONSusbtract />
        </div>
        <Span color='gray' size='16'>
          ${formatNumber(userCoverages.totalInsured)}
        </Span>
        <div className={styles['amount-controller-icon']} onClick={onClickPlus}>
          <ICONPLus />
        </div>
      </div>
    </div>
  )
}

export default AmountController
