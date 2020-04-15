import { BENEFITS_SVC_URL } from './config'
import axios from 'axios'

export const getBenefitsFromLocalhost = () => {
    return axios.get(`${BENEFITS_SVC_URL}/benefits`)
        .then(res => res.data)
}