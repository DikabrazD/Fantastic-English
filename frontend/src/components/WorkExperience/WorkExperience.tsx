import { useEffect, useState } from 'react'
import { ReviewWork } from './WorkExperienceInterface'

import VideoReviewService from 'src/API/VideoReviewsService'

import './WorkExperience.scss'

const WorkExperience = () => {
    const [reviews, setReviews] = useState<ReviewWork[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const reviewsData = await VideoReviewService.getWorkers()
            if (reviewsData) setReviews(reviewsData)
        }
        fetchData()
    }, [])

    return (
        <div className='workexperience' id='workexperience'>
            <h2 className='workexperience-header'>Cum e să lucrezi la fantastic english?</h2>
            <ul className='workexperience-list'>
                {reviews.map((item) => {
                    return (
                        <li key={item._id} className='workexperience-list-item'>
                            <iframe
                                className='image'
                                src='https://www.youtube.com/embed/cJ3NzL6jAGk'
                                title={item.title}
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WorkExperience
