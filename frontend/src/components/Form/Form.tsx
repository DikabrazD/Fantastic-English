import { useState } from 'react'
import { ButtonType } from '../Button/ButtonInterface'
import { FormInterface } from './FormInterface'

import Button from '../Button'
import Checkbox from '../Checkbox'
import Input from '../Input'
import CustomerService from 'src/API/CustomerService'

import './Form.scss'

function Form({ privacyType, checkboxColor, buttonType = ButtonType.changeToMain }: FormInterface) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [text, setText] = useState<string>('')
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
    const changeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    const postDate = () => {
        CustomerService.create({ name, number, email, text })

        setName('')
        setEmail('')
        setNumber('')
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
                <Input placeholder='Numarul' value={number} onChange={changeNumber} />
            </div>
            <textarea value={text} placeholder='Mesajul' className='form-textarea' onChange={changeText} />
            <div className='form-checkbox'>
                <Checkbox
                    text='Sunt de acord cu politica de confidențialitate'
                    link='#'
                    type={privacyType}
                    color={checkboxColor}
                    onChecked={changePrivacyCheck}
                />
                <Checkbox text='Sunt de acord sa primesc SMS si apeluri' onChecked={changeSmsCheck} />
            </div>
            <Button isDisabled={isDisabled} type={buttonType} text='Trimite' onClick={postDate} />
        </form>
    )
}

export default Form
