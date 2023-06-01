import Home from 'src/pages/Home'
import AllCoursesPage from 'src/pages/AllCoursesPage'
import ReviewPage from 'src/pages/ReviewPage'
import CoursePage from 'src/pages/CoursePage/CoursePage'

export interface InterfaceRoute {
    path: RouterNames
    component: React.ReactNode
}

export enum RouterNames {
    DEFAULT = '*',
    HOME = '/',
    ALLCOURSES = '/cursuri',
    COURSE = '/cursuri/:id',
    REVIEW = '/video-recenzii'
}

export const publicRoutes: InterfaceRoute[] = [
    { path: RouterNames.DEFAULT, component: <Home /> },
    { path: RouterNames.HOME, component: <Home /> },
    { path: RouterNames.ALLCOURSES, component: <AllCoursesPage /> },
    { path: RouterNames.COURSE, component: <CoursePage /> },
    { path: RouterNames.REVIEW, component: <ReviewPage /> }
]
