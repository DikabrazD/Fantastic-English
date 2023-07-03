import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Contacts from 'src/components/Contacts/Contacts'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-main'>
                <div className='footer-main-wrapper container'>
                    <div className='footer-main-wrapper-about'>
                        <h4 className='footer-main-wrapper-about-header'>Despre Noi</h4>
                        <ul className='footer-main-wrapper-about-list'>
                            <li className='footer-main-wrapper-about-list-item'>
                                Noi suntem Fantastic English – Școala de Engleză care pune accent pe învățarea limbii
                                Engleze în cel mai eficient mod posibil.
                            </li>
                            <li className='footer-main-wrapper-about-list-item'>
                                La noi găsești cursuri de Engleză generală, pregătire de examenul internațional – TOEFL
                                și cursuri Conversaționale. Plus la toate, suntem unica școală din Republica Molodva
                                care îți oferă garanția satisfacției 110%.
                            </li>
                            <li className='footer-main-wrapper-about-list-item'>
                                Din moment ce ajungi la noi, nu vei avea motive să NU însușești aceasă limbă!
                            </li>
                        </ul>
                        <Link className='footer-main-wrapper-about-history' to='/about'>
                            Istoria Fantastic English -{'>'}
                        </Link>
                    </div>
                    <div className='footer-main-wrapper-contacts'>
                        <h4 className='footer-main-wrapper-contacts-header'>Te așteptăm cu drag</h4>
                        <Contacts />
                    </div>
                    <div className='footer-main-wrapper-social'>
                        <h4>Facebook</h4>
                        <iframe
                            title='Facebook page'
                            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFantasticEnglishSchool%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId'
                            width='340'
                            height='130'
                            style={{ border: 'none', overflow: 'hidden' }}
                            allowFullScreen
                            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                        />
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <div className='footer-copyright-wrapper container'>
                    <div className='footer-copyright-wrapper-text'>
                        © 2022 Compania Fantastic English. Toate drepturile rezervate.
                        <br />
                        Operator de date cu caracter personal cu numărul de înregistrare 0002856-001 „Fantastic Group”
                        SRL, str. Suceviţa 22/3 of 23 c/f: 101860048736 Notificare nr. 200210CI144 din 10.02.2020
                    </div>
                    <div className='footer-copyright-wrapper-payments'>
                        <div className='footer-copyright-payments-wrapper-item'>
                            <FaCcVisa className='image' />
                        </div>
                        <div className='footer-copyright-payments-wrapper-item'>
                            <FaCcMastercard className='image' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
