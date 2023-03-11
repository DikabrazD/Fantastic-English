import './Card.scss'
import { CardComponentInterface, CardInterface } from './CardInterface'

const Card = ({ card, descriptionStatus }: CardComponentInterface) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img className='card-image-main' src={card.img1} alt='Card image' />
                <img className='card-image-kid' src={card.img2} alt='Card image' />
            </div>
            <h3>{card.name}</h3>
            {descriptionStatus && <p>{card.description}</p>}
            {card.position && <h4>{card.position}</h4>}
        </div>
    )
}

export default Card
