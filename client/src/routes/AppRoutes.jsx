import CoastersListPage from '../pages/CoastersListPage/CoastersListPage'
import IndexPage from '../pages/IndexPage/IndexPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<IndexPage />} />

            <Route path="/galeria" element={<CoastersListPage />} />

            <Route path="/detalles/:coaster_id" element={<CoasterDetailsPage />} />

            <Route path="/registro" element={<SignupPage />} />

            <Route path="/inicio-sesion" element={<LoginPage />} />

            <Route path="*" element={<h1>404</h1>} />

        </Routes>
    )
}

export default AppRoutes