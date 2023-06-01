export interface CardInterface {
    id: number
    name: string
    position: string
    description?: string
    img: string
    imgKid: string
}

export interface CardComponentInterface {
    card: CardInterface
    descriptionStatus: boolean
}
