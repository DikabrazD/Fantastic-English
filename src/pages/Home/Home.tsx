import './Home.scss'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import PhoneInput from 'react-phone-input-2'
import Combobox from 'src/components/Combobox'
import Checkbox from 'src/components/Checkbox'
import Courses from 'src/components/Courses'

const Home = () => {
    return (
        <>
            <div className='header-home'>
                <div className='header-home-image'>
                    <img
                        className='image'
                        src='https://fantastic-english.md/wp-content/uploads/2021/04/Fantastic-English-Homepage_result.webp'
                        alt='HeaderImage'
                    />
                </div>
                <h1>
                    Vorbește Engleza fluent <br /> Deja după 3 nivele,de la zero! <br /> Garantat!
                </h1>
                <form className='header-home-form' action=''>
                    <div className='header-home-form-inner'>
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
                    <div className='header-home-form-checkbox'>
                        <Checkbox text='Sunt de acord cu politica de confidențialitate' link='#' />
                        <Checkbox text='Sunt de acord sa primesc SMS si apeluri' />
                    </div>
                </form>
            </div>
            <Courses />
        </>
    )
}

export default Home
