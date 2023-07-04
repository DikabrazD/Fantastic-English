import Input from 'src/components/Input/Input'
import PhoneInput from 'react-phone-input-2'
import Combobox from 'src/components/Combobox/Combobox'
import Button from 'src/components/Button/Button'
import Checkbox from 'src/components/Checkbox/Checkbox'
import { useState } from 'react'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { ComboboxItemInterface } from 'src/components/Combobox/ComboboxInterface'
import './FormTrial.scss'
import axios from 'axios'

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
        axios
            .post('http://localhost:4000/api/customers', { name, number, social })
            .then(() => {
                setName('')
                setNumber('')
            })
            .catch(() => {
                console.log(Error)
            })
    }

    return (
        <form className='formTrial'>
            <div className='formTrial-inner'>
                <div className='formTrial-inner-input'>
                    <Input placeholder='Nume/Prenume*' value={name} onChange={changeName} />
                </div>
                <div>
                    <PhoneInput country={'md'} value={number} onChange={changeNumber} />
                </div>
                <Combobox list={socialList} value={social} onChange={changeSocial} />
                <Button
                    onClick={postDate}
                    isDisabled={isDisabled}
                    type={ButtonType.static}
                    text='Lecția de probă gratuită'
                />
            </div>
            <div className='formTrial-checkbox'>
                <Checkbox
                    text='Sunt de acord cu politica de confidențialitate'
                    link='#'
                    onChecked={changePrivacyCheck}
                />
                <Checkbox text='Sunt de acord sa primesc SMS si apeluri' onChecked={changeSmsCheck} />
            </div>
        </form>
    )
}

export default FormTrial
