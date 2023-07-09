import { InputInterface } from './InputInterface'

import './Input.scss'

const Input = ({ placeholder, value, onChange }: InputInterface) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.currentTarget.value)
    }

    return <input placeholder={placeholder} type='text' value={value} onChange={handleChange} />
}

export default Input
