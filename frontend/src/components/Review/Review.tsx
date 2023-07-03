import './Review.scss'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { AiFillFacebook } from 'react-icons/ai'
import { ReviewInterface } from './ReviewInterface'

const Review = ({ item }: { item: ReviewInterface }) => {
    return (
        <div className='review'>
            <div className='review-main'>
                <div className='review-main-quotes'>
                    <RiDoubleQuotesL />
                </div>
                <p className='review-main-comment'>{item.comment}</p>
                <div className='review-main-social'>
                    <AiFillFacebook className='review-main-social-icon' />
                </div>
                <div className='review-main-triangle' />
            </div>
            <div className='review-author'>
                <div className='review-author-img'>
                    <img src={item.img} alt='Commentator ava' />
                </div>
                <div className='review-author-info'>
                    <h4>{item.name}</h4>
                    <h5>{item.date}</h5>
                </div>
            </div>
        </div>
    )
}

export default Review
