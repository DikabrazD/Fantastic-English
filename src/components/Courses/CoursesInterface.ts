export interface CategoryInterface {
    id: number
    name: string
    courses: number[]
}

export interface CoursInterface {
    id: number
    name: string
    price: number
    number_lectures: number
    img: string
}
