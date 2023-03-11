import './Home.scss'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import PhoneInput from 'react-phone-input-2'
import Combobox from 'src/components/Combobox'
import Checkbox from 'src/components/Checkbox'
import Courses from 'src/components/Courses'
import Card from 'src/components/Card'
import { CardInterface } from 'src/components/Card/CardInterface'

const Home = () => {
    const [teachers, setTeachers] = useState<CardInterface[]>([])

    useEffect(() => {
        const getData = async () => {
            await axios
                .get('http://localhost:3000/teachers')
                .then((res) => {
                    setTeachers(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        getData()
    }, [])

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
            <div className='test-level'>
                <div className='test-level-img'>
                    <img src='https://fantastic-english.md/wp-content/uploads/2021/04/Testeaza-ti-Nivelul-de-Engleza-ONLINE-GRATUIT.webp' />
                </div>
                <div className='test-level-main'>
                    <h3 className='test-level-main-header'>Nu cunoști ce nivel de engleză posezi?</h3>
                    <div className='test-level-main-line'></div>

                    <p className='test-level-main-description'>
                        Mai bine de 90% dintre studenți nu-și cunosc nivelul actual de engleză și întâmpină dificultăți
                        în alegerea cursului potrivit. Din acest motiv te invităm să treci gratuit testul nostru online
                        pentru a afla nivelul tău actual de engleză. Fiecare întrebare are o singură variantă corectă de
                        răspuns. Pentru asigurarea unui rezultat corect te rugăm să completezi acest test individual,
                        fără surse de informare.
                        <br />
                        <br />
                        După ce-l treci vei afla ce nivel de engleză posezi și vei putea alege ușor cursul perfect
                        pentru tine
                    </p>
                    <Button type={ButtonType.blink} text='Testează nivelul tău de engleză' />
                </div>
            </div>

            <div className='teachers container'>
                <h3 className='teachers-header'>Profesori de Engleză dedicați și fantastici</h3>
                <div className='teachers-line' />
                <p className='teachers-description'>
                    Noi ne mândrim cu profesorii noștri care învață, se dezvoltă și aduc valoare în viețile oamenilor.
                    Toți profesorii sunt pasionați și dedicați, îndeplinesc cele mai înalte standarde în domeniul
                    predării și ajută studenții noștri să învingă orice barieră de învățare a limbii engleze.
                </p>

                <div className='teachers-list'>
                    {teachers.map((item) => {
                        return (
                            <div className='teachers-list-card'>
                                <Card card={item} descriptionStatus={false} />
                            </div>
                        )
                    })}
                </div>
                <div className='teachers-button'>
                    <Button type={ButtonType.arrow} text='Vezi toți profesorii de engleză' />
                </div>
            </div>
        </>
    )
}

export default Home
