import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import './CareerPage.scss'
import AsideNav from 'src/components/AsideNav/AsideNav'
import WorkExperience from 'src/components/WorkExperience/WorkExperience'

const CareerPage = () => {
    const about = [
        {
            id: 0,
            image: 'https://fantastic-english.md/wp-content/uploads/2022/04/female.png',
            text: ' Peste 40 de profesori fantastici, deținători de certificate internaționale (CELTA,TOEFL, Cambridge CAE/FCE, EFL, TEFL).'
        },
        {
            id: 1,
            image: 'https://fantastic-english.md/wp-content/uploads/2022/04/global-network.png',
            text: ' Peste 40 de profesori fantastici, deținători de certificate internaționale (CELTA,TOEFL, Cambridge CAE/FCE, EFL, TEFL).'
        },
        {
            id: 2,
            image: 'https://fantastic-english.md/wp-content/uploads/2022/04/goal.png',
            text: ' Au fost organizate peste 30 team-building-uri și worshop-uri în cadrul școlii orientate spre creșterea productivității și fortificării competențelor profesionale.'
        },
        {
            id: 3,
            image: 'https://fantastic-english.md/wp-content/uploads/2022/04/group.png',
            text: ' Peste 30 000 studenți Fantastici care și-au avansat nivelul de Engleză datorită metodologiilor noastre educaționale.'
        }
    ]

    const benefits = [
        {
            id: 0,
            text: '50% reducere la produsele și serviciile companiei pentru tine și familia ta.'
        },
        {
            id: 1,
            text: 'Team building-uri interactive și energizante.'
        },
        {
            id: 2,
            text: 'Cursuri de dezvoltare profesională achitate integral de angajator.'
        },
        {
            id: 3,
            text: 'Petreceri corporative.'
        },
        {
            id: 4,
            text: '50% reducere la cărți de dezvoltare personală.'
        },
        {
            id: 5,
            text: 'Cadouri de sărbători.'
        }
    ]

    const navLinks = [
        {
            id: 0,
            name: 'Cum e să lucrezi la Fantastic English?',
            href: '#workexperience'
        },
        {
            id: 1,
            name: 'Fantastic English Astăzi',
            href: '#careerAbout'
        },
        {
            id: 2,
            name: 'Beneficii',
            href: '#benefits'
        }
    ]

    return (
        <div className='career'>
            <Breadcrumbs current='Cariera' />
            <div className='career-wrapper'>
                <AsideNav data={navLinks} />
                <div className='career-wrapper-main'>
                    <WorkExperience />
                    <section className='career-wrapper-main-about' id='careerAbout'>
                        <h2 className='career-wrapper-main-about-header'>Fantastic English Astăzi</h2>
                        <ul className='career-wrapper-main-about-list'>
                            {about.map((item) => {
                                return (
                                    <li key={item.id} className='career-wrapper-main-about-list-item'>
                                        <div className='career-wrapper-main-about-list-item-image'>
                                            <img className='image' src={item.image} alt='teacher' />
                                        </div>
                                        <p className='career-wrapper-main-about-list-item-text'>{item.text}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>

                    <section className='career-wrapper-main-benefits' id='benefits'>
                        <h2 className='career-wrapper-main-benefits-header'>Beneficii</h2>
                        <ul className='career-wrapper-main-benefits-list'>
                            {benefits.map((item) => {
                                return (
                                    <li key={item.id} className='career-wrapper-main-benefits-list-item'>
                                        <div className='career-wrapper-main-benefits-list-item-image'>
                                            <img
                                                className='image'
                                                src='https://fantastic-english.md/wp-content/uploads/2020/10/favicon-150x150.png'
                                                alt='check'
                                            />
                                        </div>
                                        <p className='career-wrapper-main-benefits-list-item-text'>{item.text}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CareerPage
