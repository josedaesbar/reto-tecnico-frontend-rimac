import styles from './styles.module.scss'

import {useState} from 'react'

import {Paragraph} from '../../atoms/Text'
import {CoverageList} from '../../../application/utils/coverageList'
import {getClassnames as getClassnames} from '../../../utils/getClassnames'
import CoverageItem from '../../molecules/CoverageItem'

const CoverageController = () => {
  const [coverageType, setCoverageType] = useState<number>(0)

  const onClickCoverageType = (index: number) => {
    setCoverageType(index)
  }

  return (
    <div className={styles['container']}>
      <Paragraph color='black' size='20'>
        Agrega o quita coberturas
      </Paragraph>

      <div className={styles['type-coverages']}>
        {CoverageList.map((v, i) => {
          return (
            <div
              className={getClassnames([
                styles['type-coverage-item'],
                coverageType === i && styles['type-coverage-item-active'],
              ])}
              onClick={() => onClickCoverageType(i)}
              key={i}
            >
              <Paragraph
                color={coverageType === i ? 'red' : 'gray'}
                size='10'
                weight='bold'
                uppercase
                align='center'
              >
                {v.title}
              </Paragraph>
            </div>
          )
        })}
      </div>

      <div className={styles['coverages-list']}>
        {CoverageList[coverageType].items.map((v, i) => {
          return <CoverageItem data={v} key={i + '-' + v._id} />
        })}
      </div>
    </div>
  )
}

export default CoverageController
