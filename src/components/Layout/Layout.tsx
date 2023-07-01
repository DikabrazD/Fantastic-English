import { PropsWithChildren, useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RouterNames } from 'src/router'

import './Layout.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function Layout({ children }: PropsWithChildren) {
    const [prev, setPrev] = useState<number>(0)
    const [showHeader, setShowHeader] = useState<boolean>(false)
    const [showToTop, setShowToTop] = useState<boolean>(false)

    const dropHeaderClass = showHeader ? 'show-header' : 'hide-header'
    const toTopClass = showToTop ? 'show-toTop' : 'hide-toTop'

    const moveToTop = () => {
        console.log('1')
        window.scrollTo({ top: 0 })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (prev < window.scrollY) {
                setShowHeader(false)
                setShowToTop(false)
                setPrev(window.scrollY)
            } else {
                if (window.scrollY < 200) {
                    setShowToTop(false)
                    setShowHeader(false)
                } else {
                    setShowToTop(true)
                    setShowHeader(true)
                }
                setPrev(window.scrollY)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prev])

    return (
        <div className='layout'>
            <Header />
            {children}
            <Footer />

            {/* Drop Heaader and ToTop */}
            <div className={`dropHeader ${dropHeaderClass}`}>
                <nav className='dropHeader-wrapper container'>
                    <Link className='dropHeader-wrapper-icon' to='/'>
                        <img
                            src='https://fantastic-english.md/wp-content/uploads/2021/06/fantastic-logo_result.webp'
                            alt='logo'
                            className='image'
                        />
                    </Link>
                    <div className='dropHeader-wrapper-links'>
                        <Link to={RouterNames.HOME}>Home</Link>
                        <Link to={RouterNames.ALLCOURSES}>Cursuri</Link>
                        <Link to={RouterNames.TESTS}>Teste</Link>
                        <Link to={RouterNames.REVIEW}>Video Recenzii</Link>
                        <Link to={RouterNames.TEAM}>Echipa</Link>
                        <Link to={RouterNames.CAREER}>Carieră</Link>
                        <Link to='/contacte'>Contacte</Link>
                    </div>
                </nav>
            </div>
            <div onClick={moveToTop} className={`toTop ${toTopClass}`}>
                <div className='toTop-icon'>
                    <FaAngleUp className='image' />
                </div>
            </div>
        </div>
    )
}

export default Layout
