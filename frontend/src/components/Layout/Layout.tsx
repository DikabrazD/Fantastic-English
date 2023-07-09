import { PropsWithChildren } from 'react'

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HeaderMobile from './Components/HeaderMobile/HeaderMobile'
import ToTop from './Components/ToTop/ToTop'

function Layout({ children }: PropsWithChildren) {
    return (
        <div className='layout'>
            <Header />
            <HeaderMobile />
            {children}
            <Footer />
            <ToTop />
        </div>
    )
}

export default Layout
