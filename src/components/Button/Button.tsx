import './Button.scss'
import { ButtonInterface } from './ButtonInterface'
import { ButtonType } from './ButtonInterface'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Button = ({ type, text, isDisabled }: ButtonInterface) => {
    const renderButton = () => {
        switch (type) {
            case ButtonType.static:
                return (
                    <button disabled={isDisabled} className='static'>
                        {text}
                    </button>
                )
            case ButtonType.changeToWhite:
                return (
                    <button disabled={isDisabled} className='changeToWhite'>
                        {text}
                    </button>
                )
            case ButtonType.changeToMain:
                return (
                    <button disabled={isDisabled} className='changeToMain'>
                        {text}
                    </button>
                )
            case ButtonType.blink:
                return (
                    <button disabled={isDisabled} className='blink'>
                        {text}
                    </button>
                )
            case ButtonType.arrow:
                return (
                    <button disabled={isDisabled} className='arrow'>
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
