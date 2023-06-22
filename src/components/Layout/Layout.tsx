import { PropsWithChildren, useEffect, useState } from 'react'
import { FaAngleUp, FaCcMastercard, FaCcVisa, FaClock, FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { RouterNames } from 'src/router'
import './Layout.scss'

function Layout({ children }: PropsWithChildren) {
    const [prev, setPrev] = useState<number>(0)
    const [showHeader, setShowHeader] = useState<boolean>(false)
    const [showToTop, setShowToTop] = useState<boolean>(false)
    const dropHeaderClass = showHeader ? 'show-header' : 'hide-header'
    const toTopClass = showToTop ? 'show-toTop' : 'hide-toTop'

    const location = useLocation()
    const headerIsPink = location.pathname === RouterNames.HOME || RouterNames.COURSE
    const headerClass = headerIsPink ? '' : 'White'

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
                <div className={`header${headerClass}-bg`}>
                    <div className={`container header${headerClass}`}>
                        <Link className={`header${headerClass}-icon`} to='/'>
                            {headerIsPink ? (
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/06/Logo-White-Homepage-desktop-e1607166771985_result.webp'
                                    alt='logo'
                                    className='image'
                                />
                            ) : (
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/06/fantastic-logo_result.webp'
                                    alt='logo'
                                    className='image'
                                />
                            )}
                        </Link>
                        <div className={`header${headerClass}-links`}>
                            <Link to={RouterNames.HOME}>Home</Link>
                            <Link to={RouterNames.ALLCOURSES}>Cursuri</Link>
                            <Link to='/test'>Teste</Link>
                            <Link to={RouterNames.REVIEW}>Video Recenzii</Link>
                            <Link to='/echipa'>Echipa</Link>
                            <Link to='/cariera'>Carieră</Link>
                            <Link to='/contacte'>Contacte</Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`drop-header ${dropHeaderClass}`}>
                <div className='drop-header-bg'>
                    <div className='container drop-header-inner'>
                        <Link className='drop-header-inner-icon' to='/'>
                            <img
                                src='https://fantastic-english.md/wp-content/uploads/2021/06/fantastic-logo_result.webp'
                                alt='logo'
                                className='image'
                            />
                        </Link>
                        <div className='drop-header-inner-links'>
                            <Link to={RouterNames.HOME}>Home</Link>
                            <Link to={RouterNames.ALLCOURSES}>Cursuri</Link>
                            <Link to='/test'>Teste</Link>
                            <Link to={RouterNames.REVIEW}>Video Recenzii</Link>
                            <Link to='/echipa'>Echipa</Link>
                            <Link to='/cariera'>Carieră</Link>
                            <Link to='/contacte'>Contacte</Link>
                        </div>
                    </div>
                </div>
            </div>
            {children}
            <footer>
                <div className='footer-top-bg'>
                    <div className='container footer-top'>
                        <div className='footer-top-about'>
                            <h4>Despre Noi</h4>
                            <p>
                                Noi suntem Fantastic English – Școala de Engleză care pune accent pe învățarea limbii
                                Engleze în cel mai eficient mod posibil.
                            </p>
                            <p>
                                La noi găsești cursuri de Engleză generală, pregătire de examenul internațional – TOEFL
                                și cursuri Conversaționale. Plus la toate, suntem unica școală din Republica Molodva
                                care îți oferă garanția satisfacției 110%.
                            </p>
                            <p>Din moment ce ajungi la noi, nu vei avea motive să NU însușești aceasă limbă!</p>
                            <Link to='/about'>Istoria Fantastic English -{'>'}</Link>
                        </div>
                        <div className='footer-top-contacts'>
                            <h4>Te așteptăm cu drag</h4>
                            <a
                                className='footer-top-contacts-item'
                                href='http://maps.google.com/?q=str.Lev Tolstoi 3/1'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <div className='footer-top-contacts-item-icon'>
                                    <FaLocationArrow className='image' />
                                </div>
                                <span>Online sau str. Lev Tolstoi 3/1</span>
                            </a>
                            <a className='footer-top-contacts-item' href='mailto:office@fantastic-english.md'>
                                <div className='footer-top-contacts-item-icon'>
                                    <FaEnvelope className='image' />
                                </div>
                                <span>office@fantastic-english.md</span>
                            </a>
                            <div>
                                <a href='tel:+37378286262' className='footer-top-contacts-item'>
                                    <div className='footer-top-contacts-item-icon'>
                                        <FaPhoneAlt className='image' />
                                    </div>
                                    <span>MD: + 373 78 28 62 62</span>
                                </a>
                                <a className='footer-top-contacts-item-plus' href='tel:+37322004400'>
                                    <span>FIX: + 373 22 00 44 00</span>
                                </a>
                            </div>
                            <a className='footer-top-contacts-item' href='tel:+40312296040'>
                                <div className='footer-top-contacts-item-icon'>
                                    <FaPhoneAlt className='image' />
                                </div>
                                <span>EU: + 40 31 22 960 40</span>
                            </a>
                            <div>
                                <div className='footer-top-contacts-item'>
                                    <div className='footer-top-contacts-item-icon'>
                                        <FaClock className='image' />
                                    </div>
                                    <span>Luni – Vineri: 09:00 – 19:00</span>
                                </div>
                                <span className='footer-top-contacts-item-plus'>Sâmbătă: 10:00 - 17:00</span>
                            </div>
                        </div>
                        <div className='footer-top-social'>
                            <h4>Facebook</h4>
                            <iframe
                                title='Facebook page'
                                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFantasticEnglishSchool%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId'
                                width='340'
                                height='130'
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling='no'
                                frameBorder='0'
                                allowFullScreen
                                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                            />
                        </div>
                    </div>
                </div>
                <div className='footer-bottom-bg'>
                    <div className='container footer-bottom'>
                        <div className='footer-bottom-copyright'>
                            © 2022 Compania Fantastic English. Toate drepturile rezervate.
                            <br />
                            Operator de date cu caracter personal cu numărul de înregistrare 0002856-001 „Fantastic
                            Group” SRL, str. Suceviţa 22/3 of 23 c/f: 101860048736 Notificare nr. 200210CI144 din
                            10.02.2020
                        </div>
                        <div className='footer-bottom-payments'>
                            <div className='footer-bottom-payments-item'>
                                <FaCcVisa className='image' />
                            </div>
                            <div className='footer-bottom-payments-item'>
                                <FaCcMastercard className='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={`toTop ${toTopClass}`}>
                <div className='toTop-icon'>
                    <FaAngleUp className='image' />
                </div>
            </div>
        </div>
    )
}

export default Layout
