import './Card.scss'
import { CardComponentInterface } from './CardInterface'

const Card = ({ data, descriptionStatus = false }: CardComponentInterface) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img className='card-image-main' src={data.img} alt='Card' />
                <img className='card-image-kid' src={data.imgKid} alt='Card' />
            </div>
            <h3>{data.name}</h3>
            {data.position && <h4>{data.position}</h4>}
            {descriptionStatus && <p>{data.description}</p>}
        </div>
    )
}

export default Card
