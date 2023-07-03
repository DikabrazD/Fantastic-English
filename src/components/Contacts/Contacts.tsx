import { FaClock, FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { ContactsInterface } from './ContactsInterface'

import './Contacts.scss'

const Contacts = ({ textColor = 'white', iconColor = 'white' }: ContactsInterface) => {
    return (
        <div className='contacts'>
            <a
                className='contacts-item'
                href='http://maps.google.com/?q=str.Lev Tolstoi 3/1'
                rel='noopener noreferrer'
                target='_blank'
            >
                <div className={`contacts-item-icon ${iconColor}`}>
                    <FaLocationArrow className='image' />
                </div>
                <span className={textColor}>Online sau str. Lev Tolstoi 3/1</span>
            </a>
            <a className='contacts-item' href='mailto:office@fantastic-english.md'>
                <div className={`contacts-item-icon ${iconColor}`}>
                    <FaEnvelope className='image' />
                </div>
                <span className={textColor}>office@fantastic-english.md</span>
            </a>
            <div>
                <a href='tel:+37378286262' className='contacts-item'>
                    <div className={`contacts-item-icon ${iconColor}`}>
                        <FaPhoneAlt className='image' />
                    </div>
                    <span className={textColor}>MD: + 373 78 28 62 62</span>
                </a>
                <a className='contacts-item-plus' href='tel:+37322004400'>
                    <span className={textColor}>FIX: + 373 22 00 44 00</span>
                </a>
            </div>
            <a className='contacts-item' href='tel:+40312296040'>
                <div className={`contacts-item-icon ${iconColor}`}>
                    <FaPhoneAlt className='image' />
                </div>
                <span className={textColor}>EU: + 40 31 22 960 40</span>
            </a>
            <div>
                <div className='contacts-item'>
                    <div className={`contacts-item-icon ${iconColor}`}>
                        <FaClock className='image' />
                    </div>
                    <span className={textColor}>Luni – Vineri: 09:00 – 19:00</span>
                </div>
                <span className={`contacts-item-plus ${textColor}`}>Sâmbătă: 10:00 - 17:00</span>
            </div>
        </div>
    )
}

export default Contacts
