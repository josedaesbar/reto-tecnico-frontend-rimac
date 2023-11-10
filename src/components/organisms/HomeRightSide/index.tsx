import styles from './styles.module.scss'

import {useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {ReactComponent as ICONArrowDown} from '../../../assets/icons/arrow-down.svg'
import {Anchor, Span} from '../../atoms/Text'
import InputValidated from '../../molecules/InputValidated'
import {useGetClassnames} from '../../../hooks/useGetClassnames'
import Button from '../../atoms/Button'
import {useAppDispatch, useAppSelector} from '../../../redux'
import {A_GET_USER_DATA, A_SET_USER} from '../../../redux/user/actions'
import {DocumentType} from '../../../core/models/user.model'

const HomeRightSide = () => {
  const dispatch = useAppDispatch()
  const userStore = useAppSelector((v) => v.user)

  const navigate = useNavigate()

  const documentRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const plateRef = useRef<HTMLInputElement>(null)

  const [isToggleList, setIsToggleList] = useState<boolean>(false)

  const [typeDocument, setTypeDocument] = useState<DocumentType>('DNI')
  const [isActivePolicy, setIsActivePolicy] = useState<boolean>(false)

  const [documentError, setDocumentError] = useState<string>('')
  const [phoneError, setPhoneError] = useState<string>('')
  const [plateError, setPlateError] = useState<string>('')
  const [checkError, setCheckError] = useState<string>('')

  const onClickPolicy = () => {
    setIsActivePolicy(!isActivePolicy)
  }

  const onClickToggleItem = (typeDocument: DocumentType) => {
    setTypeDocument(typeDocument)
    setIsActivePolicy(false)
  }

  const onSubmit = async () => {
    if (userStore.stateLoadingFetch.getUserState === 'loading') {
      alert('CARGANDO')
      return
    }

    let isOkey: boolean = true

    if (documentRef.current?.value === '') {
      setDocumentError('Ingresa un documento')
      isOkey = false
    } else {
      setDocumentError('')
    }

    if (phoneRef.current?.value === '') {
      setPhoneError('Ingresa un numero')
      isOkey = false
    } else {
      setPhoneError('')
    }

    if (plateRef.current?.value === '') {
      setPlateError('Ingresa una placa')
      isOkey = false
    } else {
      setPlateError('')
    }

    if (isActivePolicy === false) {
      setCheckError('Acepta los terminos y condiciones para continuar')
      isOkey = false
    } else {
      setCheckError('')
    }

    if (isOkey === false) return

    const userFetchedData = await dispatch(A_GET_USER_DATA()).unwrap()

    if (userFetchedData.payload === undefined) {
      alert('ERROR')
      return
    }

    dispatch(
      A_SET_USER({
        ...userFetchedData.payload,
        documentType: typeDocument,
        document: documentRef.current!.value,
        phone: phoneRef.current!.value,
        plate: plateRef.current!.value,
      })
    )

    navigate('/arma-tu-plan')
  }

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
