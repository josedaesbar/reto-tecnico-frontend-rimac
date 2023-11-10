import styles from './styles.module.scss'

import IMG_Logo from '../../../assets/images/Logo.png'
import {ReactComponent as ICONPhone} from '../../../assets/icons/ic_phone.svg'
import HomeLeftSide from '../../organisms/HomeLeftSide'
import HomeRightSide from '../../organisms/HomeRightSide'
import {Span} from '../../atoms/Text'

const HomePage = () => {
  return (
    <div className={styles['container-page']}>
      <div className={styles['container']}>
        <div className={styles['header']}>
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
            </div>
          </div>
        </div>

        <HomeLeftSide />
        <HomeRightSide />
      </div>
    </div>
  )
}

export default HomePage
