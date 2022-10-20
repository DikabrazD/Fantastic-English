import 'react-phone-input-2/lib/bootstrap.css'
import './Input.scss'
import PhoneInput from 'react-phone-input-2'
import { InputInterface } from './InputInterface'

const Input = ({ placeholder }: InputInterface) => {
    return (
        <>
            <input placeholder={placeholder} type='text' />
        </>
    )
}

export default Input
