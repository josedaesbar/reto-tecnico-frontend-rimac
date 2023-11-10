import styles from './styles.module.scss'

import IMG_Logo from '../../../assets/images/Logo.png'
import {ReactComponent as ICONPhone} from '../../../assets/icons/ic_phone.svg'

import {Span} from '../../atoms/Text'
import {useGetClassnames} from '../../../hooks/useGetClassnames'

type HeaderContactProps = {
  absolute?: boolean
}

const HeaderContact = ({absolute}: HeaderContactProps) => {
  return (
    <div className={useGetClassnames([styles['header'], absolute && styles['header-absolute']])}>
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
    </div>
  )
}

export default HeaderContact
