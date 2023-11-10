import HomeLeftSide from '../../organisms/HomeLeftSide'
import HomeRightSide from '../../organisms/HomeRightSide'
import HeaderContact from '../../templates/HeaderContact'

import PagesContainer from '../../templates/PagesContainer'

const HomePage = () => {
  return (
    <PagesContainer>
      <HeaderContact absolute />
      <HomeLeftSide />
      <HomeRightSide />
    </PagesContainer>
  )
}

export default HomePage
