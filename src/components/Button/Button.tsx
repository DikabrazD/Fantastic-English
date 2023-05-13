import React from 'react'
import './Button.scss'
import { ButtonInterface } from './ButtonInterface'
import { ButtonType } from './ButtonInterface'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Button = ({ type, text, isDisabled, onClick }: ButtonInterface) => {
    const onCLickButton = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (onClick) onClick()
    }

    const renderButton = () => {
        switch (type) {
            case ButtonType.static:
                return (
                    <button onClick={onCLickButton} disabled={isDisabled} className='static'>
                        {text}
                    </button>
                )
            case ButtonType.changeToWhite:
                return (
                    <button onClick={onCLickButton} disabled={isDisabled} className='changeToWhite'>
                        {text}
                    </button>
                )
            case ButtonType.changeToMain:
                return (
                    <button onClick={onCLickButton} disabled={isDisabled} className='changeToMain'>
                        {text}
                    </button>
                )
            case ButtonType.blink:
                return (
                    <button onClick={onCLickButton} disabled={isDisabled} className='blink'>
                        {text}
                    </button>
                )
            case ButtonType.arrow:
                return (
                    <button onClick={onCLickButton} disabled={isDisabled} className='arrow'>
                        <div className='arrow-icon'>
                            <FaLongArrowAltRight className='image' />
                        </div>
                        <span className='arrow-text'>{text}</span>
                    </button>
                )
            default:
                return <div>12</div>
        }
    }

    return renderButton()
}

export default Button
