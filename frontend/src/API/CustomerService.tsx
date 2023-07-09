import { DataFormInterface } from 'src/components/Form/FormInterface'
import { DataFormTrialInterface } from 'src/pages/Home/Components/FormTrial/FormTrialInterface'

import axios from 'axios'

export default class CustomerService {
    static async create(data: DataFormInterface | DataFormTrialInterface) {
        try {
            await axios.post<DataFormInterface | DataFormTrialInterface>('http://localhost:4000/api/customers', data)
        } catch (e) {
            console.log(e)
        }
    }
}
