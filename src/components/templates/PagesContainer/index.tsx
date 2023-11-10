import styles from './styles.module.scss'

import {FC, PropsWithChildren} from 'react'

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
