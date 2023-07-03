import { publicRoutes } from 'src/router'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((item) => (
                <Route key={item.path} path={item.path} element={item.component} />
            ))}
        </Routes>
    )
}

export default AppRouter
