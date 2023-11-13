import styles from './styles.module.scss'

import {ReactComponent as ICONArrowTop} from '../../../assets/icons/arrow-top.svg'
import {ReactComponent as ICONArrowBottom} from '../../../assets/icons/arrow-down-text.svg'
import {ReactComponent as ICONPLus} from '../../../assets/icons/plus-icon.svg'
import {ReactComponent as ICONSusbtract} from '../../../assets/icons/substract-icon.svg'

import {CoverageItemType} from '../../../application/core/models/coverage.model'
import {Paragraph, Span} from '../../atoms/Text'
import {memo, useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../redux'
import {A_ADD_COVERAGES, A_REMOVE_COVERAGES} from '../../../redux/userCoverages/actions'
import {
  ID_ATROPELLO_VIA_EVITAMIENTO,
  ID_CHOQUE_LUZ_ROJA,
  ID_LLANTA_ROBADA,
} from '../../../application/utils/constants'
import {useGetClassnames} from '../../../hooks/useGetClassnames'

type CoverageItemProps = {
  data: CoverageItemType
}

const CoverageItem = ({data}: CoverageItemProps) => {
  const userCoverages = useAppSelector((v) => v.userCoverages)
  const dispatch = useAppDispatch()

  const [isTextVisible, setIsTextVisible] = useState<boolean>(false)
  const [isAddedCoverage, setIsAddedCoverage] = useState<boolean>(
    userCoverages.coveragesSelected.some((v) => v === data._id)
  )

  useEffect(() => {
    const isExists = userCoverages.coveragesSelected.some((v) => v === data._id)
    setIsAddedCoverage(isExists)
    // setIsTextVisible(false)
  }, [userCoverages.coveragesSelected])

  const toggleText = () => {
    setIsTextVisible(!isTextVisible)
  }

  const toggleUserCoverage = () => {
    verifyUserCoverage()
  }

  const verifyUserCoverage = () => {
    if (
      data._id !== ID_LLANTA_ROBADA &&
      data._id !== ID_CHOQUE_LUZ_ROJA &&
      data._id !== ID_ATROPELLO_VIA_EVITAMIENTO
    ) {
      alert('Para esta prueba solo son funcionales los item de "Protege tu auto"')
      return
    }

    const isExists = userCoverages.coveragesSelected.some((v) => v === data._id)

    if (data._id === ID_CHOQUE_LUZ_ROJA && userCoverages.totalInsured >= 16000) return

    if (isExists) {
      dispatch(A_REMOVE_COVERAGES(data))
      setIsAddedCoverage(false)
    } else {
      dispatch(A_ADD_COVERAGES(data))
      setIsAddedCoverage(true)
    }
  }

  return (
    <div className={styles['container']}>
      <div className={styles['coverage-icon']}>
        <img src={data.icon} alt='' />
      </div>

      <div className={styles['coverage-content']}>
        <Paragraph color='gray' size='20'>
          {data.title}
        </Paragraph>

        <div className={styles['control-coverage']} onClick={toggleUserCoverage}>
          <div className={styles['control-coverage-icon']}>
            {isAddedCoverage ? <ICONSusbtract /> : <ICONPLus />}
          </div>
          <Span color='blue' size='12' weight='bold' uppercase>
            {isAddedCoverage ? 'Quitar' : 'Agregar'}
          </Span>
        </div>

        {isTextVisible && (
          <Paragraph color='gray' size='14'>
            {userCoverages.amount}
            {data.description}
          </Paragraph>
        )}

        <div
          className={useGetClassnames([
            styles['toggle-text-mobile'],
            isTextVisible
              ? styles['toggle-text-mobile-active']
              : styles['toggle-text-mobile-inactive'],
          ])}
          onClick={toggleText}
        >
          {isTextVisible ? (
            <>
              <Paragraph font='lato' weight='semi-bold' color='skyblue-light' size='10' uppercase>
                Ver menos
              </Paragraph>
              <ICONArrowTop />
            </>
          ) : (
            <>
              <Paragraph font='lato' weight='semi-bold' color='blue' size='10' uppercase>
                Ver más
              </Paragraph>
              <ICONArrowBottom />
            </>
          )}
        </div>
      </div>

      <div className={styles['coverage-button-right']}>
        <div className={styles['coverage-toggle-text']} onClick={toggleText}>
          {isTextVisible ? <ICONArrowTop /> : <ICONArrowBottom />}
        </div>
        <div
          className={useGetClassnames([
            styles['coverage-control-mobile'],
            isAddedCoverage
              ? styles['coverage-control-mobile-active']
              : styles['coverage-control-mobile-inactive'],
          ])}
          onClick={toggleUserCoverage}
        >
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default memo(CoverageItem)
