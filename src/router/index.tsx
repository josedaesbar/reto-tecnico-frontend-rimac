import {Route} from 'react-router-dom'
import {Routes, BrowserRouter} from 'react-router-dom'
import HomePage from '../components/pages/Home'
import {useAppSelector} from '../redux'
import PrivateRoutes from './privateRoutes'

const AppRoutes = () => {
  const userStore = useAppSelector((v) => v.user)

  return (
    <BrowserRouter>
      {userStore.user === null ? (
        <Routes>
          <Route path='*' element={<HomePage />}></Route>
        </Routes>
      ) : (
        <PrivateRoutes />
      )}
    </BrowserRouter>
  )
}

export default AppRoutes
