import styles from './styles.module.scss'

import {useState} from 'react'

import {ReactComponent as ICONArrowDown} from '../../../assets/icons/arrow-down.svg'
import {Anchor, Span} from '../../atoms/Text'
import InputValidated from '../../molecules/InputValidated'
import {useGetClassnames} from '../../../utils/useGetClassnames'
import Button from '../../atoms/Button'
import {useHomeForm} from '../../../hooks/useHomeForm'

const HomeRightSide = () => {
  const [isToggleList, setIsToggleList] = useState<boolean>(false)

  const {
    documentRef: documentRef,
    phoneRef: phoneRef,
    plateRef: plateRef,

    typeDocument: typeDocument,
    isActivePolicy: isActivePolicy,
    documentError: documentError,
    phoneError: phoneError,
    plateError: plateError,
    checkError: checkError,

    onClickPolicy: onClickPolicy,
    onClickToggleItem: onClickToggleItem,
    onSubmit: onSubmit,
  } = useHomeForm()

  return (
    <div className={styles['right-container']}>
      <Span color='gray' size='28' weight='regular'>
        Déjanos tus datos
      </Span>

      <div className={styles['left-inputs']}>
        <div className={styles['input-select-container']}>
          <div
            className={styles['input-toggle-container']}
            onClick={() => setIsToggleList(!isToggleList)}
          >
            <Span color='gray' size='18' weight='regular'>
              {typeDocument}
            </Span>
            <ICONArrowDown />
            {isToggleList && (
              <div className={styles['input-toggle-list']}>
                <div className={styles['toggle-item']} onClick={() => onClickToggleItem('DNI')}>
                  <Span color='gray' size='14' weight='regular'>
                    DNI
                  </Span>
                </div>
                <div className={styles['toggle-item']} onClick={() => onClickToggleItem('RUC')}>
                  <Span color='gray' size='14' weight='regular'>
                    RUC
                  </Span>
                </div>
              </div>
            )}
          </div>
          <input type='number' name='' placeholder='Nro. de doc' ref={documentRef} />
          {documentError !== '' && (
            <div className={styles['document-error']}>
              <Span color='red' size='14'>
                {documentError}
              </Span>
            </div>
          )}
        </div>
        <InputValidated type='number' placeholder='Celular' ref={phoneRef} error={phoneError} />
        <InputValidated type='text' placeholder='Placa' ref={plateRef} error={plateError} />
      </div>

      <div className={styles['accept-policy-container']}>
        <div
          className={useGetClassnames([
            styles['check-policy'],
            isActivePolicy && styles['check-policy-active'],
          ])}
          onClick={onClickPolicy}
        >
          <span>✔</span>
        </div>
        <div>
          <Span color='gray' size='14' weight='regular'>
            Acepto la{' '}
          </Span>
          <Anchor color='gray' size='14' weight='regular' underline href='#'>
            Política de Protección de Datos Personales{' '}
          </Anchor>
          <Span color='gray' size='14' weight='regular'>
            y los{' '}
          </Span>
          <Anchor color='gray' size='14' weight='regular' underline href='#'>
            Términos y Condiciones
          </Anchor>
        </div>

        {checkError && (
          <div className={styles['check-error']}>
            <Span color='red' size='14'>
              {checkError}
            </Span>
          </div>
        )}
      </div>

      <div className={styles['button-submit']}>
        <Button color='red' text='Cotízalo' onClick={onSubmit} />
      </div>
    </div>
  )
}

export default HomeRightSide
