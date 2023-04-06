import './Checkbox.scss'
import { useState } from 'react'
import { CheckboxInterface } from './CheckboxInterface'

const Checkbox = ({ text, link, type, color }: CheckboxInterface) => {
    const [value, setValue] = useState<boolean>(false)

    const toggleChecked = () => {
        setValue((prevStat) => !prevStat)
    }
    return (
        <div className='checkbox'>
            <input type='checkbox' className='checkbox-input' checked={value} onChange={toggleChecked} />
            {link ? (
                <a
                    href={link}
                    className={(type === 'underline' ? `checkbox-underline ` : `checkbox-changeColor `) + `${color}`}
                >
                    {text}
                </a>
            ) : (
                <span>{text}</span>
            )}
        </div>
    )
}

export default Checkbox
