export interface CategoryInterface {
    _id: string
    name: string
    courses: string[]
}

export interface CourseInterface {
    _id: string
    name: string
    price: number
    number_lectures: number
    img: string
}
