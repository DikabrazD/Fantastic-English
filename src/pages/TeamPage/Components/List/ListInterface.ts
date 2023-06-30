import { ManagerInterface } from 'src/ts/ManagerInterface'
import { TeacherInterface } from 'src/ts/TeacherInterface'

export interface ListInterface {
    data: TeacherInterface[] | ManagerInterface[]
    name: string
    id: string
}
