import './Button.scss'
import { ButtonInterface } from './ButtonInterface'
import { ButtonType } from './ButtonInterface'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Button = ({ type, text }: ButtonInterface) => {
    const renderButton = () => {
        switch (type) {
            case ButtonType.static:
                return <button className='static'>{text}</button>
            case ButtonType.changeToWhite:
                return <button className='changeToWhite'>{text}</button>
            case ButtonType.changeToMain:
                return <button className='changeToMain'>{text}</button>
            case ButtonType.blink:
                return <button className='blink'>{text}</button>
            case ButtonType.arrow:
                return (
                    <button className='arrow'>
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
