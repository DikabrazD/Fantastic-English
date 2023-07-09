import Home from 'src/pages/Home'
import AllCoursesPage from 'src/pages/AllCoursesPage'
import ReviewPage from 'src/pages/ReviewPage'
import CoursePage from 'src/pages/CoursePage'
import TestsPage from 'src/pages/TestsPage'
import TeamPage from 'src/pages/TeamPage'
import CareerPage from 'src/pages/CareerPage'
import ContactePage from 'src/pages/ContactsPage/ContactsPage'

export interface InterfaceRoute {
    path: RouterNames
    component: React.ReactNode
}

export enum RouterNames {
    DEFAULT = '*',
    HOME = '/',
    ALLCOURSES = '/cursuri',
    COURSE = '/cursuri/:id',
    TESTS = '/test',
    REVIEW = '/video-recenzii',
    TEAM = '/team',
    CAREER = '/cariera',
    CONTACTS = '/contacte'
}

export const publicRoutes: InterfaceRoute[] = [
    { path: RouterNames.DEFAULT, component: <Home /> },
    { path: RouterNames.HOME, component: <Home /> },
    { path: RouterNames.ALLCOURSES, component: <AllCoursesPage /> },
    { path: RouterNames.COURSE, component: <CoursePage /> },
    { path: RouterNames.TESTS, component: <TestsPage /> },
    { path: RouterNames.REVIEW, component: <ReviewPage /> },
    { path: RouterNames.TEAM, component: <TeamPage /> },
    { path: RouterNames.CAREER, component: <CareerPage /> },
    { path: RouterNames.CONTACTS, component: <ContactePage /> }
]
