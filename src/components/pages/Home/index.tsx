import {useNavigate} from 'react-router-dom'
import HomeLeftSide from '../../organisms/HomeLeftSide'
import HomeRightSide from '../../organisms/HomeRightSide'

import PagesContainer from '../../templates/PagesContainer'
import {useAppSelector} from '../../../redux'

import {useEffect} from 'react'

const HomePage = () => {
  const userStore = useAppSelector((v) => v.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (userStore.user === null) {
      navigate('/')
    }
  }, [])

  return (
    <PagesContainer>
      <HomeLeftSide />
      <HomeRightSide />
    </PagesContainer>
  )
}

export default HomePage
