import Input from 'src/components/Input/Input'
import Combobox from 'src/components/Combobox/Combobox'
import Button from 'src/components/Button/Button'
import CustomerService from 'src/API/CustomerService'
import Checkbox from 'src/components/Checkbox/Checkbox'

import { useState } from 'react'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { ComboboxItemInterface } from 'src/components/Combobox/ComboboxInterface'

import './FormTrial.scss'

const FormTrial = () => {
    const socialList = [
        {
            id: 0,
            name: 'WhatsApp'
        },
        {
            id: 1,
            name: 'Viber'
        },
        {
            id: 2,
            name: 'Teleram'
        },
        {
            id: 3,
            name: 'Apel GSM'
        }
    ]

    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [social, setSocial] = useState<ComboboxItemInterface>(socialList[0])
    const [privacyCheck, setPrivacyCheck] = useState<boolean>(false)
    const [smsCheck, setSmsCheck] = useState<boolean>(false)

    const isDisabled = privacyCheck && smsCheck && name && number ? false : true

    const changePrivacyCheck = (i: boolean) => {
        setPrivacyCheck(i)
    }
    const changeSmsCheck = (i: boolean) => {
        setSmsCheck(i)
    }
    const changeName = (x: string) => {
        setName(x)
    }
    const changeNumber = (x: string) => {
        setNumber(x)
    }
    const changeSocial = (x: ComboboxItemInterface) => {
        setSocial(x)
    }

    const postDate = () => {
        CustomerService.create({ name, number, social })

        setName('')
        setNumber('')
    }

    return (
        <form className='formTrial container'>
            <div className='formTrial-wrapper'>
                <h2 className='formTrial-wrapper-header'>FACEȚI CUNOȘTINȚĂ CU ȘCOALA NOASTRĂ</h2>
                <div className='formTrial-wrapper-inner'>
                    <div className='formTrial-wrapper-inner-input'>
                        <Input placeholder='Nume/Prenume*' value={name} onChange={changeName} />
                    </div>
                    <div className='formTrial-wrapper-inner-input'>
                        <Input placeholder='Numarul' value={number} onChange={changeNumber} />
                    </div>
                    <Combobox list={socialList} value={social} onChange={changeSocial} />
                    <Button
                        onClick={postDate}
                        isDisabled={isDisabled}
                        type={ButtonType.static}
                        text='Lecția de probă gratuită'
                    />
                </div>
                <div className='formTrial-wrapper-checkbox'>
                    <Checkbox
                        text='Sunt de acord cu politica de confidențialitate'
                        link='#'
                        onChecked={changePrivacyCheck}
                    />
                    <Checkbox text='Sunt de acord sa primesc SMS si apeluri' onChecked={changeSmsCheck} />
                </div>
            </div>
        </form>
    )
}

export default FormTrial
