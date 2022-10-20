import './Main.scss'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import PhoneInput from 'react-phone-input-2'
import Combobox from 'src/components/Combobox'
import Checkbox from 'src/components/Checkbox'

const Main = () => {
    return (
        <>
            <div className='header-main'>
                <div className='header-main-image'>
                    <img
                        className='image'
                        src='https://fantastic-english.md/wp-content/uploads/2021/04/Fantastic-English-Homepage_result.webp'
                        alt='HeaderImage'
                    />
                </div>
                <h1>
                    Vorbește Engleza fluent <br /> Deja după 3 nivele,de la zero! <br /> Garantat!
                </h1>
                <form className='header-main-form' action=''>
                    <div className='header-main-form-inner'>
                        <Input placeholder='Nume/Prenume' />
                        <div>
                            <PhoneInput country={'md'} />
                        </div>
                        <Combobox
                            list={[
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
                            ]}
                        />
                        <Button type={ButtonType.static} text='Lecția de probă gratuită' />
                    </div>
                    <div className='header-main-form-checkbox'>
                        <Checkbox text='Sunt de acord cu politica de confidențialitate' link='#' />
                        <Checkbox text='Sunt de acord sa primesc SMS si apeluri' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Main
