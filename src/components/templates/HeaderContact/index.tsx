import styles from './styles.module.scss'

import IMG_Logo from '../../../assets/images/Logo.png'
import {ReactComponent as ICONPhone} from '../../../assets/icons/ic_phone.svg'

import {Span} from '../../atoms/Text'
import {getClassnames} from '../../../utils/getClassnames'
import ContentGrid from '../ContentGrid'

export type HeaderContactProps = {
  header_background?: boolean
}

const HeaderContact = ({header_background}: HeaderContactProps) => {
  return (
    <div
      className={getClassnames([
        styles['header'],
        header_background && styles['header-header_background'],
      ])}
    >
      <ContentGrid>
        <div className={styles['logo']}>
          <img src={IMG_Logo} alt='' />
        </div>
        <div className={styles['contact']}>
          <Span color='gray' size='14'>
            ¿Tienes alguna duda?
          </Span>
          <div className={styles['contact-phone']}>
            <ICONPhone />
            <Span color='blue' size='14'>
              (01) 411 6001
            </Span>
            <Span color='blue' size='18' weight='semi-bold'>
              Llámanos
            </Span>
          </div>
        </div>
      </ContentGrid>
    </div>
  )
}

export default HeaderContact
