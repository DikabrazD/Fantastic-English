import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import './TestsPage.scss'
import Button from 'src/components/Button/Button'
import { ButtonType } from 'src/components/Button/ButtonInterface'

const TestsPage = () => {
    return (
        <div className='tests'>
            <Breadcrumbs current='Teste' />
            <div className='tests-wrapper container'>
                <div className='tests-wrapper-video'>
                    <iframe
                        className='tests-wrapper-video-iframe'
                        title='Testează nivelul tău de engleză'
                        src='https://www.youtube.com/embed/JYOLlocngPY'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    />
                    <div className='tests-wrapper-video-text'>
                        <h3 className='tests-wrapper-video-text-title'>
                            află nivelul tău de engleză în doar 10 minute, treci testul ▼
                        </h3>
                        <ul className='tests-wrapper-video-text-list'>
                            <li className='tests-wrapper-video-text-list-item'>
                                Mai bine de 90% dintre studenți nu-și cunosc nivelul actual de engleză și întâmpină
                                dificultăți în alegerea cursului potrivit. Din acest motiv te invităm să treci gratuit
                                testul nostru online pentru a afla nivelul tău actual de engleză. Fiecare întrebare are
                                o singură variantă corectă de răspuns. Pentru asigurarea unui rezultat corect te rugăm
                                să completezi acest test individual, fără surse de informare
                            </li>
                            <li>
                                După ce-l treci vei afla ce nivel de engleză posezi și vei putea alege ușor cursul
                                perfect pentru tine.
                            </li>
                        </ul>
                        <div className='tests-wrapper-video-text-quiz'>
                            <Button type={ButtonType.blink} text='Află nivelul tău de engleză' />
                        </div>
                    </div>
                </div>
                <div className='tests-wrapper-book'>
                    <div className='tests-wrapper-book-text'>
                        <h3 className='tests-wrapper-book-text-title'>
                            află nivelul tău de engleză în doar 10 minute, treci testul ▼
                        </h3>
                        <ul className='tests-wrapper-book-text-list'>
                            <li className='tests-wrapper-book-text-list-item'>
                                Mai bine de 90% dintre studenți nu-și cunosc nivelul actual de engleză și întâmpină
                                dificultăți în alegerea cursului potrivit. Din acest motiv te invităm să treci gratuit
                                testul nostru online pentru a afla nivelul tău actual de engleză. Fiecare întrebare are
                                o singură variantă corectă de răspuns. Pentru asigurarea unui rezultat corect te rugăm
                                să completezi acest test individual, fără surse de informare
                            </li>
                            <li>
                                După ce-l treci vei afla ce nivel de engleză posezi și vei putea alege ușor cursul
                                perfect pentru tine.
                            </li>
                        </ul>
                        <div className='tests-wrapper-book-text-quiz'>
                            <Button type={ButtonType.blink} text='Află nivelul tău de engleză' />
                        </div>
                    </div>
                    <div className='tests-wrapper-book-image'>
                        <img
                            className='image'
                            src='	https://fantastic-english.md/wp-content/uploads/2021/12/65-lectii-image-1-450x450.png'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestsPage
