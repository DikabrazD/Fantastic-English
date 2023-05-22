import './Form.scss'
import PhoneInput from 'react-phone-input-2'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'
import { useState } from 'react'
import { ButtonType } from '../Button/ButtonInterface'
import { FormInterface } from './FormInterface'
import axios from 'axios'

function Form({ privacyType, checkboxColor }: FormInterface) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [privacyCheck, setPrivacyCheck] = useState<boolean>(false)
    const [smsCheck, setSmsCheck] = useState<boolean>(false)

    const isDisabled = privacyCheck && smsCheck && name && email ? false : true

    const changePrivacyCheck = (i: boolean) => {
        setPrivacyCheck(i)
    }
    const changeSmsCheck = (i: boolean) => {
        setSmsCheck(i)
    }
    const changeName = (x: string) => {
        setName(x)
    }
    const changeEmail = (x: string) => {
        setEmail(x)
    }
    const changeNumber = (x: string) => {
        setNumber(x)
    }

    const postDate = () => {
        axios
            .post('http://localhost:3000/customers', { name, number, email })
            .then(() => {
                setName('')
                setEmail('')
                setNumber('')
            })
            .catch(() => {
                console.log(Error)
            })
    }

    return (
        <form className='form'>
            <div className='form-importantInfo'>
                <div className='form-importantInfo-name'>
                    <Input placeholder='Nume' value={name} onChange={changeName} />
                </div>
                <div className='form-importantInfo-email'>
                    <Input placeholder='Email' value={email} onChange={changeEmail} />
                </div>
            </div>
            <div className='form-phoneInput'>
                <PhoneInput country='md' value={number} onChange={changeNumber} />
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
            <Button isDisabled={isDisabled} type={ButtonType.changeToMain} text='Trimite' onClick={postDate} />
        </form>
    )
}

export default Form
