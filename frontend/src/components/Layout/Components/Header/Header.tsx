import { Link, NavLink, useLocation } from 'react-router-dom'
import { RouterNames } from 'src/router'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

import './Header.scss'

const Header = () => {
    const location = useLocation()
    const headerIsWhite =
        location.pathname === (RouterNames.HOME || RouterNames.TESTS) || location.pathname.startsWith('/cursuri/')
    const headerClass = headerIsWhite ? 'header-navMain' : 'header-navWhite'

    return (
        <header className='header'>
            <div className='header-contacts'>
                <div className='header-contacts-list container'>
                    <a className='header-contacts-list-item' href='tel:+37378286262'>
                        <div className='header-contacts-list-item-icon'>
                            <FaPhoneAlt className='image' />
                        </div>
                        <span className='header-contacts-list-item-country'>MD:</span>
                        <span className='header-contacts-list-item-text'>+ 373 78 28 62 62</span>
                    </a>
                    <a className='header-contacts-list-item' href='tel:+40312296040'>
                        <div className='header-contacts-list-item-icon'>
                            <FaPhoneAlt className='image' />
                        </div>
                        <span className='header-contacts-list-item-country'>EU:</span>
                        <span className='header-contacts-list-item-text'>+40 31 22 960 40</span>
                    </a>
                    <a className='header-contacts-list-item' href='mailto:office@fantastic-english.md'>
                        <div className='header-contacts-list-item-icon'>
                            <FaEnvelope className='image' />
                        </div>
                        <span className='header-contacts-list-item-text'>office@fantastic-english.md</span>
                    </a>
                </div>
            </div>
            <nav className={headerClass}>
                <div className={`${headerClass}-wrapper container`}>
                    <div className={`${headerClass}-wrapper-icon`}>
                        <Link className='image' to={RouterNames.HOME}>
                            <img
                                className='image'
                                src={
                                    headerIsWhite
                                        ? 'https://fantastic-english.md/wp-content/uploads/2021/06/Logo-White-Homepage-desktop-e1607166771985_result.webp'
                                        : 'https://fantastic-english.md/wp-content/uploads/2021/06/fantastic-logo_result.webp'
                                }
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <div className={`${headerClass}-wrapper-links`}>
                        <NavLink to={RouterNames.HOME}>Home</NavLink>
                        <NavLink to={RouterNames.ALLCOURSES}>Cursuri</NavLink>
                        <NavLink to={RouterNames.TESTS}>Teste</NavLink>
                        <NavLink to={RouterNames.REVIEW}>Video Recenzii</NavLink>
                        <NavLink to={RouterNames.TEAM}>Echipa</NavLink>
                        <NavLink to={RouterNames.CAREER}>Carieră</NavLink>
                        <NavLink to='/contacte'>Contacte</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
