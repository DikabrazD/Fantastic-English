import './Home.scss'
import axios from 'axios'
import { SwiperSlide } from 'swiper/react'
import { ButtonType } from 'src/components/Button/ButtonInterface'
import { useEffect, useState } from 'react'
import { CardInterface } from 'src/components/Card/CardInterface'
import { ReviewInterface } from 'src/components/Review/ReviewInterface'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import PhoneInput from 'react-phone-input-2'
import Combobox from 'src/components/Combobox'
import Checkbox from 'src/components/Checkbox'
import Courses from 'src/components/Courses'
import Card from 'src/components/Card'
import Slider from 'src/components/Slider'
import Review from 'src/components/Review'

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
                {/* <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    pagination={{
                        dynamicBullets: true
                    }}
                    loop={true}
                    autoHeight={true}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    className='reviews-slider'
                >
                    <SwiperSlide className='reviews-slider-item'>
                        <div className='reviews-slider-item-main'>
                            <div className='reviews-slider-item-main-quotes'>
                                <RiDoubleQuotesL />
                            </div>
                            <p className='reviews-slider-item-main-comment'>
                                Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care m-am
                                simțit extrem de motivată și satisfăcută de rezultatele pe care le-am obținut. În tot
                                acest timp mi-am cunoscut colegii de grup, învățătoarea noastră extrem de pozitivă și
                                capabilă de a ne explica orice temă, orice întrebare( Mrs. Olga, thank you soo much🥰)
                                și desigur că mi-am mai luat un curs, ca să studiez mai departe această minunată limbă,
                                care ne este de mare ajutor. Și nu în ultimul rând mulțumesc fondatorilor Fantastic
                                English. I love you, see you soon. Bye!❤ Mi-a plăcut mult de tot să să fac parte din
                                această familie minunată, în care m-am simțit extrem de motivată și satisfăcută de
                                rezultatele pe care le-am obținut. În tot acest timp mi-am cunoscut colegii de grup,
                                învățătoarea noastră extrem de pozitivă și capabilă de a ne explica orice temă, orice
                                întrebare( Mrs. Olga, thank you soo much🥰) și desigur că mi-am mai luat un curs, ca să
                                studiez mai departe această minunată limbă, care ne este de mare ajutor. Și nu în
                                ultimul rând mulțumesc fondatorilor Fantastic English. I love you, see you soon. Bye!❤
                                Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care m-am
                                simțit extrem de motivată și satisfăcută de rezultatele pe care le-am obținut. În tot
                                acest timp mi-am cunoscut colegii de grup, învățătoarea noastră extrem de pozitivă și
                                capabilă de a ne explica orice temă, orice întrebare( Mrs. Olga, thank you soo much🥰)
                                și desigur că mi-am mai luat un curs, ca să studiez mai departe această minunată limbă,
                                care ne este de mare ajutor. Și nu în ultimul rând mulțumesc fondatorilor Fantastic
                                English. I love you, see you soon. Bye!❤ Mi-a plăcut mult de tot să să fac parte din
                                această familie minunată, în care m-am simțit extrem de motivată și satisfăcută de
                                rezultatele pe care le-am obținut. În tot acest timp mi-am cunoscut colegii de grup,
                                învățătoarea noastră extrem de pozitivă și capabilă de a ne explica orice temă, orice
                                întrebare( Mrs. Olga, thank you soo much🥰) și desigur că mi-am mai luat un curs, ca să
                                studiez mai departe această minunată limbă, care ne este de mare ajutor. Și nu în
                                ultimul rând mulțumesc fondatorilor Fantastic English. I love you, see you soon. Bye!❤
                            </p>
                            <div className='reviews-slider-item-main-social'>
                                <img
                                    src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                    alt=''
                                />
                            </div>
                            <div className='reviews-slider-item-main-triangle'></div>
                        </div>
                        <div className='reviews-slider-item-author'>
                            <div className='reviews-slider-item-author-img'>
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                    alt='avatar comentator'
                                />
                            </div>
                            <div className='reviews-slider-item-author-info'>
                                <h4>Victoria Balagiu</h4>
                                <h5>28 aprilie 2021</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews-slider-item'>
                        <div className='reviews-slider-item-main'>
                            <div className='reviews-slider-item-main-quotes'>
                                <RiDoubleQuotesL />
                            </div>
                            <p className='reviews-slider-item-main-comment'>
                                Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care m-am
                                simțit extrem de motivată și satisfăcută de rezultatele pe care le-am obținut. În tot
                                acest timp mi-am cunoscut colegii de grup, învățătoarea noastră extrem de pozitivă și
                                capabilă de a ne explica orice temă, orice întrebare( Mrs. Olga, thank you soo much🥰)
                                și desigur că mi-am mai luat un curs, ca să studiez mai departe această minunată limbă,
                                care ne este de mare ajutor. Și nu în ultimul rând mulțumesc fondatorilor Fantastic
                                English. I love you, see you soon. Bye!❤
                            </p>
                            <div className='reviews-slider-item-main-social'>
                                <img
                                    src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                    alt=''
                                />
                            </div>
                            <div className='reviews-slider-item-main-triangle'></div>
                        </div>
                        <div className='reviews-slider-item-author'>
                            <div className='reviews-slider-item-author-img'>
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                    alt='avatar comentator'
                                />
                            </div>
                            <div className='reviews-slider-item-author-info'>
                                <h4>Victoria Balagiu</h4>
                                <h5>28 aprilie 2021</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews-slider-item'>
                        <div className='reviews-slider-item-main'>
                            <div className='reviews-slider-item-main-quotes'>
                                <RiDoubleQuotesL />
                            </div>
                            <p className='reviews-slider-item-main-comment'>
                                Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care m-am
                                simțit extrem de motivată și satisfăcută de rezultatele pe care le-am obținut. În tot
                                acest timp mi-am cunoscut colegii de grup, învățătoarea noastră extrem de pozitivă și
                                capabilă de a ne explica orice temă, orice întrebare( Mrs. Olga, thank you soo much🥰)
                                și desigur că mi-am mai luat un curs, ca să studiez mai departe această minunată limbă,
                                care ne este de mare ajutor. Și nu în ultimul rând mulțumesc fondatorilor Fantastic
                                English. I love you, see you soon. Bye!❤
                            </p>
                            <div className='reviews-slider-item-main-social'>
                                <img
                                    src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                    alt=''
                                />
                            </div>
                            <div className='reviews-slider-item-main-triangle'></div>
                        </div>
                        <div className='reviews-slider-item-author'>
                            <div className='reviews-slider-item-author-img'>
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                    alt='avatar comentator'
                                />
                            </div>
                            <div className='reviews-slider-item-author-info'>
                                <h4>Victoria Balagiu</h4>
                                <h5>28 aprilie 2021</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews-slider-item'>
                        <div className='reviews-slider-item-main'>
                            <div className='reviews-slider-item-main-quotes'>
                                <RiDoubleQuotesL />
                            </div>
                            <p className='reviews-slider-item-main-comment'>
                                Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care m-am
                                simțit extrem de motivată și satisfăcută de rezultatele pe care le-am obținut. În tot
                                acest timp mi-am cunoscut colegii de grup, învățătoarea noastră extrem de pozitivă și
                                capabilă de a ne explica orice temă, orice întrebare( Mrs. Olga, thank you soo much🥰)
                                și desigur că mi-am mai luat un curs, ca să studiez mai departe această minunată limbă,
                                care ne este de mare ajutor. Și nu în ultimul rând mulțumesc fondatorilor Fantastic
                                English. I love you, see you soon. Bye!❤
                            </p>
                            <div className='reviews-slider-item-main-social'>
                                <img
                                    src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                    alt=''
                                />
                            </div>
                            <div className='reviews-slider-item-main-triangle'></div>
                        </div>
                        <div className='reviews-slider-item-author'>
                            <div className='reviews-slider-item-author-img'>
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                    alt='avatar comentator'
                                />
                            </div>
                            <div className='reviews-slider-item-author-info'>
                                <h4>Victoria Balagiu</h4>
                                <h5>28 aprilie 2021</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews-slider-item'>
                        <div className='reviews-slider-item-main'>
                            <div className='reviews-slider-item-main-quotes'>
                                <RiDoubleQuotesL />
                            </div>
                            <p className='reviews-slider-item-main-comment'>
                                Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care m-am
                                simțit extrem de motivată și satisfăcută de rezultatele pe care le-am obținut. În tot
                                acest timp mi-am cunoscut colegii de grup, învățătoarea noastră extrem de pozitivă și
                                capabilă de a ne explica orice temă, orice întrebare( Mrs. Olga, thank you soo much🥰)
                                și desigur că mi-am mai luat un curs, ca să studiez mai departe această minunată limbă,
                                care ne este de mare ajutor. Și nu în ultimul rând mulțumesc fondatorilor Fantastic
                                English. I love you, see you soon. Bye!❤
                            </p>
                            <div className='reviews-slider-item-main-social'>
                                <img
                                    src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                    alt=''
                                />
                            </div>
                            <div className='reviews-slider-item-main-triangle'></div>
                        </div>
                        <div className='reviews-slider-item-author'>
                            <div className='reviews-slider-item-author-img'>
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                    alt='avatar comentator'
                                />
                            </div>
                            <div className='reviews-slider-item-author-info'>
                                <h4>Victoria Balagiu</h4>
                                <h5>28 aprilie 2021</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviews-slider-item'>
                        <div className='reviews-slider-item-main'>
                            <div className='reviews-slider-item-main-quotes'>
                                <RiDoubleQuotesL />
                            </div>
                            <p className='reviews-slider-item-main-comment'>
                                Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care m-am
                                simțit extrem de motivată și satisfăcută de rezultatele pe care le-am obținut. În tot
                                acest timp mi-am cunoscut colegii de grup, învățătoarea noastră extrem de pozitivă și
                                capabilă de a ne explica orice temă, orice întrebare( Mrs. Olga, thank you soo much🥰)
                                și desigur că mi-am mai luat un curs, ca să studiez mai departe această minunată limbă,
                                care ne este de mare ajutor. Și nu în ultimul rând mulțumesc fondatorilor Fantastic
                                English. I love you, see you soon. Bye!❤
                            </p>
                            <div className='reviews-slider-item-main-social'>
                                <img
                                    src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                    alt=''
                                />
                            </div>
                            <div className='reviews-slider-item-main-triangle'></div>
                        </div>
                        <div className='reviews-slider-item-author'>
                            <div className='reviews-slider-item-author-img'>
                                <img
                                    src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                    alt='avatar comentator'
                                />
                            </div>
                            <div className='reviews-slider-item-author-info'>
                                <h4>Victoria Balagiu</h4>
                                <h5>28 aprilie 2021</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper> */}

                {/* <div className='reviews-slider'>
                    <div>round</div>
                    <div className='reviews-slider-inner'>
                        <div className='reviews-slider'>
                            <div className='reviews-slider-item'>
                                <div className='reviews-slider-item-main'>
                                    <div className='reviews-slider-item-main-quotes'>
                                        <RiDoubleQuotesL />
                                    </div>
                                    <p className='reviews-slider-item-main-comment'>
                                        Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care
                                        m-am simțit extrem de motivată și satisfăcută de rezultatele pe care le-am
                                        obținut. În tot acest timp mi-am cunoscut colegii de grup, învățătoarea noastră
                                        extrem de pozitivă și capabilă de a ne explica orice temă, orice întrebare( Mrs.
                                        Olga, thank you soo much🥰) și desigur că mi-am mai luat un curs, ca să studiez
                                        mai departe această minunată limbă, care ne este de mare ajutor. Și nu în
                                        ultimul rând mulțumesc fondatorilor Fantastic English. I love you, see you soon.
                                        Bye!❤
                                    </p>
                                    <div className='reviews-slider-item-main-social'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                            alt=''
                                        />
                                    </div>
                                    <div className='reviews-slider-item-main-triangle'></div>
                                </div>
                                <div className='reviews-slider-item-author'>
                                    <div className='reviews-slider-item-author-img'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                            alt='avatar comentator'
                                        />
                                    </div>
                                    <div className='reviews-slider-item-author-info'>
                                        <h4>Victoria Balagiu</h4>
                                        <h5>28 aprilie 2021</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='reviews-slider-item'>
                                <div className='reviews-slider-item-main'>
                                    <div className='reviews-slider-item-main-quotes'>
                                        <RiDoubleQuotesL />
                                    </div>
                                    <p className='reviews-slider-item-main-comment'>
                                        Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care
                                        m-am simțit extrem de motivată și satisfăcută de rezultatele pe care le-am
                                        obținut. În tot acest timp mi-am cunoscut colegii de grup, învățătoarea noastră
                                        extrem de pozitivă și capabilă de a ne explica orice temă, orice întrebare( Mrs.
                                        Olga, thank you soo much🥰) și desigur că mi-am mai luat un curs, ca să studiez
                                        mai departe această minunată limbă, care ne este de mare ajutor. Și nu în
                                        ultimul rând mulțumesc fondatorilor Fantastic English. I love you, see you soon.
                                        Bye!❤
                                    </p>
                                    <div className='reviews-slider-item-main-social'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                            alt=''
                                        />
                                    </div>
                                    <div className='reviews-slider-item-main-triangle'></div>
                                </div>
                                <div className='reviews-slider-item-author'>
                                    <div className='reviews-slider-item-author-img'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                            alt='avatar comentator'
                                        />
                                    </div>
                                    <div className='reviews-slider-item-author-info'>
                                        <h4>Victoria Balagiu</h4>
                                        <h5>28 aprilie 2021</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='reviews-slider-item'>
                                <div className='reviews-slider-item-main'>
                                    <div className='reviews-slider-item-main-quotes'>
                                        <RiDoubleQuotesL />
                                    </div>
                                    <p className='reviews-slider-item-main-comment'>
                                        Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care
                                        m-am simțit extrem de motivată și satisfăcută de rezultatele pe care le-am
                                        obținut. În tot acest timp mi-am cunoscut colegii de grup, învățătoarea noastră
                                        extrem de pozitivă și capabilă de a ne explica orice temă, orice întrebare( Mrs.
                                        Olga, thank you soo much🥰) și desigur că mi-am mai luat un curs, ca să studiez
                                        mai departe această minunată limbă, care ne este de mare ajutor. Și nu în
                                        ultimul rând mulțumesc fondatorilor Fantastic English. I love you, see you soon.
                                        Bye!❤
                                    </p>
                                    <div className='reviews-slider-item-main-social'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                            alt=''
                                        />
                                    </div>
                                    <div className='reviews-slider-item-main-triangle'></div>
                                </div>
                                <div className='reviews-slider-item-author'>
                                    <div className='reviews-slider-item-author-img'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                            alt='avatar comentator'
                                        />
                                    </div>
                                    <div className='reviews-slider-item-author-info'>
                                        <h4>Victoria Balagiu</h4>
                                        <h5>28 aprilie 2021</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='reviews-slider-item'>
                                <div className='reviews-slider-item-main'>
                                    <div className='reviews-slider-item-main-quotes'>
                                        <RiDoubleQuotesL />
                                    </div>
                                    <p className='reviews-slider-item-main-comment'>
                                        Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care
                                        m-am simțit extrem de motivată și satisfăcută de rezultatele pe care le-am
                                        obținut. În tot acest timp mi-am cunoscut colegii de grup, învățătoarea noastră
                                        extrem de pozitivă și capabilă de a ne explica orice temă, orice întrebare( Mrs.
                                        Olga, thank you soo much🥰) și desigur că mi-am mai luat un curs, ca să studiez
                                        mai departe această minunată limbă, care ne este de mare ajutor. Și nu în
                                        ultimul rând mulțumesc fondatorilor Fantastic English. I love you, see you soon.
                                        Bye!❤
                                    </p>
                                    <div className='reviews-slider-item-main-social'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                            alt=''
                                        />
                                    </div>
                                    <div className='reviews-slider-item-main-triangle'></div>
                                </div>
                                <div className='reviews-slider-item-author'>
                                    <div className='reviews-slider-item-author-img'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                            alt='avatar comentator'
                                        />
                                    </div>
                                    <div className='reviews-slider-item-author-info'>
                                        <h4>Victoria Balagiu</h4>
                                        <h5>28 aprilie 2021</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='reviews-slider-item'>
                                <div className='reviews-slider-item-main'>
                                    <div className='reviews-slider-item-main-quotes'>
                                        <RiDoubleQuotesL />
                                    </div>
                                    <p className='reviews-slider-item-main-comment'>
                                        Mi-a plăcut mult de tot să să fac parte din această familie minunată, în care
                                        m-am simțit extrem de motivată și satisfăcută de rezultatele pe care le-am
                                        obținut. În tot acest timp mi-am cunoscut colegii de grup, învățătoarea noastră
                                        extrem de pozitivă și capabilă de a ne explica orice temă, orice întrebare( Mrs.
                                        Olga, thank you soo much🥰) și desigur că mi-am mai luat un curs, ca să studiez
                                        mai departe această minunată limbă, care ne este de mare ajutor. Și nu în
                                        ultimul rând mulțumesc fondatorilor Fantastic English. I love you, see you soon.
                                        Bye!❤
                                    </p>
                                    <div className='reviews-slider-item-main-social'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/plugins/wp-facebook-reviews/public/partials/imgs/facebook_small_icon.png'
                                            alt=''
                                        />
                                    </div>
                                    <div className='reviews-slider-item-main-triangle'></div>
                                </div>
                                <div className='reviews-slider-item-author'>
                                    <div className='reviews-slider-item-author-img'>
                                        <img
                                            src='https://fantastic-english.md/wp-content/uploads/2021/04/Curs-de-Engleza-Beginner-Incepatori-A1_result.webp'
                                            alt='avatar comentator'
                                        />
                                    </div>
                                    <div className='reviews-slider-item-author-info'>
                                        <h4>Victoria Balagiu</h4>
                                        <h5>28 aprilie 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>round</div>
                </div> */}
            </div>
        </>
    )
}

export default Home
