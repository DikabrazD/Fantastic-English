import Home from 'src/pages/Home/Home'

export enum RouterNames {
    MAIN = '/'
}

export interface InterfaceRoute {
    path: RouterNames
    component: React.ReactNode
}

export const publicRoutes: InterfaceRoute[] = [{ path: RouterNames.MAIN, component: <Home /> }]
