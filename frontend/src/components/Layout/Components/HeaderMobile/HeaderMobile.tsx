import { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useSpring, animated } from '@react-spring/web'
import { useMeasure } from 'src/hooks/useMeasure'

import RouterLinks from '../RouterLinks/RouterLinks'

import './HeaderMobile.scss'

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState<boolean>()
    const [heightNavRef, heightNav] = useMeasure()

    const styleDetails = useSpring({
        height: isOpen ? heightNav : 0,
        overflow: 'hidden'
    })

    const contacts = [
        {
            country: 'MD',
            number: '+373 78 28 62 62'
        },
        {
            country: 'EU',
            number: '+40 730 849 021'
        }
    ]

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='headerMobile'>
            <div className='headerMobile-contacts'>
                {contacts.map((item) => {
                    return (
                        <div key={item.country} className='headerMobile-contacts-item'>
                            <div className='headerMobile-contacts-item-icon'>
                                <FaPhoneAlt className='image' />
                            </div>
                            <div className='headerMobile-contacts-item-country'>{item.country}:</div>
                            <div className='headerMobile-contacts-item-number'>{item.number}:</div>
                        </div>
                    )
                })}
            </div>
            <div className='headerMobile-holder container'>
                <div className='headerMobile-holder-hamburger' onClick={toggleNav}>
                    <RxHamburgerMenu className='image' />
                </div>
                <div className='headerMobile-holder-icon'>
                    <img
                        className='image'
                        src='https://fantastic-english.md/wp-content/uploads/2021/06/fantastic-logo_result.webp'
                        alt='logo'
                    />
                </div>
            </div>
            <div className='headerMobile-nav'>
                <animated.div style={styleDetails}>
                    <nav ref={heightNavRef} className='headerMobile-nav-wrapper container'>
                        <RouterLinks onClick={toggleNav} />
                    </nav>
                </animated.div>
            </div>
        </div>
    )
}

export default HeaderMobile
