// import styles from './styles.module.scss'

import PagesContainer from '../../templates/PagesContainer'
import EstarBienSteps from '../../organisms/EstarBienSteps'
import EstarBienCoverage from '../../organisms/EstarBienCoverage'

const ArmaTuPlanPage = () => {
  return (
    <PagesContainer header_background>
      <EstarBienSteps />
      <EstarBienCoverage />
    </PagesContainer>
  )
}

export default ArmaTuPlanPage
