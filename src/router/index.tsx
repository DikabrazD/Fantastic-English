import Main from 'src/pages/Main/Main'

export enum RouterNames {
    MAIN = '/'
}

export interface InterfaceRoute {
    path: RouterNames
    component: React.ReactNode
}

export const publicRoutes: InterfaceRoute[] = [{ path: RouterNames.MAIN, component: <Main /> }]
