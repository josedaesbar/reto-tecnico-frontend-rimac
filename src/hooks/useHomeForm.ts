import {useRef, useState} from 'react'
import {DocumentType} from '../application/core/models/user.model'
import {useAppDispatch, useAppSelector} from '../redux'
import {A_GET_USER_DATA, A_SET_USER} from '../redux/user/actions'
import {useNavigate} from 'react-router-dom'
import {getCarName} from '../utils/getCarName'

export const useHomeForm = () => {
  const dispatch = useAppDispatch()
  const userStore = useAppSelector((v) => v.user)

  const navigate = useNavigate()

  const documentRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const plateRef = useRef<HTMLInputElement>(null)

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
        carName: getCarName(),
      })
    )

    navigate('/arma-tu-plan')
  }

  return {
    documentRef: documentRef,
    phoneRef: phoneRef,
    plateRef: plateRef,

    typeDocument: typeDocument,
    isActivePolicy: isActivePolicy,
    documentError: documentError,
    phoneError: phoneError,
    plateError: plateError,
    checkError: checkError,

    setPlateError: setPlateError,

    onClickPolicy: onClickPolicy,
    onClickToggleItem: onClickToggleItem,
    onSubmit: onSubmit,
  }
}
