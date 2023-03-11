export interface CardInterface {
    id: number
    name: string
    position: string
    description?: string
    img1: string
    img2: string
}

export interface CardComponentInterface {
    card: CardInterface
    descriptionStatus: boolean
}
