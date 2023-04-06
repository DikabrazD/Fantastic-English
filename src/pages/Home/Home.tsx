import './Home.scss'
import axios from 'axios'
import { SwiperSlide } from 'swiper/react'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { useEffect, useState } from 'react'
import { CardInterface } from 'src/components/Card/CardInterface'
import { ReviewInterface } from 'src/components/Review/ReviewInterface'
import { IoCheckmarkSharp } from 'react-icons/io5'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import PhoneInput from 'react-phone-input-2'
import Combobox from 'src/components/Combobox'
import Checkbox from 'src/components/Checkbox'
import Courses from 'src/components/Courses'
import Card from 'src/components/Card'
import Slider from 'src/components/Slider'
import Review from 'src/components/Review'
import Form from 'src/components/Form'

const Home = () => {
    const [teachers, setTeachers] = useState<CardInterface[]>([])
    const [reviews, setReviews] = useState<ReviewInterface[]>([])

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
            await axios
                .get('http://localhost:3000/reviews')
                .then((res) => {
                    setReviews(res.data)
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
                        alt='Header'
                    />
                </div>
                <h1>
                    Vorbește Engleza fluent <br /> Deja după 3 nivele,de la zero! <br /> Garantat!
                </h1>
                <form className='header-home-form' action=''>
                    <div className='header-home-form-inner'>
                        <div className='header-home-form-inner-input'>
                            <Input placeholder='Nume/Prenume' />
                        </div>
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
                    <img
                        src='https://fantastic-english.md/wp-content/uploads/2021/04/Testeaza-ti-Nivelul-de-Engleza-ONLINE-GRATUIT.webp'
                        alt='Test-level'
                    />
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
                            <div key={item.id} className='teachers-list-card'>
                                <Card card={item} descriptionStatus={false} />
                            </div>
                        )
                    })}
                </div>
                <div className='teachers-button'>
                    <Button type={ButtonType.arrow} text='Vezi toți profesorii de engleză' />
                </div>
            </div>

            <div className='garantee'>
                <div className='garantee-main'>
                    <h3 className='garantee-main-header'>
                        Garanție 110% <br /> la cursuri de engleză
                    </h3>
                    <div className='garantee-main-description'>
                        <p>
                            Pentru noi, satisfacția și rezultatele clienților care trec
                            <b>cursurile noastre de limbă engleză</b> sunt o prioritate. Dorim ca fiecare persoană și
                            firmă care contactează cu noi să obțină o experiență plăcută și benefică.
                        </p>
                        <p>
                            Suntem convinși că vei obține doar beneficii studiind la cursurile/lecțiile noastre de
                            engleză. Deci, îți garantăm 100% că merită! Dacă din diverse motive, consideri că cursurile
                            de engleză predate de noi, nu au fost utile, atunci noi îți vom rambursa suma plătită în
                            mărime de 110%!
                        </p>
                        <p>
                            Noi nu îți promitem, îți garantăm! De ce? Pentru că avem încredere în serviciile noastre.
                            Investești fără nici un risc în a vorbi fluent limba engleză! Nu sunt litere mici, nici
                            mesaje ascunse.
                        </p>
                    </div>
                </div>
                <div className='garantee-img'>
                    <img
                        src='https://fantastic-english.md/wp-content/uploads/2021/04/Fantastic-English-Garantie-la-Cursuri-de-Engleza.webp'
                        alt='garantee-img'
                    />
                </div>
            </div>

            <div className='reviews container'>
                <h3 className='reviews-header'>
                    Ce spun studenții noștri despre Cursurile de Engleză la Fantastic English:
                </h3>
                <Slider
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        }
                    }}
                >
                    {reviews.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Review item={item} />
                            </SwiperSlide>
                        )
                    })}
                </Slider>
                <h3 className='reviews-advantage-header'>Studenții pregătiți de profesorii noștri au obținut:</h3>
                <div className='reviews-advantage-line' />
                <ul className='reviews-advantage-list'>
                    <li className='reviews-advantage-list-item'>
                        <div className='reviews-advantage-list-item-icon'>
                            <IoCheckmarkSharp />
                        </div>
                        Punctaje mari la examenul TOEFL cu media de 94 puncte, iar punctajele maxime obținute au fost
                        112.
                    </li>
                    <li className='reviews-advantage-list-item'>
                        <div className='reviews-advantage-list-item-icon'>
                            <IoCheckmarkSharp />
                        </div>
                        Primele locuri la olimpiada republicană de Engleză din 2013 până în prezent.
                    </li>
                </ul>
            </div>

            <div className='advantage'>
                <div className='advantage-item'>
                    <img src='https://fantastic-english.md/wp-content/uploads/2021/04/Time.png' alt='Teach' />
                    <h3>Alegi timpul potrivit pentru tine</h3>
                </div>
                <div className='advantage-item'>
                    <img
                        src='https://fantastic-english.md/wp-content/uploads/2021/04/Profesori-Calificati-SITE-1.png'
                        alt='Teach'
                    />
                    <h3>vem doar profesori certificați</h3>
                </div>
                <div className='advantage-item'>
                    <img src='	https://fantastic-english.md/wp-content/uploads/2021/04/Motivate-1.png' alt='Teach' />
                    <h3>Fiecare profesor motivează și monitorizează</h3>
                </div>
            </div>

            <div className='contact-form'>
                <div className='contact-form-wrapper'>
                    <div className='contact-form-wrapper-img' />
                    <div className='contact-form-wrapper-form'>
                        <h3 className='contact-form-wrapper-form-header'>
                            Vrei să afli mai multe informații despre cursurile de engleză la Fantastic English?
                        </h3>
                        <p className='contact-form-wrapper-form-description'>
                            Completează formularul de mai jos și managerul nostru te va contacta pentru a-ți oferi toate
                            detaliile.
                        </p>
                        <Form privacyType='underline' checkboxColor='white' />
                        <div className='contact-form-wrapper-form-triangle' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
