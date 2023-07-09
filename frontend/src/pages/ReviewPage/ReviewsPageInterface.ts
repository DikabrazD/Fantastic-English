export interface VideoReviewInterface {
    _id: number
    src: string
    title: string
}

export interface VideoReviewAxios {
    customers: VideoReviewInterface[]
    totalCount: number
}
