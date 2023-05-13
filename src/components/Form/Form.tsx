import './Form.scss'
import PhoneInput from 'react-phone-input-2'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'
import { useState } from 'react'
import { ButtonType } from '../Button/ButtonInterface'
import { FormInterface } from './FormInterface'

function Form({ privacyType, checkboxColor }: FormInterface) {
    const [privacyCheck, setPrivacyCheck] = useState<boolean>(false)
    const [smsCheck, setSmsCheck] = useState<boolean>(false)

    const isDisabled = privacyCheck && smsCheck ? false : true

    const changePrivacyCheck = (i: boolean) => {
        setPrivacyCheck(i)
    }
    const changeSmsCheck = (i: boolean) => {
        setSmsCheck(i)
    }

    return (
        <form className='form'>
            <div className='form-importantInfo'>
                <div className='form-importantInfo-name'>{/* <Input placeholder='Nume' /> */}</div>
                <div className='form-importantInfo-email'>{/* <Input placeholder='Email' /> */}</div>
            </div>
            <div className='form-phoneInput'>
                <PhoneInput country='md' />
            </div>
            <textarea placeholder='Mesajul' className='form-textarea'></textarea>
            <div className='form-checkbox'>
                <Checkbox
                    text='Sunt de acord cu politica de confidențialitate'
                    link='#'
                    type={privacyType}
                    color={checkboxColor}
                    onChecked={changePrivacyCheck}
                />
                <Checkbox text='Sunt de acord sa primesc SMS si apelur' onChecked={changeSmsCheck} />
            </div>
            <Button isDisabled={isDisabled} type={ButtonType.changeToMain} text='Trimite' />
        </form>
    )
}

export default Form
