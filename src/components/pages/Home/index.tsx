import HomeLeftSide from '../../organisms/HomeLeftSide'
import HomeRightSide from '../../organisms/HomeRightSide'

import PagesContainer from '../../templates/PagesContainer'

const HomePage = () => {
  return (
    <PagesContainer>
      <HomeLeftSide />
      <HomeRightSide />
    </PagesContainer>
  )
}

export default HomePage
