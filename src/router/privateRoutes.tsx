import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'

import ArmaTuPlanPage from '../components/pages/ArmaTuPlan'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route index path='/' element={<ArmaTuPlanPage />} />
      <Route path='/arma-tu-plan' element={<ArmaTuPlanPage />} />
    </Routes>
  )
}

export default PrivateRoutes
