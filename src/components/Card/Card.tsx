import './Card.scss'
import { CardComponentInterface } from './CardInterface'

const Card = ({ card, descriptionStatus = false }: CardComponentInterface) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img className='card-image-main' src={card.img} alt='Card' />
                <img className='card-image-kid' src={card.imgKid} alt='Card' />
            </div>
            <h3>{card.name}</h3>
            {descriptionStatus && <p>{card.description}</p>}
            {card.position && <h4>{card.position}</h4>}
        </div>
    )
}

export default Card
