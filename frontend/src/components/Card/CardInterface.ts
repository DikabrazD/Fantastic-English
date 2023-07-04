export interface CardInterface {
    _id: number
    name: string
    position: string
    description?: string
    img: string
    imgKid: string
}

export interface CardComponentInterface {
    data: CardInterface
    descriptionStatus: boolean
    positionStatus?: boolean
}
