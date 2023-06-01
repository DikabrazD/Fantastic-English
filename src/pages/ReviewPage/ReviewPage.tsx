import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import { useState, useEffect } from 'react'
import { VideoReviewInterface } from './ReviewsPageInterface'

import './ReviewsPage.scss'
import axios from 'axios'

const ReviewPage = () => {
    const [reviews, setReviews] = useState<VideoReviewInterface[]>([])
    const [page, setPage] = useState<number>(0)
    const [fetching, setFetching] = useState<boolean>(true)
    const [totalCount, setTotalCount] = useState<number>(0)

    useEffect(() => {
        if (fetching) {
            axios
                .get(`http://localhost:3000/video_reviews?_page=${page}&_limit=9`)
                .then((res) => {
                    setTotalCount(Number(res.headers['x-total-count']))
                    setReviews([...reviews, ...res.data])
                    setPage((prevState) => prevState + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [fetching])

    const scrollHandler = () => {
        if (
            document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 400 &&
            reviews.length < totalCount
        ) {
            setFetching(true)
        }
    }

    return (
        <div>
            <Breadcrumbs current='Video Recenzii' />

            <div className='reviewsList container'>
                {reviews.map((item) => {
                    return (
                        <div className='reviewsList-item' key={item.id}>
                            <iframe
                                className='image'
                                src={item.src}
                                title='YouTube video player'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            ></iframe>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReviewPage
