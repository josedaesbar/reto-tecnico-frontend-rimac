import styles from './styles.module.scss'

import {FC, PropsWithChildren} from 'react'

const ContentGrid: FC<PropsWithChildren<any>> = ({children}) => {
  return <div className={styles['container']}>{children}</div>
}

export default ContentGrid
