import 'react-phone-input-2/lib/bootstrap.css'
import './Input.scss'
import { InputInterface } from './InputInterface'
import React from 'react'

const Input = ({ placeholder, value, onChange }: InputInterface) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.currentTarget.value)
    }

    return <input placeholder={placeholder} type='text' value={value} onChange={handleChange} />
}

export default Input
