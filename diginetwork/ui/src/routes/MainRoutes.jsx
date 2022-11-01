import {Route, Routes} from 'react-router-dom'
import {HomePage, LoginPage} from '../pages/'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  )
}


export  default MainRoutes