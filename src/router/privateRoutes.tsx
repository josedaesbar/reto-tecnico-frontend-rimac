import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'

import ArmaTuPlanPage from '../components/pages/ArmaTuPlan'
import GraciasPage from '../components/pages/Gracias'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route index path='/' element={<ArmaTuPlanPage />} />
      <Route path='/arma-tu-plan' element={<ArmaTuPlanPage />} />
      <Route path='/gracias' element={<GraciasPage />} />
    </Routes>
  )
}

export default PrivateRoutes
