import Contacts from 'src/components/Contacts/Contacts'
import Form from 'src/components/Form/Form'

import { ButtonType } from 'src/components/Button/ButtonInterface'

import './ContactsPage.scss'

const ContactePage = () => {
    return (
        <div className='contacts'>
            <div className='contacts-map'>
                <iframe
                    className='image'
                    title='map'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.499869741598!2d28.836853576718543!3d47.01079232893035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c4a61228fb5%3A0x3fdad89179dc6702!2sFantastic%20English%20School%20-%20Cursuri%20de%20Englez%C4%83!5e0!3m2!1sru!2s!4v1688207288218!5m2!1sru!2s'
                    loading='lazy'
                />
            </div>

            <div className='contacts-wrapper container'>
                <div className='contacts-wrapper-contacts'>
                    <h2 className='contacts-wrapper-contacts-header'>Trimite-ne un mesaj!</h2>
                    <Contacts textColor='black' iconColor='main' />
                </div>
                <div className='contacts-wrapper-form'>
                    <Form checkboxColor='black' privacyType='underline' buttonType={ButtonType.changeToWhite} />
                </div>
            </div>
        </div>
    )
}

export default ContactePage
