import Home from 'src/pages/Home/Home'
import CoursesPage from 'src/pages/CoursesPage/CoursesPage'

export interface InterfaceRoute {
    path: RouterNames
    component: React.ReactNode
}

export enum RouterNames {
    HOME = '/',
    COURSESPAGE = '/cursuri'
}

export const publicRoutes: InterfaceRoute[] = [
    { path: RouterNames.HOME, component: <Home /> },
    { path: RouterNames.COURSESPAGE, component: <CoursesPage /> }
]
