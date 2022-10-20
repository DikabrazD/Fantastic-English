import './Main.scss'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import PhoneInput from 'react-phone-input-2'
import Combobox from 'src/components/Combobox'
import { ButtonType } from 'src/components/Button/ButtonInterface'

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
                </form>
            </div>
        </>
    )
}

export default Main
