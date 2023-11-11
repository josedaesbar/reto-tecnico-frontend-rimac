import ContentGrid from '../ContentGrid'
import HeaderContact, {HeaderContactProps} from '../HeaderContact'
import styles from './styles.module.scss'

import {FC, PropsWithChildren} from 'react'

type PagesContainerProps = HeaderContactProps & {}

const PagesContainer: FC<PropsWithChildren<PagesContainerProps>> = ({
  children,
  header_background,
}) => {
  return (
    <div className={styles['container-page']}>
      <HeaderContact header_background={header_background} />
      <ContentGrid>{children}</ContentGrid>
    </div>
  )
}

export default PagesContainer
