import styles from './styles.module.scss'

import {FC, PropsWithChildren} from 'react'

import IMG_Logo from '../../../assets/images/Logo.png'
import {ReactComponent as ICONPhone} from '../../../assets/icons/ic_phone.svg'

import {Span} from '../../atoms/Text'

type PagesContainerProps = {}

const PagesContainer: FC<PropsWithChildren<PagesContainerProps>> = ({children}) => {
  return (
    <div className={styles['container-page']}>
      <div className={styles['container']}>
        <div className={styles['content']}>{children}</div>
      </div>
    </div>
  )
}

export default PagesContainer
