import { useState, useEffect } from 'react'
import { VideoReviewInterface } from './ReviewsPageInterface'

import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'
import VideoReviewService from 'src/API/VideoReviewsService'

import './ReviewsPage.scss'

const ReviewPage = () => {
    const [reviews, setReviews] = useState<VideoReviewInterface[]>([])
    const [page, setPage] = useState<number>(0)
    const [fetching, setFetching] = useState<boolean>(true)
    const [totalCount, setTotalCount] = useState<number>(0)

    useEffect(() => {
        const fetchData = async () => {
            if (fetching) {
                const videoReviewsData = await VideoReviewService.getCustomers(page)
                if (videoReviewsData) {
                    setTotalCount(videoReviewsData.totalCount)
                    setReviews([...reviews, ...videoReviewsData.customers])
                    setPage((prevState) => prevState + 1)
                }
                setFetching(false)
            }
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <div className='reviewsList-item' key={item._id}>
                            <iframe
                                className='image'
                                src={item.src}
                                title={item.title}
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
