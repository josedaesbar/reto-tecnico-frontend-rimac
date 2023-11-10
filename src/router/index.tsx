import {Route, redirect} from 'react-router-dom'
import {Routes, BrowserRouter} from 'react-router-dom'
import HomePage from '../components/pages/Home'
import ArmaTuPlanPage from '../components/pages/ArmaTuPlan'
import {useAppSelector} from '../redux'
import PrivateRoutes from './privateRoutes'

const AppRoutes = () => {
  const userStore = useAppSelector((v) => v.user)

  redirect('/aea')

  return (
    <BrowserRouter
    // basename={PUBLIC_URL}
    >
      {userStore.user === null ? (
        <Routes>
          <Route path='/'>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      ) : (
        <PrivateRoutes />
      )}
    </BrowserRouter>
  )
}

export default AppRoutes
