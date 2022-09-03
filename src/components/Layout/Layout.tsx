import { PropsWithChildren } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Layout.scss'

function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <div className='top-bar-bg'>
                <div className='container top-bar'>
                    <a href='tel:+37378286262'>
                        <div className='top-bar-icon'>
                            <FaPhoneAlt className='image' />
                        </div>
                        <span className='top-bar-country'>MD:</span>
                        <span>+ 373 78 28 62 62</span>
                    </a>
                    <a href='tel:+40312296040'>
                        <div className='top-bar-icon'>
                            <FaPhoneAlt className='image' />
                        </div>
                        <span className='top-bar-country'>EU:</span>
                        <span>+40 31 22 960 40</span>
                    </a>
                    <a href='mailto:office@fantastic-english.md'>
                        <div className='top-bar-icon'>
                            <FaEnvelope className='image' />
                        </div>
                        <span>office@fantastic-english.md</span>
                    </a>
                </div>
            </div>
            <header>
                <div className='header-bg'>
                    <div className='container header'>
                        <div className='header-icon'>
                            <img src='images/logo.png' alt='logo' className='image' />
                        </div>
                        <div className='header-links'>
                            <Link to='/'>Home</Link>
                            <Link to='/cursuri'>Cursuri</Link>
                            <Link to='/test'>Teste</Link>
                            <Link to='/video-recenzii'>Video Recenzii</Link>
                            <Link to='/echipa'>Echipa</Link>
                            <Link to='/cariera'>Carieră</Link>
                            <Link to='/contacte'>Contacte</Link>
                        </div>
                    </div>
                </div>
            </header>
            {children}
        </div>
    )
}

export default Layout
